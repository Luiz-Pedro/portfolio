
// animacao em hover
$(function() {
    $('.tela').hover(function() {
      $('.circulos').css('color', '#2E4E5C');
      $('.cardDev p').css('font-size', '1.7em');
      $('.cardDev p').css('transform', 'translate(0px, 1em)');
      $('.olhos i').css('transform', 'translate(-5px, 2px)');
      if(innerWidth > 1900){
        $('.tela').css('transform', 'translate(-50%, -50%) scale(1.25)');
      }else{
      $('.tela').css('transform', 'translate(-50%, -50%) scale(1.2)');
      }
    
    }, function() {
      // on mouseout, reset the background colour
      $('.circulos').css('color', '');
      $('.tela').css('transform', '');
      $('.cardDev p').css('font-size', '');
      $('.cardDev p').css('transform', '');
      $('.olhos i').css('transform', '');
    });

    $('.corpoCamera').hover(function() {
      $('.botaoCameraCirculo').css('color', '#2E4E5C');
      $('.cardCamera p').css('font-size', '1.7em');
      $('.cardCamera p').css('transform', 'translate(0px, 1em)');
      $('.olhos i').css('transform', 'translate(4px, 2px)');
      if(innerWidth >1900){
        $('.corpoCamera').css('transform', 'translate(-50%, -50%) scale(1.25)');
      }else{
      $('.corpoCamera').css('transform', 'translate(-50%, -50%) scale(1.2)');
      }
    
    }, function() {
      // on mouseout, reset the background colour
      $('.botaoCameraCirculo').css('color', '');
      $('.corpoCamera').css('transform', '');
      $('.cardCamera p').css('font-size', '');
      $('.cardCamera p').css('transform', '');
      $('.olhos i').css('transform', '');
    });

    
});

function scrollEffect(nomeClasseScroll){
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
  
  var allMods = $(`.${nomeClasseScroll}`);
  
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


function abrirFrontend(){

  $("#fotografia").hide();
  var divProjetos = document.querySelectorAll(".gridProjetosPessoais div");
  divProjetos.forEach(element => {
    element.classList.remove("come-in");
  });
  $("#frontEnd").fadeIn();
  $("#frontEnd").css("display", "flex");
  $('html,body').animate({
    scrollTop: $("#frontEnd").offset().top},
    'slow');
    var nomeClasseScroll = "scrolleffectProjetos";
    scrollEffect(nomeClasseScroll);

}

function abrirFotografia(){

  $("#frontEnd").hide();
  var divImagens = document.querySelectorAll(".gridImagens div");
  divImagens.forEach(element => {
    element.classList.remove("come-in");
  });
  $("#fotografia").fadeIn();
  $("#fotografia").css("display", "flex");
  $('html,body').animate({
    scrollTop: $("#fotografia").offset().top},
    'slow');
    var nomeClasseScroll = "scrolleffectImagens";
    scrollEffect(nomeClasseScroll);
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
    divPai.classList.add("scrolleffectImagens");

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

function mudarColuna(quantasColunas){

  let gridDeImagens = document.querySelector(".gridImagens");
  let propriaImagem = document.querySelectorAll(".imagemGrid");
  if(quantasColunas == "1coluna"){
    gridDeImagens.style.gridTemplateColumns = "repeat(1, 1fr)";
    propriaImagem.forEach(img => {
      img.style.height = "360px";
    });
  }
  else if(quantasColunas == "2colunas"){
    gridDeImagens.style.gridTemplateColumns = "repeat(2, 1fr)";
    propriaImagem.forEach(img => {
      img.style.height = "250px";
    });
    
  }
}