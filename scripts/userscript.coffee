page = $ document
page.ready ->
    $("article").bind 'copy',(e)->
        doge = $ '#doge'
        if doge.length is 0
            $('body').append '<img src="https://ps.vk.me/c538108/u85635407/docs/edd3b7ddabbe/Doge.png" style="position:fixed; right:5%; bottom:-200px; width:200px;" id="doge">'
            doge = $ '#doge'
            doge.animate {bottom:0}, 500
            doge.bind 'click',(e)->
                doge.slideUp 500, doge.detach
        
    header =  $ "header"
    
    page.scroll (e)->
        scrolled = window.pageYOffset or document.documentElement.scrollTop
        if scrolled > 70 then header.fadeOut() else header.fadeIn()
    
    header.parent().hover  (->header.fadeIn()), ->
        scrolled = window.pageYOffset or document.documentElement.scrollTop
        if scrolled > 70 then header.fadeOut()
        
        
    more = $ ".more"
    more.click (e)->
        $.get "proxy.py", (data)-> 
            today = new Date()
            today = "#{today.getDate()}.#{today.getMonth()}.#{today.getFullYear()}"
            ins = '<article class="view-block">\n
        			   <a class="article-name" href="#">Заголовок статьи</a>\n'+data+
        			   ' <p class="time-label">
        		    	    Опубликовано '+today+
        		    	'</p>
        	    	</article>'
            more.before ins
    