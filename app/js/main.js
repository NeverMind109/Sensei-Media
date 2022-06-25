$(function () {
  $("#portfolioCarousel").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:
      '<button class="portfolio__carousel-btn portfolio__carousel-prev" type="button"><img src="images/prev-arrow.svg" alt="Previous Slide" width="20" height="35"></button>',
    nextArrow:
      '<button class="portfolio__carousel-btn portfolio__carousel-next" type="button"><img src="images/next-arrow.svg" alt="Previous Slide" width="20" height="35"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
