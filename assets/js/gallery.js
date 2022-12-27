function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll(".slide1");

    slides[activeSlide].classList.add("active");

    for (const slide of slides) {
        slide.addEventListener("click", () => {
            clearActiveClasses();
            slide.classList.add("active");
        });
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
    }
}

slidesPlugin(2);

$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(document).ready(function(){
    $('.ct-slick-homepage').slick({
      autoplay: true,
      
      dots: true,
infinite: true,
speed: 300,
slidesToShow: 2,
slidesToScroll: 1,
    });
  });