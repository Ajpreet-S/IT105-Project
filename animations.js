'use strict';

const options = document.querySelectorAll('.option');
options.forEach((element, i) => {
    //TODO Make the amount of rotation dependent on the number of options
    function mouseOverAnimation() {
        anime({
            targets: element.querySelectorAll('a'),
            scale: '1.2',
            rotate: -6,
        })
    }
    function mouseOutAnimation() {
        anime({
            targets: element.querySelectorAll('a'),
            scale: '1',
            rotate: 0,
        })
    }
    element.addEventListener('mouseover', () => {
        mouseOverAnimation();
    })
    element.addEventListener('mouseout', () => {
        mouseOutAnimation();
    })
});