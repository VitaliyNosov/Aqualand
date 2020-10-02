
$(document).ready(function(){
$('.first').click(function(){
$('.pricenumber1').show();
$('.pricenumber2').hide();
$('.second').removeClass('act');
$('.first').addClass('act');
});
$('.second').click(function(){
$('.pricenumber2').show();
$('.pricenumber1').hide();
$('.first').removeClass('act');
$('.second').addClass('act');
}); 

          var parPosition = [];
        $('.par').each(function() {
            parPosition.push($(this).offset().top);
        });
        

        
        	$('.vNav ul li a').click(function () {
			$('.vNav ul li a').removeClass('active');
				$(this).addClass('active');
		}); 
        
       $('.vNav a').hover(function() {
           $(this).find('.label').show();
           }, function() {
           $(this).find('.label').hide();
       });
        
           $(document).scroll(function(){
        var position = $(document).scrollTop(),
                index; 
                for (var i=0; i<parPosition.length; i++) {
                if (position <= parPosition[i]) {
                    index = i;
                    break;
                }
            }
      $('.vNav ul li a').removeClass('active');
            $('.vNav ul li a:eq('+index+')').addClass('active');
        });
        
        	$('.vNav ul li a').click(function () {
			$('.vNav ul li a').removeClass('active');
				$(this).addClass('active');
		});   


  $(".hamburger").click(function(e) {
  e.preventDefault();
    if ($("#mobilesidenav").hasClass("hidden")) {
      $("#mobilesidenav").attr("class", "visible animated slideInRight");
    } else {
      $("#mobilesidenav").attr("class", "hidden animated slideOutRight");
    }
    $(this).toggleClass("open");
  });
  
  
  $(".sidelinks a").click(function () {
            $("#mobilesidenav").attr("class", "hidden");
			$("body").removeClass("lockscroll");
			$(".hamburger").toggleClass("open");
    });

   var mainslider = $("#lightSlider").lightSlider({
        slideMargin: 30, 
        controls: false,
        responsive : [
                {
                    breakpoint:992,
                    settings: {
                        item:2,
                        slideMove:1,
                        slideMargin:30,
                      }
                }, 
				
                {
                    breakpoint:600,
                    settings: {
                        item:1,
                        slideMove:1,
					
                      }
                }
            ],
 
    });
	$('#goToPrevSlide').on('click', function () {
    mainslider.goToPrevSlide();
});
$('#goToNextSlide').on('click', function () {
    mainslider.goToNextSlide();
});
	
   var slider = $("#MobilelightSlider").lightSlider({
   item: 1,
        slideMargin: 30, 
        controls: false,
 
    });

});

$('.addcomment').click(function(){
$('textarea').toggle();
})

$("#file").change(function(){
  $("#file-name").text(this.files[0].name);
});
