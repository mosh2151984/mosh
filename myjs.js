

$(document).ready(function(){

 function responsevimag(){

   $('#QuotesSection').each(function(){
     var hightofsec=$('#QuotesSection').height();
     var hightofimg=$('#QuotesSection ul li img').height();
    var widthslider=$('#slider').width();
     $('#QuotesSection ul li img').width(widthslider);
     $('#QuotesSection ul li img').height(hightofsec);

     if(hightofimg != hightofsec ){
      $('#QuotesSection ul li img').height(hightofsec);
      $('#slider').height(hightofsec);
     }


   });
}
  responsevimag();

  ///slider

  var $slider=$('#slider') ;
  var $slidercontainer=$slider.find('.slides') ;
  var $slide=$slidercontainer.find('.slide');
  var curentslide=1;
  var interval;

  function startslider(){
 interval= setInterval(function(){
      window.onresize =responsevimag();
    var widthslider=$('#slider').width();

    $slidercontainer.animate({'margin-left':'-='+widthslider},2500,function(){
      curentslide++;
      if(curentslide===$slide.length){
        curentslide=1;
        $slidercontainer.css('margin-left',0);
      }
    });
  },3000);
  }
  function pauseslider(){
    clearInterval(interval);
  }
 $slider.on('mouseenter',pauseslider).on('mouseleave',startslider);

  startslider();

 window.onresize =responsevimag();
  ///responsev img

  // $('#QuotesSection').each(function(e){
  //
  //    var hightofsec=$('#QuotesSection').height();
  //    var hightofimg=$('#QuotesSection ul li img').height();
  //   var widthslider=$('#slider').width();
  //    $('#QuotesSection ul li img').width(widthslider);
  //    $('#QuotesSection ul li img').height(hightofsec);
  //
  //    if(hightofimg != hightofsec ){
  //     $('#QuotesSection ul li img').height(hightofsec);
  //     $('#slider').height(hightofsec);
  //    }
  //
  //
  //  });





  ///menu responseve
  $(".menu").on("click",function(e){

    $("nav").toggleClass("open");

  });

  $("nav a").on("click",function(e){

    $("nav").toggleClass("open");

  });

  /// animated scroling
 $("nav a").click(function(e){
  e.preventDefault();

  var targetID= e.currentTarget.id+"Section";
  $('html body').animate({
    scrollTop:$("#"+targetID).offset().top-59
  },1500)
});


$(document).on("scroll", onScroll);



});


/// change active elment on navbar
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#mynav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top-70 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#mynav a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
       });
}
