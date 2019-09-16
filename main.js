$(function() {
    $('.cardDev').hover(function() {
      $('.circulos').css('color', 'tomato');
      $('.tela').css('transform', 'translate(-50%, -50%) scale(1.07)');
    
    }, function() {
      // on mouseout, reset the background colour
      $('.circulos').css('color', '');
      $('.tela').css('transform', '');

    });
});


function abrirFrontend(){

  $("#fotografia").hide();
  $("#frontEnd").fadeIn();
  $("#frontEnd").css("display", "flex");
  $('html,body').animate({
    scrollTop: $("#frontEnd").offset().top},
    'slow');
}

function abrirFotografia(){

  $("#frontEnd").hide();
  $("#fotografia").fadeIn();
  $("#fotografia").css("display", "flex");
  $('html,body').animate({
    scrollTop: $("#fotografia").offset().top},
    'slow');
  
}