const raf = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.oRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(callback) {
        window.setTimeout(callback, 1000 / 60)
    }

export class Ticker {

    tick = raf

    interval(callback, duration) {
        var nowTime = new Date().getTime();
        var dt = nowTime - this.targetTime;
        if (dt >= 0) {
            if (dt < duration) {
                nowTime -= dt;
            }
            this.targetTime = nowTime + duration;
            callback();
        }
    }

    stop() {

    }
}