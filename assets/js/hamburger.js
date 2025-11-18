// Accordion functionality
    document.addEventListener('DOMContentLoaded', function() {
      const accordionHeaders = document.querySelectorAll('.accordion-header');
      const menuToggle = document.getElementById('menu-toggle');
      const menuLinks = document.querySelectorAll('.accordion-content a, .menu-link');

      accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
          const content = this.nextElementSibling;
          const isActive = this.classList.contains('active');

          // Close all accordions
          accordionHeaders.forEach(h => {
            h.classList.remove('active');
            h.nextElementSibling.classList.remove('active');
          });

          // Toggle current accordion
          if (!isActive) {
            this.classList.add('active');
            content.classList.add('active');
          }
        });
      });

      // Close menu when clicking on any link
      menuLinks.forEach(link => {
        link.addEventListener('click', function() {
          menuToggle.checked = false;
        });
      });
    });