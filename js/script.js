$(document).ready(function() {
  //menu
  $('.nav_l ul li').hover(function() {
    $(this).find('.nav_l_each_bg_wrap').stop().fadeIn(300);
  }, function() {
    $(this).find('.nav_l_each_bg_wrap').stop().fadeOut(300);
  });

  //accordion
    $( ".accordion" ).accordion({
    heightStyle: "content",
    collapsible: true, active: false
  });

  var state = true;

  $('.menu_btn, .accordion_bg').stop().click(function(){
    if (state) {
      $('.accordion_wrap').stop().animate({ left : '0' });
      $('.accordion_bg').stop().css({ display : 'block' });
      $('.wrap').stop().css({height : '950px', overflow: 'hidden' })
    }else {
      $('.accordion_wrap').stop().animate({ left : '-300px' });
      $('.accordion_bg').stop().css({ display : 'none' });
      $('.wrap').stop().css({height : 'auto', overflow: 'auto' })
    }

    state = !state;
  })

//animate-backgroundColor
  $('.btn').hover(function() {
    $(this).stop().animate({backgroundColor:'#1cabe2'}, 150)
  },function() {
    $(this).stop().animate({backgroundColor:'#fff'}, 150)
  })

  $('.promise_btn').hover(function() {
    $(this).stop().animate({backgroundColor:'#1cabe2'}, 150)
  },function() {
    $(this).stop().animate({backgroundColor:'#fff'}, 150)
  })

  $('.story_text_box').hover(function() {
    $(this).stop().animate({backgroundColor:'#ededed)'}, 150)
  },function() {
    $(this).stop().animate({backgroundColor:'#fff'}, 150)
  })

//animate-backgroundSize
  $('.send_pics_wrap').hover(function() {
    $(this).stop().animate({backgroundSize:'110%'}, 200)
  }, function() {
    $(this).stop().animate({backgroundSize:'100%'}, 200)
  })


  //슬라이드
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    margin: 30,
    loop: true,
    dots: false,
    nav:true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive: {
      0: {items: 1.5, center: true},
      481: {items: 2, center: true},
      601: {items: 2.5, center: true},
      801: {items: 3, center: true},
      1025: {items: 4},
      1281: {items: 4.5},
      1441: {items: 5}
    }
  })











});