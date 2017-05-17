$(function(){
 if ($('#instafeed').length > 0) {
  var feed = new Instafeed({
   get: 'user',
   userId: '302944152',
   accessToken: '302944152.1677ed0.bf54c56979934d0f92abc0abb766f8e5',
   resolution: 'standard_resolution',
   template: '<div class="swiper-slide"><a href="{{link}}"><img src="{{image}}" /></a></div>',
   after: function(){
     var mySwiperInsta = new Swiper ('.instagram-feed_swiper-container', {
       autoHeight: true,
       slidesPerView: 'auto',
       centeredSlides: true,
       spaceBetween: 4,
       loop: true
      })
   }
   });
   feed.run();
 }
});
