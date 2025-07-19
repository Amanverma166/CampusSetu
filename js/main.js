(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);

<script>
  function downloadBrochure() {
    // PDF file must be in same folder as this HTML
    window.location.href = 'pdfs/Campussetu_Fees_Structure.pdf'

  };
</script>

document.getElementById("popupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("popupForm").classList.add("d-none");
  document.getElementById("thankYouMessage").classList.remove("d-none");
});

 

document.addEventListener('DOMContentLoaded', function () {
  const myModal = new bootstrap.Modal(document.getElementById('welcomePopup'));
  myModal.show();
});

window.addEventListener('load', function () {
  const popup = new bootstrap.Modal(document.getElementById('enquiryModal'));
  popup.show();
});

document.getElementById('enquiryForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const course = document.getElementById('course').value;
  const message = document.getElementById('message').value.trim();

  alert(`Thank you ${name}! We'll contact you soon.`);

  const modalEl = document.getElementById('enquiryModal');
  const modal = bootstrap.Modal.getInstance(modalEl);
  modal.hide();

  this.reset();
});
