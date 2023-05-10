'use strict';

const options = document.querySelectorAll('.option');
options.forEach((element, i) => {
    //TODO Make the amount of rotation dependent on the number of options
    function mouseOverAnimation() {
        anime({
            targets: element.querySelectorAll('div'),
            scale: '1.2',
            rotate: -6,
            translateX: '-1vw',
        })
    }
    function mouseOutAnimation() {
        anime({
            targets: element.querySelectorAll('div'),
            scale: '1',
            rotate: -3,
            translateX: 0,
            translateY: 0
        })
    }
    element.addEventListener('mouseover', () => {
        mouseOverAnimation();
    })
    element.addEventListener('mouseout', () => {
        mouseOutAnimation();
    })
});