!(function(a,b,c,d,e,f){var g="",h=a.sessionStorage,i="__admaster_ta_param__",j="tmDataLayer"!==d?"&dl="+d:"";
if(a[f]={},a[d]=a[d]||[],a[d].push({startTime:+new Date,event:"tm.js"}),h){var k=a.location.search,
l=new RegExp("[?&]"+i+"=(.*?)(&|#|$)").exec(k)||[];l[1]&&h.setItem(i,l[1]),l=h.getItem(i),
l&&(g="&p="+l+"&t="+ +new Date)}var m=b.createElement(c),n=b.getElementsByTagName(c)[0];m.src="//tag.cdnmaster.com/tmjs/tm.js?id="+e+j+g,
m.async=!0,n.parentNode.insertBefore(m,n)})(window,document,"script","tmDataLayer","TM-Z0DW9V","admaster_tm");

/*
## sitemaster加码
*/
$(function(){
  //首页焦点大图
  $("#windowSlide .slide").each(function(){
    $(this).find("a").attr("onclick", "_smq.push(['custom','焦点图','图片"+$(this).index()+"'])");
  });
  //首页官方网站链接
  $(".za_womens").attr("onclick", "_smq.push(['custom','首页','ZA官方网站'])");
  //产品
  $(".products li a").each(function(){
    var name1 = $(this).find(".name_01").html().replace(/[\n\s]+/g, " ");
    var name2 = $(this).find(".name_02").html().replace(/[\n\s]+/g, " ");
    $(this).attr("onclick", "_smq.push(['custom','product','product pic', '"+name1+" "+name2+"'])");
  });
  $("li.current").each(function(){
    var name = $.trim($(this).find(".name_box").html().replace(/[\n\s]+/g, " "));
    $(this).find("a").attr("onclick", "_smq.push(['custom','product','product pic', '"+name+"'])");
  });
  $(".anotherProduct a").each(function(){
    var name = $.trim($(this).find("dd").text().replace(/[\n\s]+/g, " "));
    $(this).attr("onclick", "_smq.push(['custom','product','product pic', '"+name+"'])");
  });
  $(".series .itemList li a").each(function(){
    var name = $.trim($(this).find(".name_box").html().replace(/[\n\s]+/g, " "));
    $(this).attr("onclick", "_smq.push(['custom','product','product pic', '"+name+"'])");
  });
  $(".infoBlock dl").each(function(){
    var name = $.trim($(this).find("dd").text().replace(/[\n\s]+/g, " "));
    $(this).attr("onclick", "_smq.push(['custom','product','product pic', '"+name+"'])");
  });
  $(".aa_list li").each(function(){
    var name = $.trim($(this).find(".info").text().replace(/[\n\s]+/g, " "));
    if($(this).is(".bg_green")){
      $(this).find("a").attr("onclick", "_smq.push(['custom','product','product pic', '激智控油'])");
    } else if($(this).is(".bg_blue")) {
      $(this).find("a").attr("onclick", "_smq.push(['custom','product','product pic', '激智保湿'])");
    } else if($(this).is(".bg_white")) {
      $(this).find("a").attr("onclick", "_smq.push(['custom','product','product pic', '激智炫亮'])");
    } else if($(this).is(".bg_red")) {
      $(this).find("a").attr("onclick", "_smq.push(['custom','product','product pic', '激智劲效'])");
    } else $(this).find("a").attr("onclick", "_smq.push(['custom','product','product pic', '"+name+"'])");

  });
});
/*
## sitemaster加码end
*/

$(function() {
  $('.languageBox > ul, .sub').rollover();
  $('#r-news .bg').rollover();
  
  $('.gnav li:nth-child(1)').pulldown();
  $('.gnav li:nth-child(2)').pulldown();
  $('.language a:nth-child(2)').parent().pulldown();

  $('.gnav li .sub').hover(function() {
    $(this).parent('li').addClass('active');
  },
  function() {
    $(this).parent('li').removeClass('active');
  });
  
  

  $(".img-hover")
    .live("mouseenter", function(event) {
      $(this).stop()
        .animate({ opacity: 0.7 }, 300);
    })
    .live("mouseout", function(event) {
      $(this).stop()
        .animate({ opacity: 1 }, 333);
    });


	$('a.fade').css('display','block');
	$('.fade').hover(function() {
	$(this).stop(true, false).animate({opacity: .7}, {duration: 300})}, 
  function() {
	$(this).stop(true, false).animate({opacity: 1}, {duration: 300})
	});

  $(".checkBtn img")
    .live("mouseenter", function(event) {
      $(".oc").stop()
        .animate({ opacity: 0.7 }, 300);
    })
    .live("mouseout", function(event) {
      $(".oc").stop()
        .animate({ opacity: 1 }, 333);
    });


//
    $('a[href^=#wrapper]').click(function() {
      var speed = 600;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $($.browser.safari ? 'body' : 'html').animate({scrollTop:position}, speed, 'easeOutExpo');
      return false;
   });
//

  
  
  $('a[rel*="anchor"]').click(function() {
    if ((navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0)) {
      var $target = $(this.hash);
      var offset = $target.offset().top;
      $('html, body').animate({scrollTop: offset}, 600, 'easeOutExpo');
    } else if ($(this.hash).attr('id') == 'container') {
      var $target = $(this.hash);
      var offset = $target.offset().top;
      $('.jspPane, .jspDrag').animate({top: offset }, 600, 'easeOutExpo');
    } else {
      var $target = $(this.hash);
      var offset = $target.offset().top;
      var paneOffset = parseInt($('.jspPane').css('top'));
      $('.jspPane, .jspDrag').animate({top: paneOffset - offset }, 600, 'easeOutExpo');
    }
    return false;
  });

  var toggle = function(el) {
    elems = el instanceof jQuery ? el.map(function() { return this }) : [el];
	$.each(elems, function(i, elem) {
      var name = elem.src.replace(/\.(png|jpg|gif)$/, '')
        , extention = '.' + RegExp.$1
        , i = name.lastIndexOf('_o');
      elem.src = i > 0 ? name.substr(0, i) + extention : name + '_o' + extention;
	});
  };

  $('#r-news td:has(.btn)').each(function() {
    var $self = $(this)
      , $map = $('#r-news .bg .' + this.className.split(' ')[1]).find('img')
      , $facebook = $self.find('.btn img');
    $(this).hover(
      function() {
        $self
          .css({ backgroundColor: '#ff319c', color: '#ffffff'})
          .find('.city').css({color: '#ffffff'});
        toggle($map);
        toggle($facebook);
      },
      function() {
        $self
          .css({backgroundColor: '#ffffff', color: '#000000'})
          .find('.city').css({color: '#e50080'});
        toggle($map);
        toggle($facebook);
      }
    );
  });

  $('#r-news .bg p:has(a)').each(function() {
    var $target = $('#r-news td.' + this.className)
      , $title = $target.find('.city')
      , $btn = $target.find('img');

    $(this).hover(
      function() {
        $target.css({ backgroundColor: '#ff319c', color: '#ffffff'});
        $title.css({color: '#ffffff'});
        toggle($btn.get(0));
      },
      function() {
        $target.css({backgroundColor: '#ffffff', color: '#000000'});
        $title.css({color: '#e50080'});
        toggle($btn.get(0));
      }
    );
  });
});
