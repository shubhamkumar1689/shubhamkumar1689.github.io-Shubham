var container = document.getElementById("mycontainer");
var canvas = document.getElementById("mycanvas");
if (screen.width > 600) {
    window.addEventListener('mousemove', (e) => {
        let x = e.clientX; // - container.getBoundingClientRect().left;
        let y = e.clientY; // - container.getBoundingClientRect().top;
        console.log(x, y);


        canvas.style.transform = 'translate(-' + x + 'px, ' + (-y * 2) + 'px)';

    });
    window.addEventListener('mouseout', (e) => {
        canvas.style.transform = 'translate(' + (-670) + 'px, ' + (-700) + 'px)'
    })
} else {
    var tsY;
    var tsX;
    window.addEventListener('touchstart', (e) => {
        //e.preventDefault();
        tsY = e.touches[0].clientY;
        tsX = e.touches[0].clientX;
    }, false);

    window.addEventListener('touchmove', (e) => {
        // e.preventDefault();
        /*
                var teY = e.touches[0].clientY;
                var teX = e.touches[0].clientX;
                var x = 0,
                    y = 0;
                if (tsY > teY) {
                    y = y + teY - 1520 / 1.2;
                    y = y
                } else {
                    y = y + teY - tsY;
                    y = -y
                }
                if (tsX > teX) {
                    x = teX - 720;
                    x = 2.2 * x
                } else {
                    x = teX - 720;
                }*/
        let x = e.touches[0].pageX - container.getBoundingClientRect().left;
        let y = e.touches[0].pageY - container.getBoundingClientRect().top;

        console.log(e.touches[0].pageX);
        //canvas.style.left = x + 'px';
        //canvas.style.top = 1000 + 'px';

        canvas.style.transform = 'translate(-' + x * 2 + 'px, ' + (-y * 1.1) + 'px)';
        //  canvas.style['-webkit-transform'] = 'translate3d(' + x + 'px, ' + (y) + 'px,0px)';

    });
    /*window.addEventListener('touchend', (e) => {
        canvas.style.transform = 'translate(' + (-670) + 'px, ' + (-700) + 'px)'
    })*/
}

document.addEventListener('contextmenu', event => event.preventDefault());