(function() {
    
    //slider
    var click_channel = document.getElementsByClassName("click-channel")[0]; 
    var html_body = document.querySelectorAll("html, body");
    var channel_collapse = document.getElementsByClassName("channel-collapse")[0];
    
    if(click_channel && html_body && channel_collapse){
        click_channel.addEventListener("click", function() {
            
            Animation(document.body, document.body.clientHeight, 1000);
        
            toggleClass(this, "collapsed");
            
            if(this.classList.contains("collapsed"))
            {
                slideDown(channel_collapse);
            }else{
                slideUp(channel_collapse);
            }
        });
    }
    
    //menu
    var link_menu = document.getElementsByClassName("link-menu")[0];
    var rv_menu = document.getElementsByClassName("rv-menu");
    
    if(link_menu && rv_menu){
        link_menu.addEventListener("click", function() {
            
            toggleClass(this, "open");
            
            if(this.classList.contains("open"))
            {   
                addClass(html_body, "rv-overflow");
                addClass(rv_menu, "open");
                
            }else{
                removeClass(html_body, "rv-overflow");
                removeClass(rv_menu, "open");
            }
            
        });
    }
    
    //close menu
    var click_close_menu = document.getElementsByClassName("close-menu")[0];
    
    if(click_close_menu){
        click_close_menu.addEventListener("click", function() {
        
            trigger(link_menu, "click");
            
        });
    }
    
    //login menu
    var link_login = document.getElementsByClassName("link-login")[0];
    var rv_popup = document.getElementsByClassName("rv-popup")[0];
    
    if(link_login && rv_popup){
        link_login.addEventListener("click", function() {
            
            toggleClass(this, "open");
            
            if(this.classList.contains("open"))
            {
                addClass(html_body, "popup-overflow");
                fadeIn(rv_popup);
            }else{
                removeClass(html_body, "popup-overflow");
                fadeOut(rv_popup);
            }
            
        });
    }
    
    var isOperaMini = Object.prototype.toString.call(window.operamini) === "[object OperaMini]";
    //console.debug(isOperaMini);
    
    if(isOperaMini){
        console.debug(isOperaMini);
        //Touchend and MouseUp Opera Mini
        touch_start = "ontouchstart";
        touch_end = "ontouchend";
        touch_move = "ontouchmove";
        
    }else{
        //Touchend and MouseUp Not Opera Mini
        touch_start = "touchstart";
        touch_end = "touchend";
        touch_move = "touchmove";
    }
    
    var touchActive = false;
    
    document.body.addEventListener("mouseup", function(e) {
        var container = document.querySelectorAll(".rv-popup, .popup-inner");
        
        if(container !== e)
        {
            fadeOut(rv_popup);
            removeClass(link_login, "open");
            removeClass(document.body, "popup-overflow");
        }
        
    }, false);
    
    document.body.addEventListener(touch_start, function() {
        touchActive = true;
        fadeOut(rv_popup);
        removeClass(link_login, "open");
        removeClass(document.body, "popup-overflow");
    });
    document.body.addEventListener(touch_end, function() {
        touchActive = false;
        fadeOut(rv_popup);
        removeClass(link_login, "open");
        removeClass(document.body, "popup-overflow");
    });
    document.body.addEventListener(touch_move, function() {
        if(touchActive){
            fadeOut(rv_popup);
            removeClass(link_login, "open");
            removeClass(document.body, "popup-overflow");
        }
    });

    //question
    var question_fixed = document.getElementsByClassName("question-fixed")[0];
    
    if(question_fixed){
        window.onscroll = function() {
          if(document.body.scrollTop > 300)
          {
            fadeIn(question_fixed);
          } else {
            fadeOut(question_fixed);
          }
        };
    }
    
    //index
    var list_loadmore = document.querySelectorAll("#list-loadmore li");
    var view_more = document.getElementsByClassName("view-more")[0];
    
    if(list_loadmore && view_more){
        loadMore(list_loadmore, 5);
        
        view_more.addEventListener("click", function() {
            loadMore(list_loadmore, 10);
            hide(view_more);
        });
    }
    
    //detail
    var detail_loadmore = document.querySelectorAll("#detail-loadmore li");
    
    if(detail_loadmore && view_more){
        loadMore(detail_loadmore, 2);
        
        view_more.addEventListener("click", function() {
            loadMore(detail_loadmore, 4);
            hide(view_more);
        });
    }
    
    //detail reply
    var btn_balas = document.getElementsByClassName("btn-balas")[0];
    var reply = document.querySelectorAll(".btn-balas li").parentNode;
    
    if(btn_balas && reply){
        loadMore(reply, 1);
        btn_balas.addEventListener("click", function(e) {
            e.preventDefault();
            loadMore(reply, 4);
            hide(this);
        });
    }
    
    //notifikasi
    var notif_loadmore = document.querySelectorAll("notif-loadmore li");
    var notif_more = document.getElementsByClassName("notif-more")[0];
    
    if(notif_loadmore && notif_more){
        loadMore(notif_loadmore, 4);
        notif_more.addEventListener("click", function() {
            loadMore(notif_loadmore, 8);
            hide(notif_more);
        });
    }
    
}());