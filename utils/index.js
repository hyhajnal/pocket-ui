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

const toCamel = (str) => {
    let arr = str.split( '-' );
    if (arr.length === 1) return str.charAt(0).toUpperCase() + str.slice(1);
    return arr.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join('');
}

// 首字母小写
const lowerInitial = (str) => {
    return str.charAt(0).toLowerCase() + str.slice(1)
}

export {
    ViewPortHeight,
    throttle,
    toCamel,
    lowerInitial
}