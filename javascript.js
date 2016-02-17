$(document).ready(function() {
  console.log("ready");
$('h1.title').hide();
$('#img2').hide();
$('#img3').hide();
$('#img4').hide();
$('#img5').hide();
$('#img6').hide();
$('#validator').hide();
    
  $('#img1').hover(function(){
    $('#img1').attr('src', 'images/backpack-open.png');
    $('#img1').css('opacity', 1)
  }, function() {
    $('#img1').attr('src', 'images/backpack.png');
    $('#img1').css('opacity', .5)
  });
    
  $('#img1').click(function(){
    $('#img1').fadeOut(); 
  });
      
  $('#img1').click(function(){
    $('h1.title').fadeIn();
    $('#img2').fadeIn(); 
    $('#img3').fadeIn(); 
    $('#img4').fadeIn(); 
    $('#img5').fadeIn(); 
    $('#img6').fadeIn(); 
    $('#validator').fadeIn();
  });

//IPHONE------------------------------------------------
  $('#img2').hover(function(){
    $('#img2').attr('src', 'images/iphone.gif');
    $('#img2').css('opacity', 1)
  }, function() {
    $('#img2').attr('src', 'images/iphone.png');
    $('#img2').css('opacity', .5)
  });
    
  $('section p.iphone').hide();
    $('#img2').click(function(){
    $('section p.iphone').slideToggle();
  });

  $('#img2').click(function(){
     $('section p.pencil').slideUp();
     $('section p.gameboy').slideUp();
     $('section p.book').slideUp();
     $('section p.scissors').slideUp();
  });
    
//PENCIL------------------------------------------------
  $('#img3').hover(function(){
    $('#img3').attr('src', 'images/pencil.gif');
    $('#img3').css('opacity', 1)
  }, function() {
    $('#img3').attr('src', 'images/pencil.png');
    $('#img3').css('opacity', .5)
  });

  $('section p.pencil').hide();
    $('#img3').click(function(){
    $('section p.pencil').slideToggle();
  });
    
  $('#img3').click(function(){
     $('section p.iphone').slideUp();
     $('section p.gameboy').slideUp();
     $('section p.book').slideUp();
     $('section p.scissors').slideUp();
  });
    
//GAMEBOY------------------------------------------------
  $('#img4').hover(function(){
    $('#img4').attr('src', 'images/gameboy.gif');
    $('#img4').css('opacity', 1)
  }, function() {
    $('#img4').attr('src', 'images/gameboy.png');
    $('#img4').css('opacity', .5)
  });
 
  $('section p.gameboy').hide();
    $('#img4').click(function(){
    $('section p.gameboy').slideToggle();
  });

  $('#img4').click(function(){
     $('section p.pencil').slideUp();
     $('section p.iphone').slideUp();
     $('section p.book').slideUp();
     $('section p.scissors').slideUp();
  });
    
//BOOK------------------------------------------------
  $('#img5').hover(function(){
    $('#img5').attr('src', 'images/book.gif');
    $('#img5').css('opacity', 1)
  }, function() {
    $('#img5').attr('src', 'images/book.png');
    $('#img5').css('opacity', .5)
  });

  $('section p.book').hide();
    $('#img5').click(function(){
    $('section p.book').slideToggle();
  });

  $('#img5').click(function(){
     $('section p.pencil').slideUp();
     $('section p.gameboy').slideUp();
     $('section p.iphone').slideUp();
     $('section p.scissors').slideUp();
  });
    
//SCISSORS------------------------------------------------
  $('#img6').hover(function(){
    $('#img6').attr('src', 'images/scissors.gif');
    $('#img6').css('opacity', 1)
  }, function() {
    $('#img6').attr('src', 'images/scissors.png');
    $('#img6').css('opacity', .5)
  });

  $('section p.scissors').hide();
    $('#img6').click(function(){
    $('section p.scissors').slideToggle();
  });
 
  $('#img6').click(function(){
     $('section p.pencil').slideUp();
     $('section p.gameboy').slideUp();
     $('section p.book').slideUp();
     $('section p.iphone').slideUp();
  });
      
});