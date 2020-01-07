function addLoadEvent(func){
    var oldOnload = window.onload;
    if (typeof window.onload != 'function'){
        console.log('a')
        window.onload = func;
    }else{
        window.onload = function(){
            console.log('b')
            oldOnload();
            func();
        }
    }
}