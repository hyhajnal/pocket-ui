const ViewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const throttle = function(fn, delay) {
    let timer = null
    return function() {
        const context = this
        let args = arguments
        if(!timer) {
            timer = setTimeout(() => {
                fn.apply(context,args) 
                clearTimeout(timer) 
                timer = null;
            }, delay);
        }
    }
}

export {
    ViewPortHeight,
    throttle,
}