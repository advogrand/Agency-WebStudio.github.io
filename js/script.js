
  // STEPS OF WORK

var stepsOfWorkItem1 = document.getElementById("item-first");
var stepsOfWork = document.getElementsByClassName("steps-of-work");
stepsOfWork[0].addEventListener('mousemove', function(){ 
    stepsOfWorkItem1.style.paddingLeft = "0";
    }) 

// var Img2 = document.getElementById("img2");
// Img2.addEventListener('mousemove', function(){ 
//     var figcaption = document.createElement('figcaption');
//     figcaption.innerHTML = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.";
//     figcaption.classList.add("steps-of-work__text");
//     Img2.appendChild(figcaption);  
// })
// var Img3 = document.getElementById("img3");
// Img3.addEventListener('mousemove', function(){ 
//     var stepsOfWorkTitle = document.getElementById("steps-of-work__title3");
//     stepsOfWorkTitle.classList.remove("steps-of-work__subtitle-active");
//     var figcaption = document.createElement('figcaption');
//     figcaption.innerHTML = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.";
//     figcaption.classList.add("steps-of-work__text");
//     Img3.appendChild(figcaption);  
// })

$(document).ready(function() {
 

		var options = {
			ovalWidth: 20,
			ovalHeight: 0,
			offsetX: 0,
			offsetY: 23,
			angle: 0,
			activeItem: 0,
			duration: 350,
			className: 'slider__item'
		}

		var carousel = $('.slider').CircularCarousel(options);


		
		/* Previous button */
		$('.controls .previous').click(function(e) {
			carousel.cycleActive('previous');
			e.preventDefault();
		});

		/* Next button */
		$('.controls .next').click(function(e) {
			carousel.cycleActive('next');
			e.preventDefault();
		});

		/* Manaully click an item anywhere in the carousel */
		$('.carousel .slider__item').click(function(e) {
			var index = $(this).index('li');
			carousel.cycleActiveTo(index);
			e.preventDefault();
		});
	
	

});
// TABS
    
$(document).ready(function(){
    $('.reviews__nav li').click(function(){
        $('.reviews__nav li').removeClass('active');
        $(this).addClass('active');
         
        var num_active = $('.reviews__nav').find('.active').index();
        $('.reviews__item ').removeClass('active');
        $('.reviews__item').eq(num_active).addClass('active');
    }); 
});    

