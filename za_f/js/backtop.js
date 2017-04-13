$(function(){
	function startMove(){
		var speed=0;
		var nowScr=0;
		var timer=null;
		clearInterval(timer);
		timer=setInterval(function(){
			nowScr=$(document).scrollTop();
			speed=(0-nowScr)/4;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(speed==0){
				clearInterval(timer);
			}else{
				$(document).scrollTop($(document).scrollTop()+speed);
			}
		},16)
	}
	$(".backTop").click(function(){
		 startMove()
	})
	$(".bo_header_navBottom ul li").hover(function(){
		$(this).find(".selc_list").slideToggle(100);
	})
})
