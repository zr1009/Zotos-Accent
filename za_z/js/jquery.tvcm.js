/*!
 * shiseidoza movie player plugin
 * @author Uniba Inc.
 * @requires jQuery 1.4.4, SWFObject 2.2
 */
$(document).ready(function() {
  if ((navigator.userAgent.indexOf('iPad') > 0 ||navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0)) {
    var selector = $('a.video');
    
    selector.each(function() {
     $(this).attr('href', $(this).attr('href').replace('./', '../common/swf/').replace('flv', 'mp4'));
    });
    
    
    $('a.video').live("click", function() {
      $('#mp4-area').html(
        '<video src=' +
        $(this).attr('href') +
        ' controls onclick="this.play();"></video>'
      );
      
      return false;
    });
    
  }
});

(function($) {

	$.fn.tvcm = function(options) {
		var options = $.extend({
			swfUrl: "../common/swf/index.swf",
			swfContainerId: "swf-area",
			handleSelector: "a[href$=flv]",
			swfObject: {
				name: "tvcm",
				height: "540",
				//width: "720",
				width: "960",
				version: "8",
				bgColor: '#ed58ab'
			}
		}, options);
		
		var $swfContainer = this.find('#' + options.swfContainerId);
		var $handler = this.find(options.handleSelector);
		
		$handler.live("click", function(event) {
			var $this = $(this);
			var flvUrl = $(this).attr("href");
			var flashvars = { url: flvUrl };
			swfobject.embedSWF(
				options.swfUrl,
				options.swfContainerId,
				options.swfObject.width,
				options.swfObject.height,
				options.swfObject.version,
				false,
				flashvars
			);
			
			return false;
		});
				
		return this;
	};

})(jQuery);

/*!
 * shiseidoza tvcm.html main script
 * @author Uniba Inc.
 * @requires shiseidoza movie player plugin
 */

 (function($) {
 	
 	$(function() {
 		$("#tvcm")
 			.tvcm({

 			})
 			.find("a[href$=flv]")
 			.live("click", function(event) {
 			
 			  //if ((navigator.userAgent.indexOf('iPad') > 0 ||navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0)) {
   				var offset = 0;
   				var windowScrollTop = $(window).scrollTop();
   				var containerTop = $("#tvcm").position().top;
   				
   				if (windowScrollTop > containerTop) {
   					
  	 				$("html, body").animate({
  	 					scrollTop: containerTop - offset
  	 				}, 330);
   				}
   			//} else {
   			  //$('.jspPane, .jspDrag').animate({top: 0}, 330, 'easeOutExpo');
   			//}
 			})
 				.first()
 				.trigger("click")
 				.end()
 			.end()
 		;
 	});
 	
 })(jQuery);
 
 
 
 // text changes
 $(function(){
	$("a.video_01").click(function(){
		$(".titleArea .fs18").html("<strong>电视广告</strong>");
		$(".titleArea .fs24").html("<strong>Za 男士洁面乳电视广告</strong>");
		$(".titleArea .fs14").html("(15 sec.)");
	});

	$("a.video_02").click(function(){
		$(".titleArea .fs18").html("<strong>电视广告</strong>");
		$(".titleArea .fs24").html("<strong>Za 男士润肤霜电视广告</strong>");
		$(".titleArea .fs14").html("(15 sec.)");
	});

	$("a.video_03").click(function(){
		$(".titleArea .fs18").html("<strong>后台影片</strong>");
		$(".titleArea .fs24").html("<strong>Za 男士洁面乳的后台广告</strong>");
		$(".titleArea .fs14").html("");
	});

	$("a.video_04").click(function(){
		$(".titleArea .fs18").html("<strong>后台影片</strong>");
		$(".titleArea .fs24").html("<strong>Za 男士润肤霜的后台广告</strong>");
		$(".titleArea .fs14").html("");
	});

});