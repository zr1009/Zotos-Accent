$(function() {
	var timer;
	var i = 0;
	var clone = $('#nav li').first().clone()
	$('#nav').append(clone)
	var size = $('#nav li').size();	
	function Left() {
		i++;
		if(i == size) {
			$('#nav').css({
				left: 0
			})
			i = 1;
		}
		$('#nav').stop().animate({
			left: -i * 940
		},450)
	}
	function Right() {
		i--;
		if(i == -1) {
			$('#nav').css({
				left: -(size - 1) * 940
			})
			i = size - 1;
		}
		$('#nav').stop().animate({
			left: -i * 940
		}, 450)
	}
	var timer = setInterval(Left, 2000)
	$('#banner').hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(Left, 2000)
	})
	$('.prev').mousedown(function() {
		return false;
	})
	$('.next').mousedown(function() {
		return false;
	})
	$('.prev').click(function(){		
			Right()				
	})
	$('.next').click(function(){
			Left()
		
	})		 
})