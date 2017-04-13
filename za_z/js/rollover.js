jQuery(document).ready(function($) {
	var postfix = '_on';
	$('#tvcm a img, #backstage .thumbPhoto a img').not('[src*="'+ postfix +'."]').each(function() {
		var img = $(this);
		var src = img.attr('src');
		var src_hover = src.substr(0, src.lastIndexOf('.'))
		           + postfix
		           + src.substring(src.lastIndexOf('.'));
		$('<img>').attr('src', src_hover);
		img.hover(
			function() {
				img.attr('src', src_hover);
			},
			function() {
				img.attr('src', src);
			}
		);
	});
});
