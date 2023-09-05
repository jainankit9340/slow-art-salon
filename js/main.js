jQuery("#carousel-a").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    loop: true,
    items:1
});
$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 2,
        margin: 10,
        loop: true
    });
});
jQuery("#carousel-b").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    navText: ["<button class='chev-left me-2'><i class='fa fa-chevron-left'></button>","<button class='chev-right'><i class='fa fa-chevron-right'></button>"],
    loop: true,
    responsive: {
        0: {
        items: 1
        },

        600: {
        items: 3
        },

        1024: {
        items: 4
        },

        1366: {
        items: 4
        }
    }
});

const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    width: "90vw",
    height: "90vh"
  });