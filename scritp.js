$(document).ready(function(){
    $('#navigation a').on('click', function(e) {
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000);
    });
  
    $('.toggler, .nav-content a:not(#dropdown-link)').on('click', function(){
      $('.toggler').toggleClass('change');
      $('.nav-content').slideToggle();
      $('#dropdown-menu').slideUp();
      $('.menu-overlay').toggle();
    });
  
    $('.nav-content .dropdown').on('click', function(){
      $('#dropdown-menu').slideToggle();
    });
  
    $('.menu-overlay').on('click', function(){
      $('.toggler').removeClass('change');
      $('.nav-content').slideUp();
      $('#dropdown-menu').slideUp();
      $('.menu-overlay').hide();
    });
  
    $("#contact input, #contact textarea").on('focusout', function(){
      var text_val = $(this).val();
      if (text_val === "") {
        $(this).removeClass('has-value');
      } else {
        $(this).addClass('has-value');
      }
    });
  
    // Animate elements when they come into view
    $(window).on('scroll', function() {
      $('.service-item, .portfolio-item').each(function() {
        if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
          $(this).addClass('animated fadeInUp');
        }
      });
      
      $('#services h2, #portfolio h2').each(function() {
        if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
          $(this).addClass('animated fadeIn');
        }
      });
    });
  });
  

  const audio = document.getElementById("background-music");
  const playPauseButton = document.getElementById("play-pause-button");
  const playIcon = document.getElementById("play-music");
  const pauseIcon = document.getElementById("pause-music");
  
  let isPlaying = false;
  
  function togglePlayPause() {
      if (isPlaying) {
          audio.pause();
          playIcon.classList.remove("hidden");
          pauseIcon.classList.add("hidden");
      } else {
          audio.play();
          playIcon.classList.add("hidden");
          pauseIcon.classList.remove("hidden");
      }
      isPlaying = !isPlaying;
  }
  
  playPauseButton.addEventListener("click", togglePlayPause);
  
  audio.addEventListener("ended", function () {
      audio.currentTime = 0;
      audio.play();
  });
  
  var swiper = new Swiper(".swiper", {
      grabCursor: true,
      initialSlide: 4,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 10,
      speed: 1000,
      freeMode: false,
      mousewheel: {
          thresholdDelta: 30,
      },
      pagination: {
          el: ".swiper-pagination",
      },
      on: {
          click(event) {
              swiper.slideTo(this.clickedIndex);
          },
      },
  });
  
  particlesJS("particles-js", {
      particles: {
          number: {
              value: 180,
              density: {
                  enable: true,
                  value_area: 800,
              },
          },
          color: {
              value: "#fff",
          },
          shape: {
              type: "circle",
          },
          opacity: {
              value: 0.3,
              random: false,
              anim: {
                  enable: false,
                  speed: 4,
                  opacity_min: 0.1,
                  sync: false,
              },
          },
          size: {
              value: 4,
              random: true,
              anim: {
                  enable: true,
                  speed: 2,
                  size_min: 0.1,
                  sync: false,
              },
          },
          line_linked: {
              enable: false,
          },
          move: {
              enable: true,
              speed: 0.4,
              direction: "right",
              random: true,
              straight: false,
              out_mode: "none",
              bounce: false,
              attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
              },
          },
      },
      retina_detect: true,
  });
  
  