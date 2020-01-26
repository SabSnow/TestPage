autoSlider();
var left = 0;
var timer;


function autoSlider (){
	timer = setTimeout(function (){
		var wrapSlider = document.getElementById('wrapSlider');
		left = left - 590;
		if (left < -2360) {
			left = 0;
			clearTimeout(timer);
		}
		wrapSlider.style.left = left +'px';
		autoSlider ();
	}, 4000);
}

$(document).ready(function() {
// Всплывающее меню
		$('.openBtn').click(function() {
			if(!$('.openBtn').hasClass('openDone'))
			{
				$('.openBtn').addClass('openDone');
				$('.men-bar').css("right", "0px");
	        }
			else
			{
				$('.openBtn').removeClass('openDone');
				$('.men-bar').css("right", "-400px");
			}
		});
//анимация точек, сменяющих друг друга

// $('.dot').removeClass('active')
// $('.dot'+i).addClass('active')
// if(!i = 4){
// 	i++
// }else{
// 	i = 0
// }


		function DotActive1() {
			$('.dot-one').css({"background-color":"#E41B13", "transform":"scale(2)"});
			$('.dot-four').css({"background-color":"#FFF", "transform":"scale(1)"});
		}
		function DotActive2() {
			$('.dot-one').css({"background-color":"#FFF", "transform":"scale(1)"});
			$('.dot-two').css({"background-color":"#E41B13", "transform":"scale(2)"});
		}
		function DotActive3() {
			$('.dot-two').css({"background-color":"#FFF", "transform":"scale(1)"});
			$('.dot-three').css({"background-color":"#E41B13", "transform":"scale(2)"});
		}
		function DotActive4() {
			$('.dot-three').css({"background-color":"#FFF", "transform":"scale(1)"});
			$('.dot-four').css({"background-color":"#E41B13", "transform":"scale(2)"});
		}
		let start = Date.now();
		let timerId = setInterval(function() {

			let timePassed = Date.now() - start;
		if (timePassed < 4000)
		{
			DotActive1();
		} else if (timePassed >= 4000 && timePassed < 8000) {
		  	DotActive2();
		} else if (timePassed >= 8000 && timePassed < 12000) {
		  	DotActive3();
		} else if (timePassed >= 12000 && timePassed < 16000) {
		  	DotActive4();
		} else if (timePassed >= 16000) {
		  	DotActive1();
		  	start = Date.now();
		}
		},100);

// модальное окно
		$('.modal-button').click(function() { 
			
			$('.modal-window').fadeIn();
			$('.modal-window').addClass('disabled');
		});

		// закрыть на крестик
		$('.modal-close').click(function() { 
			$('.modal-window').fadeOut();
			
		});

		// закрыть по клику вне окна
		$(document).mouseup(function (e) { 
			var popup = $('.popup-window');
			if (e.target!=popup[0]&&popup.has(e.target).length === 0){
				$('.modal-window').fadeOut();
				
			}
		});
	})