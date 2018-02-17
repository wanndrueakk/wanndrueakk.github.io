  $(document).ready(function() {  


  		 $("#myCarousel").swiperight(function() {  
    		  $(this).carousel('prev');  
	    		});  
		   $("#myCarousel").swipeleft(function() {  
		      $(this).carousel('next');  
	   });  

		     		 $("#myCarousel1").swiperight(function() {  
    		  $(this).carousel('prev');  
	    		});  
		   $("#myCarousel1").swipeleft(function() {  
		      $(this).carousel('next');  
	   });  


$("video").prop("volume", 0.3).click(function(){this[this.paused?"play":"pause"]()});


        var ph = $(".pod-fx-m").height();
		var hh = $("header").height();
		var mhh = hh - ph;
        var $menu = $("#menu");
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 64 && $menu.hasClass("default-m") ){
                $menu.removeClass("default-m").addClass("fixed-m");
                $(".pod-fx-m").css("display","block");

				$("header").css("height", mhh);
            } else if($(this).scrollTop() <= 64 && $menu.hasClass("fixed-m")) {
                $menu.removeClass("fixed-m").addClass("default-m");
                $(".pod-fx-m").css("display","none");
				$("header").css("height", hh);
            }
        });//scroll
     $('#menu a[href*="#"]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top - 64
      }, 1000);
      e.preventDefault();
   });


   setInterval(function(){
  $('.blick').addClass('blickOn');
  setTimeout(function(){$('.blick').removeClass('blickOn')}, 2000);
}, 4000); 





$(function() {
  $(".fancybox").fancybox();


 $('.gallery p').on('mouseup', function() {
return false;
    });

 $('.gallery').on('mouseup', function() {
        $(".fancybox-g").fancybox().trigger('click');
    });


});




$("#tip4").click(function() {
  $.fancybox({
      'padding'   : 0,
      'autoScale'   : false,
      'transitionIn'  : 'none',
      'transitionOut' : 'none',
      'title'     : this.title,
      'width'   : 680,
      'height'    : 495,
      'href'      : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
      'type'      : 'swf',
      'swf'     : {
           'wmode'    : 'transparent',
        'allowfullscreen' : 'true'
      }
    });

  return false;
});
$("#tip5").click(function() {
  $.fancybox({
      'padding'   : 0,
      'autoScale'   : false,
      'transitionIn'  : 'none',
      'transitionOut' : 'none',
      'title'     : this.title,
      'width'   : 680,
      'height'    : 495,
      'href'      : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
      'type'      : 'swf',
      'swf'     : {
           'wmode'    : 'transparent',
        'allowfullscreen' : 'true'
      }
    });

  return false;
});




    });




