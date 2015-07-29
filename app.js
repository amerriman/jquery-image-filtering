$(document).ready(function(){
  // console.log("The document is ready!");

$('.image-container').append('<article class="home" data-price="300000"><img src="img/christmas-gingerbread-cabin.jpg"/><h4>$300,000</h4></article>');
$('.image-container').append('<article class="home" data-price="600"><img src="img/australian-cabin.jpg"/><h4>$600</h4></article>');
$('.image-container').append('<article class="home" data-price="1000000"><img src="img/airplane-cabin.jpg"/><h4>$1,000,000</h4></article>');

$(".dark").on("click", function(){
  $("body").css('background-image', 'url(img/dark_wood.png)');
});

$(".light").on("click", function(){
  $("body").css('background-image', 'url(img/tileable_wood_texture.png)');
});

$('.textures').css("width", "150px").append('<span class="forest"></span>');

$(".forest").on("click", function(){
  $("body").css({
    'background-image': 'url(img/forest.jpg)',
    'background-size': 'cover'
     });
});

$(".low").on("click", function(event){
  event.preventDefault();


});

});


 var numbers = [];
  numbers.sort(function(a, b){
  return a - b;
  };
$('article')[0].dataset

prices[0].dataset.price

