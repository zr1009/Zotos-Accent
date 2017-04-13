if (typeof fac == "undefined") fac = function() {};

/************************
 fac.delegate 
 ************************/

fac.delegate = function  (this_object, method, args, join_args) {
  //fac.log("fac.delegate(" + [this_object, method, args, join_args] + ")");
  
  return function () {
    if (join_args) {
      var joined_args = new Array();
      var i;
      var length = arguments.length;
      for (i = 0; i < length; i++) {
        joined_args.push(arguments[i]);
      };
      joined_args = joined_args.concat(args);
      return method.apply(this_object, joined_args);
    }
    else if (args && args.length >= 1) {
      return method.apply(this_object, args);
    }
    else {
      return method.apply(this_object, arguments);
    };
  };
};


fac.Background = function (target, property) {
  //fac.log("fac.Background (" + [target, property] + ")");
  
  this.initialize(target, property);
}

fac.Background.prototype = {
  
  $window            : null, 
  target             : null, 
  container          : null, 
  
  front              : null, 
  back               : null, 
  
  initialize : function (target, property) {
    //fac.log("fac.Background.initialize (" + [target, property] + ")");
    
    this.$window = $(window);
    
    this.target = 
      $(target);
    
    this.container = 
      $('<div></div>')
      .attr({id:"background"})
      .appendTo(this.target);
    
    property = property != undefined ? property : {};
  }, 
  
  start : function () {
    //fac.log("fac.Background.start (" + [] + ")");
    
    var front_element = 
      $("<div></div>")
      .addClass("front")
      .appendTo(this.container);
    
    var back_element = 
      $("<div></div>")
      .addClass("back")
      .appendTo(this.container);
    
    if (fac.is_smartphone) return;
    
    this.front = new fac.Background.Item(front_element, {coef:0.3});
    this.back  = new fac.Background.Item(back_element,  {coef:0.1});
    
    //console.log(this.$window);
    this.$window.scroll(fac.delegate(this, this.onScroll));
    this.onScroll();
    
  }, 
  
  onScroll : function () {
    //fac.log("fac.Background.onScroll (" + [] + ")");
    
    var scroll_top = this.$window.scrollTop();
    
    this.front.onScroll(scroll_top);
    this.back.onScroll(scroll_top);
  }
  
}

//fac.Background.Item

fac.Background.Item = function (target, property) {
  //fac.log("fac.Background.Item (" + [target, property] + ")");
  
  this.init(target, property);
}

fac.Background.Item.prototype = {
  
  $window            : null, 
  target             : null, 
  
  offset             : null, 
  coef               : null, 
  
  init : function (target, property) {
    //fac.log("fac.Background.Item.init (" + [target, property] + ")");
    
    this.target = 
      $(target);
    
    property = property != undefined ? property : {};
    
    this.offset = this.target.position().top;
    this.coef   = property.coef != undefined ? property.coef : 1;
  }, 
  
  onScroll : function (scroll_top) {
    //fac.log("fac.Background.Item.onScroll (" + [] + ")");
    
    var top = this.offset + (scroll_top * -this.coef);
    
    this.target
      .stop()
      .animate({top:top}, {duration:3000, easing:"easeOutCubic"});
  }
  
}


if (typeof fac == "undefined") fac = function() {};

$(function () {
  var background = new fac.Background("#container");
  background.start();
  
});