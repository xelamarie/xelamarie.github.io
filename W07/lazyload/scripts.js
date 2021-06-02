// Get data-src images
const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
   image.setAttribute('src', image.getAttribute('data-src'));
   image.onload = () => {
      image.removeAttribute('data-src');
   };
};

// Set optional parameters
const imgOptions = {
   threshold: 1,
   rootMargin: '0px 0px 150px 0px'
};


// Check if Intersection Observer is supported 
if ('IntersectionObserver' in window) {
   const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
         if (item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
         }
      });
   }, imgOptions);

   // Loop through images and load
   imagesToLoad.forEach((img) => {
      observer.observe(img);
   });

   // Just load all images if not supported
} else {
   imagesToLoad.forEach((img) => {
      loadImages(img);
   });
}