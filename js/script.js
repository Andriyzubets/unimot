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
if(document.querySelector('.call-me-btn')) {
	cbl = document.querySelectorAll('.call-me-btn');
	for(i=0;i<cbl.length;i++){
		cbl[i].onclick = cbo();
	}
	function cbo(){
		return function(evt){
			event.preventDefault();
			if(!document.querySelector('.popup-callBack').classList.contains('active')) {
				document.querySelector('.popup-callBack').classList.add('active')
				document.querySelector('.popup-cb-bg').classList.add('active')
			}
		}
		

	}
	document.querySelector('.popup-cb-bg').onclick = function(){
		document.querySelector('.popup-callBack').classList.remove('active')
		document.querySelector('.popup-cb-bg').classList.remove('active')
	}
	document.querySelector('.popup-callBack .close').onclick = function(){
		document.querySelector('.popup-callBack').classList.remove('active')
		document.querySelector('.popup-cb-bg').classList.remove('active')
	}
	document.querySelector('.partner-link').onclick = function(){
		if(!document.querySelector('.popup-partner').classList.contains('active')) {
			document.querySelector('.popup-partner').classList.add('active')
			document.querySelector('.popup-pt-bg').classList.add('active')
		}
	}
	document.querySelector('.popup-pt-bg').onclick = function(){
		document.querySelector('.popup-partner').classList.remove('active')
		document.querySelector('.popup-pt-bg').classList.remove('active')
	}
	document.querySelector('.popup-partner .close').onclick = function(){
		document.querySelector('.popup-partner').classList.remove('active')
		document.querySelector('.popup-pt-bg').classList.remove('active')
	}
}
if(document.querySelector('.services')) {
	butts = document.querySelectorAll('.services .wrap .items .item');
	pops = document.querySelectorAll('.popup-service');
	sbg = document.querySelector('.popup-service-bg');
	scl = document.querySelectorAll('.popup-service .close');
	for(i=0;i<butts.length;i++){
		butts[i].onclick = togg(i);
	}
	for(i=0;i<scl.length;i++){
		scl[i].onclick = togg(i);
	}
	function togg(index){
		return function(){
			console.log('in')
			if(!pops[index].classList.contains('active')){
				pops[index].classList.add('active');
				sbg.classList.add('active')
			} else {
				pops[index].classList.remove('active');
				sbg.classList.remove('active')
			}
		}
	}
	sbg.onclick = function(){
		for(i=0;i<pops.length;i++){
			pops[i].classList.remove('active')
			sbg.classList.remove('active')
		}
	}
}
// tabs 
if(document.querySelector('.practice .head > div')) {
	theads = document.querySelectorAll('.practice .head > div');
	tabs = document.querySelectorAll('.practice .tab');

	theads[0].onclick = function(){
		if(!theads[0].classList.contains('active')) {
			theads[0].classList.add('active');
			theads[1].classList.remove('active');
			tabs[1].classList.remove('op');
			setTimeout(function(){
				tabs[1].classList.remove('active');
				tabs[0].classList.add('active');
			},200)
			setTimeout(function(){
				tabs[0].classList.add('op');
			},300)
		}
	}
	theads[1].onclick = function(){
		if(!theads[1].classList.contains('active')) {
			theads[1].classList.add('active');
			theads[0].classList.remove('active');
			tabs[0].classList.remove('op');
			setTimeout(function(){
				tabs[0].classList.remove('active');
				tabs[1].classList.add('active');
			},200)
			setTimeout(function(){
				tabs[1].classList.add('op');
			},300)
		}
	}
}
// slider
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

// 
// 
jQuery(document).ready(function($){
			var dragging = false,
			scrolling = false,
			resizing = false;
    //cache jQuery objects
    var imageComparisonContainers = $('.cd-image-container');
    //check if the .cd-image-container is in the viewport 
    //if yes, animate it
    checkPosition(imageComparisonContainers);
    $(window).on('scroll', function(){
    	if( !scrolling) {
    		scrolling =  true;
    		( !window.requestAnimationFrame )
    		? setTimeout(function(){checkPosition(imageComparisonContainers);}, 100)
    		: requestAnimationFrame(function(){checkPosition(imageComparisonContainers);});
    	}
    });
    
    //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
    imageComparisonContainers.each(function(){
    	var actual = $(this);
    	drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
    });

    //upadate images label visibility
    $(window).on('resize', function(){
    	if( !resizing) {
    		resizing =  true;
    		( !window.requestAnimationFrame )
    		? setTimeout(function(){checkLabel(imageComparisonContainers);}, 100)
    		: requestAnimationFrame(function(){checkLabel(imageComparisonContainers);});
    	}
    });

    function checkPosition(container) {
    	container.each(function(){
    		var actualContainer = $(this);
    		if( $(window).scrollTop() + $(window).height()*0.5 > actualContainer.offset().top) {
    			actualContainer.addClass('is-visible');
    		}
    	});

    	scrolling = false;
    }

    function checkLabel(container) {
    	container.each(function(){
    		var actual = $(this);
    		updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
    		updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
    	});

    	resizing = false;
    }

    //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
    function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
    	dragElement.on("mousedown vmousedown", function(e) {
    		dragElement.addClass('draggable');
    		resizeElement.addClass('resizable');

    		var dragWidth = dragElement.outerWidth(),
    		xPosition = dragElement.offset().left + dragWidth - e.pageX,
    		containerOffset = container.offset().left,
    		containerWidth = container.outerWidth(),
    		minLeft = containerOffset + 10,
    		maxLeft = containerOffset + containerWidth - dragWidth - 10;

    		dragElement.parents().on("mousemove vmousemove", function(e) {
    			if( !dragging) {
    				dragging =  true;
    				( !window.requestAnimationFrame )
    				? setTimeout(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);}, 100)
    				: requestAnimationFrame(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);});
    			}
    		}).on("mouseup vmouseup", function(e){
    			dragElement.removeClass('draggable');
    			resizeElement.removeClass('resizable');
    		});
    		e.preventDefault();
    	}).on("mouseup vmouseup", function(e) {
    		dragElement.removeClass('draggable');
    		resizeElement.removeClass('resizable');
    	});
    }

    function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
    	var leftValue = e.pageX + xPosition - dragWidth;   
        //constrain the draggable element to move inside his container
        if(leftValue < minLeft ) {
        	leftValue = minLeft;
        } else if ( leftValue > maxLeft) {
        	leftValue = maxLeft;
        }

        var widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
        
        $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
        	$(this).removeClass('draggable');
        	resizeElement.removeClass('resizable');
        });

        $('.resizable').css('width', widthValue); 

        updateLabel(labelResizeElement, resizeElement, 'left');
        updateLabel(labelContainer, resizeElement, 'right');
        dragging =  false;
    }

    function updateLabel(label, resizeElement, position) {
    	if(position == 'left') {
    		( label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
    	} else {
    		( label.offset().left > resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
    	}
    }
});
