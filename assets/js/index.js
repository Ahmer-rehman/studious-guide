import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: '9ap2mdnz',
  dataset: 'production',
  token: 'skxupqUwYUdR0RPMB0dJJv5TxR5fHAI1M4WvdhLPux9Y2UPxUScxqFzJVTqtm8dCl5VlDF2W9ZjhhCXupbl509FxWM82KkcgxbzrYq6u7yP2mNv5T8KqVqT8kZcrENJ5iX2ewDJw85OcUyizTuK0OeqSiQtExI2q1qV8sb91goyP3JVoMGyh', // Optional if you don't have authentication enabled
  useCdn: true, // Set to true for read-only access and faster response times
  
});
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
    return images;
  } catch (error) {
    console.error('Error fetching images:', error);
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
      slide.innerHTML = `<img src="${image.imageUrl}" alt="${image.image.altText || `Slide ${index + 1}`}">`;
      slideshow.appendChild(slide);
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showNextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }

    setInterval(showNextSlide, 3000);
  }
}

initSlideshow();
