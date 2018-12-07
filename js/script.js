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

	// sliderTop = setInterval(function(){
	// 	changeSl();
	// },2000)
	// right.onmouseover = function(){
	// 	clearInterval(sliderTop);
	// }
	// right.onmouseout = function(){
	// 	sliderTop = setInterval(function(){
	// 		changeSl();
	// 	},2000)
	// }
	// left.onmouseover = function(){
	// 	clearInterval(sliderTop);
	// }
	// left.onmouseout = function(){
	// 	sliderTop = setInterval(function(){
	// 		changeSl();
	// 	},2000)
	// }
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