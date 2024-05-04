// script.js

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Get the "top" element
    const topElement = document.getElementById('top');
  
    // Get the "topBtn" element
    const topBtn = document.getElementById('topBtn');
  
    // Add a scroll event listener
    window.addEventListener('scroll', function () {
      // Check if the user has scrolled down (you can adjust the value as needed)
      if (window.scrollY > 200) {
        // Add the "scrolled" class to the body
        document.body.classList.add('scrolled');
      } else {
        // Remove the "scrolled" class from the body
        document.body.classList.remove('scrolled');
      }
    });
  
    // Add a click event listener to the "topBtn" element
    topBtn.addEventListener('click', function () {
      // Scroll to the "top" element
      topElement.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('.fade-in');
  
    function checkScroll() {
      elements.forEach(function (element) {
        var positionFromTop = element.getBoundingClientRect().top;
  
        if (positionFromTop - window.innerHeight <= 0) {
          element.classList.add('is-visible');
        }
      });
    }
  
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // ページ読み込み時にも実行
  });
