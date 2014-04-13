var page;

page = $(document);

page.ready(function() {
  var doge_animate, header, more;
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
  header = $("header");
  page.scroll(function(e) {
    var scrolled;
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 70) {
      return header.fadeOut();
    } else {
      return header.fadeIn();
    }
  });
  header.parent().hover((function() {
    return header.fadeIn();
  }), function() {
    var scrolled;
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 70) {
      return header.fadeOut();
    }
  });
  more = $(".more");
  return more.click(function(e) {
    return $.get("proxy.py", function(data) {
	alert (data);
      var ins, today;
      if (data) {
        today = new Date();
        today = "" + (today.getDate()) + "." + (today.getMonth()) + "." + (today.getFullYear());
        ins = '<article class="view-block">\n <a class="article-name" href="#">' + data["name"] + '</a>\n' + data["content"] + ' <p class="time-label"> Опубликовано ' + today + '</p> </article>';
        return more.before(ins);
      } else {
        return alert("Генератор статей не работает");
      }
    });
  });
});