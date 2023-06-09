$(function(){

  $('.team__inner').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    
    prevArrow: '<svg class="slick-left" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27" cy="27" r="26.5" stroke="#ED5730"/><path d="M34.7962 39.6919C35.346 39.2804 35.3468 38.6127 34.7982 38.2003L20.2225 27.2458C19.6742 26.8345 19.6743 26.1655 20.2236 25.7534L34.7982 14.7997C35.3469 14.3874 35.346 13.7197 34.7962 13.3081C34.2464 12.8967 33.356 12.8974 32.8075 13.3097L18.2338 24.2626C17.4112 24.8797 17 25.6899 17 26.5003C17 27.3102 17.4111 28.1203 18.2328 28.7365L32.8075 39.6903C33.356 40.1026 34.2464 40.1033 34.7962 39.6919Z" fill="#ED5730"/></svg>',

    nextArrow: '<svg class="slick-right" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27" cy="27" r="27" stroke="#ED5730"/><path d="M19.4129 13.3081C18.8632 13.7196 18.8623 14.3873 19.4109 14.7997L33.9866 25.7542C34.5349 26.1655 34.5348 26.8345 33.9855 27.2466L19.4109 38.2003C18.8622 38.6126 18.8632 39.2803 19.4129 39.6919C19.9627 40.1033 20.8531 40.1026 21.4016 39.6903L35.9753 28.7374C36.7979 28.1203 37.2091 27.3101 37.2091 26.4997C37.2091 25.6898 36.798 24.8797 35.9763 24.2635L21.4016 13.3097C20.8531 12.8974 19.9627 12.8967 19.4129 13.3081Z" fill="#ED5730"></svg>',
    
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  $('.reviews__slider').slick({
    slidesToShow: 2,
    arrows: true,
    autoplaySpeed: 3000,
    dots: true,
    centerMode: true,

    prevArrow: '<svg class="slick-left" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27" cy="27" r="26.5" stroke="#15136B"/><path d="M34.7962 39.6919C35.346 39.2804 35.3468 38.6127 34.7982 38.2003L20.2225 27.2458C19.6742 26.8345 19.6743 26.1655 20.2236 25.7534L34.7982 14.7997C35.3469 14.3874 35.346 13.7197 34.7962 13.3081C34.2464 12.8967 33.356 12.8974 32.8075 13.3097L18.2338 24.2626C17.4112 24.8797 17 25.6899 17 26.5003C17 27.3102 17.4111 28.1203 18.2328 28.7365L32.8075 39.6903C33.356 40.1026 34.2464 40.1033 34.7962 39.6919Z" fill="#15136B"/></svg>',

    nextArrow: '<svg class="slick-right" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27" cy="27" r="27" stroke="#15136B"/><path d="M19.4129 13.3081C18.8632 13.7196 18.8623 14.3873 19.4109 14.7997L33.9866 25.7542C34.5349 26.1655 34.5348 26.8345 33.9855 27.2466L19.4109 38.2003C18.8622 38.6126 18.8632 39.2803 19.4129 39.6919C19.9627 40.1033 20.8531 40.1026 21.4016 39.6903L35.9753 28.7374C36.7979 28.1203 37.2091 27.3101 37.2091 26.4997C37.2091 25.6898 36.798 24.8797 35.9763 24.2635L21.4016 13.3097C20.8531 12.8974 19.9627 12.8967 19.4129 13.3081Z" fill="#15136B"></svg>',

    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          centerMode: false,
          arrows: false,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: false,
          arrows: false,
        }
      }
    ]
  });

  $('.menu__btn').on('click', function () {
    $('.menu__btn-line').toggleClass('menu__btn-line--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__list-link').on('click', function () {
    $('.menu__btn').removeClass('menu__btn--active');
    $('.menu__list').removeClass('menu__list--active');
  })

  $(".menu a, .logo, .footer__menu a").on("click", function (e) {
    e.preventDefault();
		var id  = $(this).attr('href'),
    top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

});