function setUsercity(city) {
  $('.usercity').text(city);
  localforage.setItem('usercity', city).then(function (value) {
  }).catch(function(err) {
    console.log(err);
  });
  $('[data-usercity]').hide();
  $('[data-usercity="'+city+'"]').show();
  $('.address-cell').removeClass('is-open');
}


$(document).ready(function() {


  $('.address-cell').collapse({
    toggle: '.address-toggle',
    target: '.address-dropdown',
    startActive: 'is-current'
  });


  localforage.getItem('usercity', function(err, value) {
    if (value) {
      setUsercity(value);
    } else {
      $.ajax({
      url: 'http://kladr.insales.ru/current_location.json',
      type: 'get',
      dataType: 'jsonp',
      success: function(data){
        if (data.region == 'Москва') {
          setUsercity('Москва');
        } else if (data.region == 'Санкт-Петербург') {
          setUsercity('Санкт-Петербург');
        } else {
            setUsercity('Регионы');
        }
      }
      });
    }
  });

 $('.address-dropdown li').on('click', function(e){
 e.preventDefault();
  var usercity = $(this).data('city');
  setUsercity(usercity);
 });
});
