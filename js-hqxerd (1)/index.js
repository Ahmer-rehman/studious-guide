import { createClient } from '@sanity/client';
import './assets/css/style.css';
export const client = createClient({
  projectId: '9ap2mdnz',
  dataset: 'production',
  token:
    'skxupqUwYUdR0RPMB0dJJv5TxR5fHAI1M4WvdhLPux9Y2UPxUScxqFzJVTqtm8dCl5VlDF2W9ZjhhCXupbl509FxWM82KkcgxbzrYq6u7yP2mNv5T8KqVqT8kZcrENJ5iX2ewDJw85OcUyizTuK0OeqSiQtExI2q1qV8sb91goyP3JVoMGyh', // Optional if you don't have authentication enabled
  useCdn: true, // Set to true for read-only access and faster response times
  apiVersion: 'v2022-03-07',
});

//  Top ribbon
async function fetchnotification() {
  const query = `*[_type == "notification"]{
    title,
    description,
    isActive
  }`;

  try {
    const notifications = await client.fetch(query);
    console.log(notifications);
    const activeNotification = notifications.find(notification => notification.isActive);
    const topRibbon = document.querySelector('.top-ribbon');
    const ribbonText = document.getElementById('notification_bar');
    if (activeNotification) {
      ribbonText.textContent = activeNotification.description;
      topRibbon.classList.remove('display');
    } else {
      topRibbon.classList.add('display');
      ribbonText.textContent = "No active notifications.";
    }
    if (activeNotification) {
      const noti = document.getElementById("notification_bar");
      noti.textContent = activeNotification.description;
    } else {
      console.log("No active notifications found.");
    }
  } catch (error) {
    console.error("Error fetching notifications:", error);
  }
}
function listenForUpdates() {
  client.listen(query).subscribe(update => {
    fetchnotification(); 
    fetchProducts();
    getlinks();
    fetchCollection()

  });
}

async function fetchContacts() {
  const query = '*[_type == "contacts"][0]'; // Adjust the query if needed
  const data = await client.fetch(query);
  console.log(data)
  const whatsapp=document.getElementById("whatsapp");
  whatsapp.textContent=data.whatsapp

}
fetchContacts()
fetchnotification();
listenForUpdates();
  async function fetchImages() {
  const query = `*[_type == "banner"]{
    title,
    description,
    "imageUrl": image.asset->url,
    image{
      altText
    },
    textPosition
  }`;
  try {
    const images = await client.fetch(query);
    // Listen for real-time updates
    client.listen(query).subscribe((update) => {
      console.log('Real-time update:', update);
      // Re-fetch and update the slideshow on each change
      fetchImages().then((newImages) => {
        updateSlideshow(newImages);
      });
    });

    return images;
  } catch (error) {
    console.error('Error fetching images:', error);
  }
}
function updateTextPositionClass(textPosition) {
  const bannerTextContainer = document.querySelector('.banner-text-container');
  if (bannerTextContainer) {
    bannerTextContainer.className = 'banner-text-container'; // Reset to default
    if (textPosition === 'right') {
      bannerTextContainer.classList.add('container-right');
    } else if (textPosition === 'left') {
      bannerTextContainer.classList.add('container-left');
    } else if (textPosition === 'center') {
      bannerTextContainer.classList.add('container-center');
    }
  }
}

// Initialize slideshow with images from Sanity
async function initSlideshow() {
  const images = await fetchImages();

  if (images && images.length > 0) {
    const slideshow = document.getElementById('slideshow');

    images.forEach((image, index) => {
      const slide = document.createElement('div');
      slide.className = 'slide';
      if (index === 0) slide.classList.add('active');
      slide.innerHTML = `<img src="${image.imageUrl}" alt="${
        image.image.altText || `Slide ${index + 1}`
      }">`;
      slideshow.appendChild(slide);
    });

    // Set the initial title and description
    const firstImage = images[0];
    if (firstImage) {
      document.getElementById('banner-title').textContent =
        firstImage.title || '';
      document.getElementById('banner-description').textContent =
        firstImage.description || '';
    }

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showNextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');

      // Update title and description with each slide change
      const currentImage = images[currentSlide];
      if (currentImage) {
        document.getElementById('banner-title').textContent =
          currentImage.title || '';
        document.getElementById('banner-description').textContent =
          currentImage.description || '';
          setInterval(
        updateTextPositionClass(currentImage.textPosition),5000)
      }
    }

    setInterval(showNextSlide, 5000);
  } else {
    console.log('No images found');
  }
}
initSlideshow();

// For the collection images under the main bannner
async function fetchCollection() {
  const data = await client.fetch(`
    *[_type == "collection"]{
      title,
      "imageUrl": image.asset->url,
      image{
        altText
      }
    }
  `);
  renderCollection(data);
  listenForUpdates();
}

function renderCollection(collection) {
  collection.forEach((item, index) => {
    const img = document.getElementById(`img${index + 1}`);
    const textDiv = document.getElementById(`title${index + 1}`);

    if (img) {
      img.src = item.imageUrl;
      img.alt = item.image.altText;
    }

    if (textDiv) {
      textDiv.textContent = item.title;
    }
  });
}


function listenForUpdates() {
  client.listen(`*[_type == "collection"]`).subscribe(update => {
    fetchCollection();
  });
}

// Initial fetch and start listening for updates
fetchCollection();

function handleCurrencyChange() {
  var select = document.getElementById('currency');
  var selectedCurrency = select.value;
  alert('Selected currency: ' + selectedCurrency);
  // You can add more actions here
}
//scroll effect navbr
window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.getElementById('bar-3');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
// selector
// Get the container element
// Get the template element
// Get the template element
// Define the query to fetch products

async function fetchProducts() {
  const products = await client.fetch( `*[_type == "product"]{
    title,
    "imageUrl": images[0].asset->url,
    "category": category->title,
    price,
    tags
  }`);
  console.log(products)
  renderProducts(products)
}

// Initial fetch of products
fetchProducts()
// Function to render products
function renderProducts(femaleClothes) {
  const template = document.getElementById('new-arrivals-item-template');
  const container = document.querySelector('.new-arrivals-container');

  if (!container) {
    console.error("Error: container element not found.");
    return;
  }

  // Filter items that are on sale or new
  const saleOrNewItems = femaleClothes.filter(
    (item) =>
      item.tags === 'sale' ||
      item.tags === 'Sale' ||
      item.tags === 'new' ||
      item.tags === 'New'
  );

  // Filter items that are not on sale or new
  const otherItems = femaleClothes.filter(
    (item) =>
      !(
        item.tags === 'sale' ||
        item.tags === 'Sale' ||
        item.tags === 'new' ||
        item.tags === 'New'
      )
  );

  // Concatenate the sale or new items with the other items
  const sortedItems = saleOrNewItems.concat(otherItems);

  // Clear the container before rendering new items
  container.innerHTML = '';

  // Render the sorted items
  sortedItems.forEach((item) => {
    const clonedTemplate = template.content.cloneNode(true);

    const img = clonedTemplate.querySelector('.new-arrivals-img');
    img.src = item.imageUrl;
    img.alt = item.title;

    const name = clonedTemplate.querySelector('.laaleh-shop-name');
    name.textContent = item.title;

    const price = clonedTemplate.querySelectorAll('.price');
    price[1].textContent = `Rs ${item.price.toFixed(2)}`;

    const ribbon = clonedTemplate.querySelector('.ribbon');
    // Display the ribbon only for items that are on sale or new
    if (
      item.tags === 'sale' ||
      item.tags === 'Sale' ||
      item.tags === 'new' ||
      item.tags === 'New'
    ) {
      ribbon.textContent = item.category.toUpperCase();
      ribbon.style.display = 'block';
    } else {
      ribbon.style.display = 'none';
    }

    container.appendChild(clonedTemplate);
  });
}
// Cart and quick view event listeners
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('cart-btn')) {
    alert('Add to Cart clicked');
  } else if (event.target.classList.contains('quick-view')) {
    alert('Quick View clicked');
  } else if (event.target.classList.contains('s-btn')) {
    alert(event.target.textContent + ' button clicked');
  }
});

// Function to update cart count
function updateCartCount(count) {
  document.querySelector('.cart-count').textContent = count;
}

// Example function to update the cart data
function updateCartData(data) {
  const cartDataDiv = document.querySelector('.cart-data');
  cartDataDiv.innerHTML = ''; // Clear existing data

  if (data.length === 0) {
    cartDataDiv.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    const ul = document.createElement('ul');
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    cartDataDiv.appendChild(ul);
  }
}

// Example usage
const cartItems = ["item 1"];

updateCartCount(cartItems.length);
updateCartData(cartItems);

// container.addEventListener('click', function (event) {
//   if (event.target.classList.contains('cart-btn')) {
//     alert('Add to Cart clicked');
//   } else if (event.target.classList.contains('quick-view')) {
//     alert('Quick View clicked');
//   } else if (event.target.classList.contains('s-btn')) {
//     alert(event.target.textContent + ' button clicked');
//   }
// });
// Cart logic
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('cart-btn')) {
    const itemId = event.target.getAttribute('data-id');
    const itemName = event.target.getAttribute('data-name');
    addItemToCart(itemId, itemName);
    alert('Add to Cart clicked');
  }
});

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('cart-btn')) {
    const itemId = event.target.dataset.id; // Retrieve the data-id attribute
    const itemName = event.target.dataset.name; // Retrieve the data-name attribute
    addItemToCart(itemId, itemName);
    alert('Add to Cart clicked');
  }
});

function addItemToCart(id, name) {
  // Function to add the item to the cart
  const cartDataDiv = document.querySelector('.cart-data');
  let cartContent = cartDataDiv.innerHTML;

  if (cartContent.includes('Your cart is empty.')) {
    cartDataDiv.innerHTML = '';
  }

  const itemElement = document.createElement('div');
  itemElement.textContent = `ID: ${id}, Name: ${name}`;
  cartDataDiv.appendChild(itemElement);

  // Update the cart count
  const cartCountDiv = document.querySelector('.cart-count');
  cartCountDiv.textContent = parseInt(cartCountDiv.textContent) + 1;
}

// PRice Slider
// Script.js
const rangevalue = document.querySelector('.slider-container .price-slider');
const rangeInputvalue = document.querySelectorAll('.range-input input');

// Set the price gap
let priceGap = 500;

// Adding event listners to price input elements
const priceInputvalue = document.querySelectorAll('.price-input input');
for (let i = 0; i < priceInputvalue.length; i++) {
  priceInputvalue[i].addEventListener('input', (e) => {
    // Parse min and max values of the range input
    let minp = parseInt(priceInputvalue[0].value);
    let maxp = parseInt(priceInputvalue[1].value);
    let diff = maxp - minp;

    if (minp < 0) {
      alert('minimum price cannot be less than 0');
      priceInputvalue[0].value = 0;
      minp = 0;
    }

    // Validate the input values
    if (maxp > 10000) {
      alert('maximum price cannot be greater than 10000');
      priceInputvalue[1].value = 10000;
      maxp = 10000;
    }

    if (minp > maxp - priceGap) {
      priceInputvalue[0].value = maxp - priceGap;
      minp = maxp - priceGap;

      if (minp < 0) {
        priceInputvalue[0].value = 0;
        minp = 0;
      }
    }

    // Check if the price gap is met
    // and max price is within the range
    if (diff >= priceGap && maxp <= rangeInputvalue[1].max) {
      if (e.target.className === 'min-input') {
        rangeInputvalue[0].value = minp;
        let value1 = rangeInputvalue[0].max;
        rangevalue.style.left = `${(minp / value1) * 100}%`;
      } else {
        rangeInputvalue[1].value = maxp;
        let value2 = rangeInputvalue[1].max;
        rangevalue.style.right = `${100 - (maxp / value2) * 100}%`;
      }
    }
  });

  // Add event listeners to range input elements
  for (let i = 0; i < rangeInputvalue.length; i++) {
    rangeInputvalue[i].addEventListener('input', (e) => {
      let minVal = parseInt(rangeInputvalue[0].value);
      let maxVal = parseInt(rangeInputvalue[1].value);

      let diff = maxVal - minVal;

      // Check if the price gap is exceeded
      if (diff < priceGap) {
        // Check if the input is the min range input
        if (e.target.className === 'min-range') {
          rangeInputvalue[0].value = maxVal - priceGap;
        } else {
          rangeInputvalue[1].value = minVal + priceGap;
        }
      } else {
        // Update price inputs and range progress
        priceInputvalue[0].value = minVal;
        priceInputvalue[1].value = maxVal;
        rangevalue.style.left = `${(minVal / rangeInputvalue[0].max) * 100}%`;
        rangevalue.style.right = `${
          100 - (maxVal / rangeInputvalue[1].max) * 100
        }%`;
      }
    });
  }
}
//foooter links
async function fetchSocialMediaLinks() {
  const query = '*[_type == "socialMediaLinks"][0]'; // Adjust the query if needed
  const data = await client.fetch(query);
  return data;
}
async function getlinks(){
const links = await fetchSocialMediaLinks();
         console.log(links)  
  if (links) {
    document.getElementById('facebook-link').href = links.facebook || '#';
    document.getElementById('pinterest-link').href = links.pinterest || '#';
    document.getElementById('youtube-link').href = links.youtube || '#';
    document.getElementById('instagram-link').href = links.instagram || '#';
  }
}
getlinks()