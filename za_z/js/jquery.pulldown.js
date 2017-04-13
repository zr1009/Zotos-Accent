(function(jQuery) {

  jQuery.fn.pulldown = function(options) {
    var $self = this
      , $target = this.find('.sub, .selectArea')
      , h = $target.height();

    var show = function() {
      $target.stop().slideDown(300);
    };

    var hide = function() {
      $target.stop().slideUp(150);
    };
    $self.hover(show, hide);
  };
})(jQuery);
