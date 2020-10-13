  if($(window).width() < 576){
    $(".card__button").removeClass("flowing-scroll")
  }else{
    $(".card__button").addClass("flowing-scroll")
    $(".card__button").removeAttr("data-target")
  }


  $(".flowing-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $(".scroll-end").offset().top
    }, 2000);
  });
  
$(".mob-button").click(function() {
  $('html, body').animate({
      scrollTop: $(".main-card__scroll").offset().top
  }, 2000);
});

$(".modal__button").click(function() {
  $('html, body').animate({
      scrollTop: $(".scroll-end").offset().top
  }, 2000);
});




