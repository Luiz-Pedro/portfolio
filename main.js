$(function() {
    $('.cardDev').hover(function() {
      $('.circulos').css('color', 'tomato');
      $('.tela').css('transform', 'translate(-50%, -50%) scale(1.07)');
    
    }, function() {
      // on mouseout, reset the background colour
      $('.circulos').css('color', '');
      $('.tela').css('transform', '');

    });

    $('.cardCamera').hover(function() {
      $('.botaoCameraCirculo').css('color', 'tomato');
      if(innerWidth >1900){
        $('.corpoCamera').css('transform', 'translate(-50%, -50%) scale(1.2)');
      }else{
      $('.corpoCamera').css('transform', 'translate(-50%, -50%) scale(1.07)');
      }
    
    }, function() {
      // on mouseout, reset the background colour
      $('.botaoCameraCirculo').css('color', '');
      $('.corpoCamera').css('transform', '');

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
  
    (function($) {

      /**
       * Copyright 2012, Digital Fusion
       * Licensed under the MIT license.
       * http://teamdf.com/jquery-plugins/license/
       *
       * @author Sam Sehnert
       * @desc A small plugin that checks whether elements are within
       *     the user visible viewport of a web browser.
       *     only accounts for vertical position, not horizontal.
       */
    
      $.fn.visible = function(partial) {
        
          var $t            = $(this),
              $w            = $(window),
              viewTop       = $w.scrollTop(),
              viewBottom    = viewTop + $w.height(),
              _top          = $t.offset().top,
              _bottom       = _top + $t.height(),
              compareTop    = partial === true ? _bottom : _top,
              compareBottom = partial === true ? _top : _bottom;
        
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    
      };
        
    })(jQuery);
    
    var win = $(window);
    
    var allMods = $(".scrolleffect");
    
    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("already-visible"); 
      } 
    });
    
    win.scroll(function(event) {
      
      allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.addClass("come-in"); 
        } 
      });
      
    });
}

