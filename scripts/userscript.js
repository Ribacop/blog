var page;

page = $(document);

page.ready(function() {
  var doge_animate, header, more, onScrollFunction, topOfPage;
  header = $("header");
  topOfPage = function() {
    var scrolled;
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    return scrolled < 70;
  };
  onScrollFunction = function(e) {
    if (topOfPage()) {
      return header.css("top", "0");
    } else {
      return header.css("top", "-5em");
    }
  };
  onScrollFunction();
  page.scroll(onScrollFunction);
  header.parent().hover((function(e) {
    return header.css("top", "0");
  }), function(e) {
    if (!topOfPage()) {
      return header.css("top", "-5em");
    }
  });
  doge_animate = function(e) {
    var doge;
    doge = $('#doge');
    if (doge.length === 0) {
      $('body').append('<img src="images/Doge.png" style="position:fixed; right:5%; bottom:-200px; width:200px;" id="doge">');
      doge = $('#doge');
      doge.animate({
        bottom: 0
      }, 500);
      return doge.on('click', function(e) {
        return doge.slideUp(500, doge.detach);
      });
    }
  };
  $("main").delegate('article', 'copy', doge_animate);
  more = $(".more");
  return more.click(function(e) {
    if (window.copied != null) {
      return more.before(window.copied.clone());
    } else {
      window.copied = $("article").clone();
      return more.before(window.copied);
    }
  });
});