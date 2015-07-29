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

// $(".low").on("click", function(event){
//   event.preventDefault();


// });



var pricesToSort = [];
var cabinInfo = [];
var prices = $('.home');

function sortPrices(array){
  for (var i = 0; i < array.length; i++) {
    pricesToSort.push(parseInt(array[i].dataset.price));
    cabinInfo += (prices[i]);

  }
return pricesToSort;

}

console.log("prices to sort", sortPrices(prices));
console.log("cabin info", cabinInfo);

console.log("sorted high to low", pricesToSort.sort(function(a, b){return b-a;}));

console.log("sorted low to hight", pricesToSort.sort(function(a, b){return a-b;}));

//can we sort while the target is still in 'home'?  Can we just target that data set and sort it and everything else will stay attached?


//$('article')[0].dataset

//prices[0].dataset.price


});
