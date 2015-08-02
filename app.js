$(document).ready(function(){
  // console.log("The document is ready!");

  //append three more cabins - following the structure in original HTML
  $('.image-container').append('<article class="home" data-price="300000"><img src="img/christmas-gingerbread-cabin.jpg"/><h4>$300,000</h4></article>');
  $('.image-container').append('<article class="home" data-price="600"><img src="img/australian-cabin.jpg"/><h4>$600</h4></article>');
  $('.image-container').append('<article class="home" data-price="1000000"><img src="img/airplane-cabin.jpg"/><h4>$1,000,000</h4></article>');

  //make the background change by appending different images on click of the background buttons
  $(".dark").on("click", function(){
    $("body").css('background-image', 'url(img/dark_wood.png)');
  });

  $(".light").on("click", function(){
    $("body").css('background-image', 'url(img/tileable_wood_texture.png)');
  });
  //append a new background button for forest image
  $('.textures').css("width", "150px").append('<span class="forest"></span>');
  //make the forest butten clickable as above
  $(".forest").on("click", function(){
    $("body").css({
      'background-image': 'url(img/forest.jpg)',
      'background-size': 'cover'
       });
  });

  //sort prices low to high
  $(".low").on("click", function(event){
    event.preventDefault();
    // $('.image-container').html(null);
    var cabins = $('.home');

    var lowToHigh =cabins.sort(function(a,b){
      var an = parseInt(a.dataset.price);
      var bn = parseInt(b.dataset.price);
        if (an > bn){
      return 1;}
      if ( bn > an){
      return -1;}
      }).appendTo('.image-container');

    });

  //Sara's code below
  //Low to High Sort
  // var homeArray = $('.home');
  // var lowBtn = $('.low');
  // var homePlacement = $('.image-container');
  // var lowHigh = homeArray.sort(lowToHigh);

  // function lowToHigh(a, b) {
  //  var aHome = parseInt(a.dataset.price);
  //  var bHome = parseInt(b.dataset.price);

  //    if (aHome > bHome) {
  //      return 1;
  //    }
  //    else if (bHome > aHome) {
  //        return -1;
  //    }
  //    else {
  //        return 0;
  //    }
  // }

  // lowBtn.on("click", function(event){
  //  event.preventDefault();
  //  homePlacement.html(lowHigh);
  // });

  //sort prices high to low
  $(".high").on("click", function(event){
    event.preventDefault();
    // $('.image-container').html(null);
     var cabins = $('.home');

    var lowToHigh =cabins.sort(function(a,b){
      var an = parseInt(a.dataset.price);
      var bn = parseInt(b.dataset.price);
        if (bn > an){
      return 1;}
      if ( an > bn){
      return -1;}
      }).appendTo('.image-container');

    });

  //if data set is between these two numbers, show, otherwise, hide












//our first attempt at sort, keep for future reference
// function sortPrices(array){
//   for (var i = 0; i < array.length; i++) {
//     pricesToSort.push(parseInt(array[i].dataset.price));
//     cabinInfo += (prices[i]);
//   }
// return pricesToSort;
// }

// console.log("sorted high to low", pricesToSort.sort(function(a, b){return b-a;}));

// console.log("sorted low to hight", pricesToSort.sort(function(a, b){return a-b;}));

//next 3 lines are easier code to do the sort function
// $(".image-container article").sort(sort_article_high).appendTo('.image-container');

// function sort_article(a, b){
//    return ($(b).data('price')) < ($(a).data('price')) ? 1 : -1;}

   var x = [];
   function lowest(a){
    for (var i = 0; i < cabins.length; i++) {
     if (($(a).data('price')) < ('50000') ? 1 : -1){
      console.log(a.data('price'));
      //x.push.(a.data('price')[i]);
     }
    }
    //return x;
   }

//when we first targeted the data - keep for future reference
//$('article')[0].dataset


//prices[0].dataset.price


});
