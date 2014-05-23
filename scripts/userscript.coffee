page = $ document
page.ready ->
    header =  $ "header"

    topOfPage =()->
        scrolled = window.pageYOffset or document.documentElement.scrollTop
        return scrolled < 70
    onScrollFunction = (e)->
        if topOfPage() then header.css("top", "0") else header.css("top", "-5em")
    onScrollFunction()

    page.scroll onScrollFunction 
    header.parent().hover ((e)-> header.css "top", "0"), (e)->
        if not topOfPage() then header.css "top", "-5em"

    doge_animate = (e)->
        doge = $ '#doge'
        if doge.length is 0
            $('body').append '<img src="images/Doge.png" style="position:fixed; right:5%; bottom:-200px; width:200px;" id="doge">'
            doge = $ '#doge'
            doge.animate {bottom:0}, 500
            doge.on 'click',(e)->
                doge.slideUp 500, doge.detach
    $("main").delegate 'article','copy', doge_animate       

    more = $ ".more"
    more.click (e)->
        if window.copied? then more.before window.copied.clone()
        else 
            window.copied = $("article").clone()
            more.before window.copied
        
    