const femaleClothes = [
  // Festive
  { id: 1, name: "Elegant Festive Dress", category: "festive", price: 99.99, imageUrl: "https://placehold.co/650x650?text=Festive+Dress" },
  { id: 2, name: "Festive Embroidered Lehenga", category: "festive", price: 199.99, imageUrl: "https://placehold.co/650x650?text=Festive+Embroidered+Lehenga" },
  { id: 3, name: "Festive Anarkali Suit", category: "festive", price: 149.99, imageUrl: "https://placehold.co/650x650?text=Festive+Anarkali+Suit" },
  { id: 4, name: "Festive Kurta Set", category: "festive", price: 89.99, imageUrl: "https://placehold.co/650x650?text=Festive+Kurta+Set" },
  { id: 5, name: "Festive Saree", category: "festive", price: 129.99, imageUrl: "https://placehold.co/650x650?text=Festive+Saree" },
  { id: 6, name: "Festive Gown", category: "festive", price: 179.99, imageUrl: "https://placehold.co/650x650?text=Festive+Gown" },
  { id: 7, name: "Festive Sharara Suit", category: "festive", price: 159.99, imageUrl: "https://placehold.co/650x650?text=Festive+Sharara+Suit" },
  { id: 8, name: "Festive Palazzo Set", category: "festive", price: 119.99, imageUrl: "https://placehold.co/650x650?text=Festive+Palazzo+Set" },
  { id: 9, name: "Festive Churidar Suit", category: "festive", price: 109.99, imageUrl: "https://placehold.co/650x650?text=Festive+Churidar+Suit" },
  { id: 10, name: "Festive Salwar Kameez", category: "festive", price: 139.99, imageUrl: "https://placehold.co/650x650?text=Festive+Salwar+Kameez" },
  
  // Dupatta
  { id: 11, name: "Chic Dupatta", category: "dupatta", price: 29.99, imageUrl: "https://placehold.co/650x650?text=Chic+Dupatta" },
  { id: 12, name: "Elegant Silk Dupatta", category: "dupatta", price: 49.99, imageUrl: "https://placehold.co/650x650?text=Elegant+Silk+Dupatta" },
  { id: 13, name: "Traditional Cotton Dupatta", category: "dupatta", price: 19.99, imageUrl: "https://placehold.co/650x650?text=Cotton+Dupatta" },
  { id: 14, name: "Designer Net Dupatta", category: "dupatta", price: 39.99, imageUrl: "https://placehold.co/650x650?text=Net+Dupatta" },
  { id: 15, name: "Fancy Embroidered Dupatta", category: "dupatta", price: 59.99, imageUrl: "https://placehold.co/650x650?text=Embroidered+Dupatta" },
  { id: 16, name: "Georgette Dupatta", category: "dupatta", price: 34.99, imageUrl: "https://placehold.co/650x650?text=Georgette+Dupatta" },
  { id: 17, name: "Chiffon Dupatta", category: "dupatta", price: 24.99, imageUrl: "https://placehold.co/650x650?text=Chiffon+Dupatta" },
  { id: 18, name: "Velvet Dupatta", category: "dupatta", price: 69.99, imageUrl: "https://placehold.co/650x650?text=Velvet+Dupatta" },
  { id: 19, name: "Printed Dupatta", category: "dupatta", price: 14.99, imageUrl: "https://placehold.co/650x650?text=Printed+Dupatta" },
  { id: 20, name: "Silk Blend Dupatta", category: "dupatta", price: 44.99, imageUrl: "https://placehold.co/650x650?text=Silk+Blend+Dupatta" },
  
  // New Arrivals
  { id: 21, name: "Trendy New Arrivals Top", category: "new", price: 49.99, imageUrl: "https://placehold.co/650x650?text=New+Arrivals+Top" },
  { id: 22, name: "Modern New Arrivals Blouse", category: "new", price: 69.99, imageUrl: "https://placehold.co/650x650?text=New+Arrivals+Blouse" },
  { id: 23, name: "Stylish New Arrivals Dress", category: "new", price: 99.99, imageUrl: "https://placehold.co/650x650?text=New+Arrivals+Dress" },
  { id: 24, name: "Casual New Arrivals Shirt", category: "new", price: 39.99, imageUrl: "https://placehold.co/650x650?text=New+Arrivals+Shirt" },
  { id: 25, name: "Elegant New Arrivals Skirt", category: "new", price: 79.99, imageUrl: "https://placehold.co/650x650?text=New+Arrivals+Skirt" },
  { id: 26, name: "Comfortable New Arrivals Pants", category: "new", price: 59.99, imageUrl: "https://placehold.co/650x650?text=New+Arrivals+Pants" },
  { id: 27, name: "Formal New Arrivals Coat", category: "new", price: 119.99, imageUrl: "https://placehold.co/650x650?text=New+Arrivals+Coat" },
  { id: 28, name: "Chic New Arrivals Jacket", category: "new", price: 89.99, imageUrl: "https://placehold.co/650x650?text=New+Arrivals+Jacket" },
  { id: 29, name: "Fashionable New Arrivals Tunic", category: "new", price: 74.99, imageUrl: "https://placehold.co/650x650?text=New+Arrivals+Tunic" },
  { id: 30, name: "New Arrivals Evening Gown", category: "new", price: 149.99, imageUrl: "https://placehold.co/650x650?text=New+Arrivals+Evening+Gown" },
  
  // Casuals
  { id: 31, name: "Casual Summer Dress", category: "casuals", price: 39.99, imageUrl: "https://placehold.co/650x650?text=Casual+Summer+Dress" },
  { id: 32, name: "Relaxed Casual Pants", category: "casuals", price: 35.99, imageUrl: "https://placehold.co/650x650?text=Casual+Pants" },
  { id: 33, name: "Casual T-Shirt", category: "casuals", price: 19.99, imageUrl: "https://placehold.co/650x650?text=Casual+T-Shirt" },
  { id: 34, name: "Casual Hoodie", category: "casuals", price: 49.99, imageUrl: "https://placehold.co/650x650?text=Casual+Hoodie" },
  { id: 35, name: "Casual Skirt", category: "casuals", price: 29.99, imageUrl: "https://placehold.co/650x650?text=Casual+Skirt" },
  { id: 36, name: "Casual Jeans", category: "casuals", price: 59.99, imageUrl: "https://placehold.co/650x650?text=Casual+Jeans" },
  { id: 37, name: "Casual Blazer", category: "casuals", price: 79.99, imageUrl: "https://placehold.co/650x650?text=Casual+Blazer" },
  { id: 38, name: "Casual Cardigan", category: "casuals", price: 39.99, imageUrl: "https://placehold.co/650x650?text=Casual+Cardigan" },
  { id: 39, name: "Casual Shorts", category: "casuals", price: 24.99, imageUrl: "https://placehold.co/650x650?text=Casual+Shorts" },
  { id: 40, name: "Casual Tank Top", category: "casuals", price: 14.99, imageUrl: "https://placehold.co/650x650?text=Casual+Tank+Top" },
  
  // Shop
  { id: 41, name: "Shop Trendy Top", category: "shop", price: 49.99, imageUrl: "https://placehold.co/650x650?text=Shop+Trendy+Top" },
  { id: 42, name: "Shop Modern Blouse", category: "shop", price: 69.99, imageUrl: "https://placehold.co/650x650?text=Shop+Modern+Blouse" },
  { id: 43, name: "Shop Stylish Dress", category: "shop", price: 99.99, imageUrl: "https://placehold.co/650x650?text=Shop+Stylish+Dress" },
  { id: 44, name: "Shop Casual Shirt", category: "shop", price: 39.99, imageUrl: "https://placehold.co/650x650?text=Shop+Casual+Shirt" },
  { id: 45, name: "Shop Elegant Skirt", category: "shop", price: 79.99, imageUrl: "https://placehold.co/650x650?text=Shop+Elegant+Skirt" },
  { id: 46, name: "Shop Comfortable Pants", category: "shop", price: 59.99, imageUrl: "https://placehold.co/650x650?text=Shop+Comfortable+Pants" },
  { id: 47, name: "Shop Formal Coat", category: "shop", price: 119.99, imageUrl: "https://placehold.co/650x650?text=Shop+Formal+Coat" },
  { id: 48, name: "Shop Chic Jacket", category: "shop", price: 89.99, imageUrl: "https://placehold.co/650x650?text=Shop+Chic+Jacket" },
  { id: 49, name: "Shop Fashionable Tunic", category: "shop", price: 74.99, imageUrl: "https://placehold.co/650x650?text=Shop+Fashionable+Tunic" },
  { id: 50, name: "Shop Evening Gown", category: "shop", price: 149.99, imageUrl: "https://placehold.co/650x650?text=Shop+Evening+Gown" },
  
  // Summer Sale
  { id: 51, name: "Summer Sale Dress", category: "Sale", price: 29.99, imageUrl: "https://placehold.co/650x650?text=Summer+Sale+Dress" },
  { id: 52, name: "Summer Sale T-Shirt", category: "Sale", price: 19.99, imageUrl: "https://placehold.co/650x650?text=Summer+Sale+T-Shirt" },
  { id: 53, name: "Summer Sale Shorts", category: "Sale", price: 14.99, imageUrl: "https://placehold.co/650x650?text=Summer+Sale+Shorts" },
  { id: 54, name: "Summer Sale Tank Top", category: "Sale", price: 12.99, imageUrl: "https://placehold.co/650x650?text=Summer+Sale+Tank+Top" },
  { id: 55, name: "Summer Sale Skirt", category: "Sale", price: 24.99, imageUrl: "https://placehold.co/650x650?text=Summer+Sale+Skirt" },
  { id: 56, name: "Summer Sale Sandals", category: "Sale", price: 29.99, imageUrl: "https://placehold.co/650x650?text=Summer+Sale+Sandals" },
  { id: 57, name: "Summer Sale Sunglasses", category: "Sale", price: 9.99, imageUrl: "https://placehold.co/650x650?text=Summer+Sale+Sunglasses" },
  { id: 58, name: "Summer Sale Hat", category: "Sale", price: 14.99, imageUrl: "https://placehold.co/650x650?text=Summer+Sale+Hat" },
  { id: 59, name: "Summer Sale Beach Dress", category: "Sale", price: 34.99, imageUrl: "https://placehold.co/650x650?text=Summer+Sale+Beach+Dress" },
  { id: 60, name: "Summer Sale dress", category: "Sale", price: 19.99, imageUrl: "https://placehold.co/650x650?text=Summer+Sale" }
];


function handleCurrencyChange() {
    var select = document.getElementById("currency");
    var selectedCurrency = select.value;
    alert("Selected currency: " + selectedCurrency);
    // You can add more actions here
}
//scroll effect navbr
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("bar-3");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// selector
// Get the container element
// Get the template element
// Get the template element
const template = document.getElementById('new-arrivals-item-template');
const container = document.querySelector('.new-arrivals-container');
const clonedTemplate = template.content.cloneNode(true);
const item=0;
// Filter items that are on sale or new
const saleOrNewItems = femaleClothes.filter(item => item.category === 'sale' || item.category === 'Sale' || item.category === 'new' || item.category === 'New');

// Filter items that are not on sale or new
const otherItems = femaleClothes.filter(item => !(item.category === 'sale' || item.category === 'Sale' || item.category === 'new' || item.category === 'New'));

// Concatenate the sale or new items with the other items
const sortedItems = saleOrNewItems.concat(otherItems);

// Render the sorted items
sortedItems.forEach(item => {
  const clonedTemplate = template.content.cloneNode(true);

  const img = clonedTemplate.querySelector('.new-arrivals-img');
  img.src = item.imageUrl;
  img.alt = item.name;

  const name = clonedTemplate.querySelector('.laaleh-shop-name');
  name.textContent = item.name;

  const ribbon = clonedTemplate.querySelector('.ribbon');
  const price = clonedTemplate.querySelectorAll('.price');
  price[1].textContent = item.price;

  // Display the ribbon only for items that are on sale or new
  if (item.category === 'sale' || item.category === 'Sale' || item.category === 'new' || item.category === 'New') {
    ribbon.textContent = item.category.toUpperCase();
    ribbon.style.display = 'block';
  } else {
    ribbon.style.display = 'none';
  }

  container.appendChild(clonedTemplate);
});

const ribbon = clonedTemplate.querySelector('.ribbon');
// Display the ribbon only for items that are on sale or new
if (item.category === 'sale' || item.category === 'Sale' || item.category === 'new' || item.category === 'New') {
  ribbon.textContent = item.category.toUpperCase();
  ribbon.style.display = 'block';
} else {
  ribbon.style.display = 'none';
}

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

  container.addEventListener('click', function(event) {
    if (event.target.classList.contains('cart-btn')) {
      alert('Add to Cart clicked');
    } else if (event.target.classList.contains('quick-view')) {
      alert('Quick View clicked');
    } else if (event.target.classList.contains('s-btn')) {
      alert(event.target.textContent + ' button clicked');
    }
  });
//Cart logic
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('cart-btn')) {
      const itemId = event.target.getAttribute('data-id');
      const itemName = event.target.getAttribute('data-name');
      addItemToCart(itemId, itemName);
      alert('Add to Cart clicked');
  }
});

document.addEventListener('click', function(event) {
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
// Navigator button
const shopButton = document.querySelector('.button');

shopButton.addEventListener('click', function() {
    // Navigate to the second page
    window.location.href = '/assets/pages/Collection.html'; // Replace 'second-page.html' with the URL of your second page
});
  // PRice Slider
 // Script.js 
const rangevalue = 
document.querySelector(".slider-container .price-slider"); 
const rangeInputvalue = 
document.querySelectorAll(".range-input input"); 

// Set the price gap 
let priceGap = 500; 

// Adding event listners to price input elements 
const priceInputvalue = 
document.querySelectorAll(".price-input input"); 
for (let i = 0; i < priceInputvalue.length; i++) { 
priceInputvalue[i].addEventListener("input", e => { 

  // Parse min and max values of the range input 
  let minp = parseInt(priceInputvalue[0].value); 
  let maxp = parseInt(priceInputvalue[1].value); 
  let diff = maxp - minp 

  if (minp < 0) { 
    alert("minimum price cannot be less than 0"); 
    priceInputvalue[0].value = 0; 
    minp = 0; 
  } 

  // Validate the input values 
  if (maxp > 10000) { 
    alert("maximum price cannot be greater than 10000"); 
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
    if (e.target.className === "min-input") { 
      rangeInputvalue[0].value = minp; 
      let value1 = rangeInputvalue[0].max; 
      rangevalue.style.left = `${(minp / value1) * 100}%`; 
    } 
    else { 
      rangeInputvalue[1].value = maxp; 
      let value2 = rangeInputvalue[1].max; 
      rangevalue.style.right = 
        `${100 - (maxp / value2) * 100}%`; 
    } 
  } 
}); 

// Add event listeners to range input elements 
for (let i = 0; i < rangeInputvalue.length; i++) { 
  rangeInputvalue[i].addEventListener("input", e => { 
    let minVal = 
      parseInt(rangeInputvalue[0].value); 
    let maxVal = 
      parseInt(rangeInputvalue[1].value); 

    let diff = maxVal - minVal 
    
    // Check if the price gap is exceeded 
    if (diff < priceGap) { 
    
      // Check if the input is the min range input 
      if (e.target.className === "min-range") { 
        rangeInputvalue[0].value = maxVal - priceGap; 
      } 
      else { 
        rangeInputvalue[1].value = minVal + priceGap; 
      } 
    } 
    else { 
    
      // Update price inputs and range progress 
      priceInputvalue[0].value = minVal; 
      priceInputvalue[1].value = maxVal; 
      rangevalue.style.left = 
        `${(minVal / rangeInputvalue[0].max) * 100}%`; 
      rangevalue.style.right = 
        `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`; 
    } 
  }); 
} 
}
