function Animation(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        Animation(element, to, duration - 10);
    }, 5);
}

function loadMore(element, n) {
    el = element;
    for(i=0; i < el.length; i++){
        if(i < n){
            el[i].style.display = "block";
        }else{
            break;
        }
    }
}

function slideDown(className) {
    className.style.display = "block";
}

function slideUp(className) {
	className.style.display = "none";
}

function show(target) {
    target.style.display = "block";
}

function hide(target) {
    target.style.display = "none";
}

function fadeIn(el) {
    el.style.opacity = 1;
    el.style.display = "block";
    el.style.transition = "all 5s";
    
    var last = +new Date();
    var tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
      last = +new Date();
  
      if(+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
  
    tick();
}

function fadeOut(el) {
    el.style.opacity = 0;
    el.style.display = "none";
    el.style.transition = "all 5s";
    
    var last = +new Date();
    var tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
      last = +new Date();
  
      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
  
    tick();
}

function toggleClass(target, className) {
    if(target.classList){
        target.classList.toggle(className);
    }else{
        var classes = target.className.split(' ');
        var existingIndex = classes.indexOf(className);
      
        if (existingIndex >= 0){
          classes.splice(existingIndex, 1);
        }else{
          classes.push(className);
        }
      
        target.className = classes.join(' ');
    }
}

function addClass(target, className) {
    if(target.classList){
        target.classList.add(className);
    }else{
        target.className += ' ' + className;
    }
}

function removeClass(target, className) {
    if(target.classList){
        target.classList.remove(className);
    }else{
        target.className = target.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}

function trigger(target, className) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(className, true, false);
    target.dispatchEvent(event);
}