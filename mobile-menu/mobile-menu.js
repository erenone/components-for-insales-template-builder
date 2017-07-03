$(function(){

$('.js-mobile-menu-toggle').on('click', function(e){
  e.preventDefault();
  $('body').toggleClass('mobile-menu-opened');
});

$('.main-menu-marker').on('click', function(e){
  e.preventDefault();
  $(this).parents('li:first').toggleClass('opened');
});

});
