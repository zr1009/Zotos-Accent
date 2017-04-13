(function(jQuery) {
  jQuery.fn.rollover = function(options) {
    this.find('a > img').each(function() {
      var name = this.src.replace(/\.(png|jpg|gif)$/, '')
        , extention = '.' + RegExp.$1;
      var i = name.lastIndexOf('_o');
      if (i > 0) {
        name = name.substr(0, i);
      }
      $(this).hover(
        function() {
          this.src = name + '_o' + extention;
        },
        function() {
          this.src = name + extention;
        }
      );
    });
  };
})(jQuery);