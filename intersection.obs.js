// Intersection Observer configuration
const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.4, // Trigger the animation when 20% of the element is visible
  };
  
  // Callback function to handle intersection changes
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation class when element is in the viewport
        entry.target.classList.add('animate-slide-in');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  };
  
  // Create the Intersection Observer instance
  const observer = new IntersectionObserver(handleIntersection, observerOptions);
  
  // Get the target element
  const endSection = document.getElementById('endSection');
  
  // Start observing the target element
  observer.observe(endSection);
  