$(function(){
    // preloader
    $(window).on('load', function(){
      $('.preloader').delay(1500).fadeOut(500);
    });
    // back-to-top
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0},1000);
    });

    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      console.log(scrolling);
      if(scrolling > 300){
        $('.back-to-top').fadeIn(500);
      }
      else {
        $('.back-to-top').fadeOut(500);
      }
    });
    // video
    $('.venobox').venobox();

    // counter js
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      if(scrolling > 300){
        $('.navbar').addClass('navbg');
      }
      else {
        $('.navbar').removeClass('navbg');
      }
    });

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 95
                }, 1500);
                return false;
            }
        }
    });
    // blog slider
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        autoplaySpeed: 2000,
        centerMode:true,
        centerPadding:false,
        responsive: [
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
          ]
    });

    var containerEl = document.querySelector('.project-main');

    var mixer = mixitup(containerEl,
      {
        "animation": {
            "duration": 500,
            "nudge": true,
            "reverseOut": false,
            "effects": "fade scale(0.01) translateX(-3%) translateY(1%)"
        }
    }
    );

    jQuery(function(){
      jQuery(".player").YTPlayer();
    });
    $(".typed").typed({
      strings: ["Developers", "Designers.", "Projects.", "Template."],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 30,
      // time before typing starts
      startDelay: 1200,
      // backspacing speed
      backSpeed: 20,
      // time before backspacing
      backDelay: 500,
      // loop
      loop: true,
      // false = infinite
      loopCount: 5,
      // show cursor
      showCursor: false,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
      callback: function() {},
      // starting callback function before each string
      preStringTyped: function() {},
      //callback for every typed string
      onStringTyped: function() {},
      // callback for reset
      resetCallback: function() {}
    });
    
});