
// animacao em hover
$(function() {
    $('.cardDev').hover(function() {
      $('.circulos').css('color', '#2E4E5C');
      $('.cardDev p').css('font-size', '2em');
      $('.olhos i').css('transform', 'translate(-5px, 2px)');
      if(innerWidth >1900){
        $('.tela').css('transform', 'translate(-50%, -50%) scale(1.2)');
      }else{
      $('.tela').css('transform', 'translate(-50%, -50%) scale(1.07)');
      }
    
    }, function() {
      // on mouseout, reset the background colour
      $('.circulos').css('color', '');
      $('.tela').css('transform', '');
      $('.cardDev p').css('font-size', '');
      $('.olhos i').css('transform', '');
    });

    $('.cardCamera').hover(function() {
      $('.botaoCameraCirculo').css('color', '#2E4E5C');
      $('.cardCamera p').css('font-size', '2em');
      $('.olhos i').css('transform', 'translate(4px, 2px)');
      if(innerWidth >1900){
        $('.corpoCamera').css('transform', 'translate(-50%, -50%) scale(1.2)');
      }else{
      $('.corpoCamera').css('transform', 'translate(-50%, -50%) scale(1.07)');
      }
    
    }, function() {
      // on mouseout, reset the background colour
      $('.botaoCameraCirculo').css('color', '');
      $('.corpoCamera').css('transform', '');
      $('.cardCamera p').css('font-size', '');
      $('.olhos i').css('transform', '');
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


  var gridImagens = document.querySelector(".gridImagens");
  var divPai;
  var imagem;
  var divLegenda;
  var numeroLegenda;

  let quantidadeDeImagens = 15;
  
  for(var i = 1; i <= quantidadeDeImagens; i++){
    divPai = document.createElement("div");
    divPai.classList.add("conteudoDeCadaGrid");
    divPai.classList.add("scrolleffect");

    imagem= document.createElement("img");
    imagem.src = `img/fotos/${i}.jpg`;
    imagem.classList.add("imagemGrid");

    divLegenda = document.createElement("div");
    divLegenda.classList.add("legenda");

    numeroLegenda = document.createElement("p");
    numeroLegenda.classList.add("imagemNumero");
    numeroLegenda.innerHTML = i.toString().length == 1 ? `0${i}` : `${i}`;
    

    divPai.appendChild(imagem);
    divPai.appendChild(divLegenda);
    divLegenda.appendChild(numeroLegenda);
    gridImagens.appendChild(divPai);
  }
