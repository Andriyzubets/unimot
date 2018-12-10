if(document.querySelector('.header .main-menu .lang')) {
	document.querySelector('.header .main-menu .lang').onclick = function(){
		if(!document.querySelector('.header .main-menu .lang').classList.contains('open')){
			document.querySelector('.header .main-menu .lang').classList.add('open');
		} else {
			document.querySelector('.header .main-menu .lang').classList.remove('open')
		}
	}
}
if(document.querySelector('.hero .slider')) {
	slides = document.querySelectorAll('.hero .slider .slide');
	left = document.querySelector('.hero .slider .navs .left-arrow');
	right = document.querySelector('.hero .slider .navs .right-arrow');

	sliderTop = setInterval(function(){
		changeSl();
	},2000)
	right.onmouseover = function(){
		clearInterval(sliderTop);
	}
	right.onmouseout = function(){
		sliderTop = setInterval(function(){
			changeSl();
		},2000)
	}
	left.onmouseover = function(){
		clearInterval(sliderTop);
	}
	left.onmouseout = function(){
		sliderTop = setInterval(function(){
			changeSl();
		},2000)
	}
	right.onclick = forvSl();
	left.onclick = retSl();
	function changeSl() {
		if(slides[0].classList.contains('active')) {
			slides[0].classList.remove('op');
			setTimeout(function(){
				slides[0].classList.remove('active');
			},200)
			setTimeout(function(){
				slides[1].classList.add('active');
			},200)
			setTimeout(function(){
				slides[1].classList.add('op');
			},300)

		} else if(slides[1].classList.contains('active')) {
			slides[1].classList.remove('op');
			setTimeout(function(){
				slides[1].classList.remove('active');
			},200)
			setTimeout(function(){
				slides[2].classList.add('active');
			},200)
			setTimeout(function(){
				slides[2].classList.add('op');
			},300)
		} else {
			slides[2].classList.remove('op');
			setTimeout(function(){
				slides[2].classList.remove('active');
			},200)
			setTimeout(function(){
				slides[0].classList.add('active');
			},200)
			setTimeout(function(){
				slides[0].classList.add('op');
			},300)
		}
	}
	function forvSl() {
		return function(evt){
			evt.preventDefault();
			if(slides[0].classList.contains('active')) {
				slides[0].classList.remove('op');
				setTimeout(function(){
					slides[0].classList.remove('active');
				},400)
				setTimeout(function(){
					slides[1].classList.add('active');
				},400)
				setTimeout(function(){
					slides[1].classList.add('op');
				},500)

			} else if(slides[1].classList.contains('active')) {
				slides[1].classList.remove('op');
				setTimeout(function(){
					slides[1].classList.remove('active');
				},400)
				setTimeout(function(){
					slides[2].classList.add('active');
				},400)
				setTimeout(function(){
					slides[2].classList.add('op');
				},500)
			} else {
				slides[2].classList.remove('op');
				setTimeout(function(){
					slides[2].classList.remove('active');
				},400)
				setTimeout(function(){
					slides[0].classList.add('active');
				},400)
				setTimeout(function(){
					slides[0].classList.add('op');
				},500)
			}
		}
	}
	function retSl() {
		return function(evt){
			evt.preventDefault();
			if(slides[0].classList.contains('active')) {
				slides[0].classList.remove('op');
				setTimeout(function(){
					slides[0].classList.remove('active');
				},400)
				setTimeout(function(){
					slides[2].classList.add('active');
				},400)
				setTimeout(function(){
					slides[2].classList.add('op');
				},500)

			} else if(slides[1].classList.contains('active')) {
				slides[1].classList.remove('op');
				setTimeout(function(){
					slides[1].classList.remove('active');
				},400)
				setTimeout(function(){
					slides[0].classList.add('active');
				},400)
				setTimeout(function(){
					slides[0].classList.add('op');
				},500)
			} else {
				slides[2].classList.remove('op');
				setTimeout(function(){
					slides[2].classList.remove('active');
				},400)
				setTimeout(function(){
					slides[1].classList.add('active');
				},400)
				setTimeout(function(){
					slides[1].classList.add('op');
				},500)
			}
		}
	}
}
if (document.querySelector('.sandwich-right-bar .nav-toggle')) {
	let sandwichButton = document.querySelector('.sandwich-right-bar .nav-toggle');
	let sandFullMenu = document.querySelector('.sandwich-right-bar .right-menu');
	sandwichButton.onclick = function() {
		if(sandwichButton.classList.contains('active')){
			sandwichButton.classList.remove('active');
			sandFullMenu.classList.remove('active')
		}else{
			sandwichButton.classList.add('active');
			sandFullMenu.classList.add('active');
		}
	}
}
if (document.querySelector('.partners .video')) {
	play = document.querySelector('.partners .video .play')
	lay = document.querySelector('.partners .video')
	vid = document.querySelector('.partners .video video')
	play.onclick = function(){
		lay.classList.add('active');
		vid.play();
		// vid.setAttribute('controls', 'contols');
	}
	vid.onclick = function(){
		lay.classList.remove('active');
		vid.pause();
	}
}
google.maps.event.addDomListener(window, 'load', init);
function init() {
	var mapOptions = {
		zoom: 16,
		scrollwheel: false,
		disableDefaultUI: true,
		center: new google.maps.LatLng(50.4632219,30.5159238),
		styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
	};
	var mapElement = document.querySelector('.current-map');
	var map = new google.maps.Map(mapElement, mapOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(50.4637883,30.5136455,18.89),
		map: map,
		title: 'Unimot Avia Ukraine',
		icon: 'img/map-logo.png'
	});

	var mapOptions1 = {
		zoom: 5,
		scrollwheel: false,
		disableDefaultUI: true,
		center: new google.maps.LatLng(48.8192691,11.1070063),
		styles:  [
		{
			featureType: "all",
			elementType: "all",
			stylers: [
			{ saturation: -100 }
			]
		}
		]
	};
	var mapElement1 = document.querySelector('.eu-map');
	var map1 = new google.maps.Map(mapElement1, mapOptions1);
	var marker1 = new google.maps.Marker({
		position1: new google.maps.LatLng(48.8192691,11.1070063),
		map: map1,
		title: 'Unimot Avia Europe',
		icon: 'img/map-logo.png'
	});
}
let scroll = document.body.scrollTop;
window.addEventListener('scroll', function() {
	scroll = window.pageYOffset || document.documentElement.scroll;
	document.querySelector('.header').classList.add('fixed')
	if(scroll > 20) {

	} else {
		document.querySelector('.header').classList.remove('fixed');
	}
});

jQuery(document).ready(function($){
	var windowsWidth = jQuery(window).width();
	
	if (jQuery(window).width() > 992 ) {
		
	jQuery('.royalSlider').royalSlider({
		arrowsNav: false,
		loop: true,
		keyboardNavEnabled: true,
		controlsInside: false,
		imageScaleMode: 'fit-if-smaller',
		imageScalePadding: 10,
		arrowsNavAutoHide: false,
		autoScaleSlider: true,
		autoScaleSliderWidth: 0,
		autoScaleSliderHeight: 0,
		controlNavigation: 'thumbnails',
		thumbsFitInViewport: false,
		navigateByClick: true,
		startSlideId: 0,
    	autoPlay: {
    		// autoplay options go gere
    		enabled: false,
			delay: 5000,
    		pauseOnHover: false,
			stopAtAction: false
    	},
		transitionType:'move',
		globalCaption: false,
		deeplinking: {
			enabled: true,
			change: false
		},
		slidesSpacing:10,
		visibleNearby: {
            enabled: true,
            centerArea: 0.5,
            center: true,
            breakpoint: 650,
            breakpointCenterArea: 0.64,
            navigateByCenterClick: false
        },
		addActiveClass: true
	});	
	
	} else {
		
	jQuery('.royalSlider').royalSlider({
		arrowsNav: false,
		loop: true,
		keyboardNavEnabled: true,
		controlsInside: false,
		imageScaleMode: 'fit-if-smaller',
		imageScalePadding: 10,
		arrowsNavAutoHide: false,
		autoScaleSlider: true,
		autoScaleSliderWidth: 0,
		autoScaleSliderHeight: 0,
		controlNavigation: 'thumbnails',
		thumbsFitInViewport: false,
		navigateByClick: true,
		startSlideId: 0,
    	autoPlay: {
    		// autoplay options go gere
    		enabled: false,
			delay: 5000,
    		pauseOnHover: false,
			stopAtAction: false
    	},
		transitionType:'move',
		globalCaption: false,
		deeplinking: {
			enabled: true,
			change: false
		},
		slidesSpacing:10,
		addActiveClass: true
	});	
		
		
	}
	
	
	
	
		
		
		  
		  var slider = $(".royalSlider").data('royalSlider');
	
	
	
	//slider.slides[0].holder.on('rsAfterContentSet', function() {
	slider.ev.on('rsAfterContentSet', function() {
		show_full(slider.currSlideId);
	});
	
	slider.ev.on('rsAfterSlideChange', function(event) {
		show_full(slider.currSlideId);
	});	
	
	slider.ev.on('rsDragRelease', function() {
		show_full(slider.currSlideId);
	});
		
	
	
	function show_full(id) {
		var items = [];
		  $('.rsThumbsContainer').find('img').each(function() {
			items.push( {
			  src: $(this).attr('src'),
			  title: $(this).attr('alt')
			} );
		  });
		
		$('.rsActiveSlide').on("click","img", function (e) {
				
		  $.magnificPopup.open({
			items : items,
			type: 'image',
			gallery:{enabled:true},	
			});
			$.magnificPopup.instance.goTo(id);
		});
	}
});