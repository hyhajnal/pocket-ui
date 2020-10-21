let elementStyle = document.createElement('div').style;
let prefixKey = '';

function vendor() {
    let ucProp = 'Transform';
    let transformNames = {
        standard: ucProp.toLowerCase(),
        webkit: `webkit${ucProp}`,
        Moz: `Moz${ucProp}`,
        O: `O${ucProp}`,
        ms: `ms${ucProp}`
    };

    for (let key in transformNames) {
        if (elementStyle[transformNames[key]] !== undefined) {
            prefixKey = key;
            return;
        }
    }

    prefixKey = false;
}
export function prefixStyle(style, type) {
    if (prefixKey === '') {
        vendor();
    }
    if (prefixKey === false || prefixKey === 'standard') {
        return style;
    }
    if (type === 'css') {
        return `-${prefixKey}-${style}`;
    } else {
        return prefixKey + style.charAt(0).toUpperCase() + style.substr(1);
    }
}

/**
 * 动态插入css
 */
export function loadStyles(css, doc) {
    if (!doc) doc = document;
    let head = doc.head || doc.getElementsByTagName('head')[0];
  
    let style = doc.createElement('style');
        style.type = 'text/css';
    if (style.styleSheet) {  // IE
        style.styleSheet.cssText = css;
    } else {                 // the world
        style.appendChild(doc.createTextNode(css));
    }
    head.appendChild(style);
  
    return style;
}

/**
 * 批量注册keyframe
 * @param {*} list 
 */
export function registerKeyframe(list = []) {
    if (!list.length) return;

    let keyframes = '';
    const keyframesPrefix = prefixStyle('keyframes', 'css')
    const transformPrefix = prefixStyle('transform', 'css')

    list.map(aniConfig => {
        const { id, width, step } = aniConfig
        keyframes += `
            @${keyframesPrefix} poc-ani-${id} {
                from {
                    ${transformPrefix}: translate3d(0, 0, 0);
                }
                to {
                    ${transformPrefix}: translate3d(-${width * step}px, 0, 0);
                }
            }
        `;
    });

    keyframes && loadStyles(keyframes)
}