'use strict';

const sections = document.querySelectorAll('.animation-section');


// Animation 1
sections[0].addEventListener('click', () => {
    anime({
        targets: sections[0].querySelector('.square'),
        translateX: 250
    });
})

// Animation 2
sections[1].addEventListener('click', () => {
    anime({
        targets: sections[1].querySelector('.square'),
        rotate: '+=90'
    });
})

// Animation 3
sections[2].addEventListener('click', () => {
    anime({
        targets: sections[2].querySelector('.square'),
        scale: 1.3
    });
})

// Animation 4
sections[3].addEventListener('click', () => {
    anime({
        targets: sections[3].querySelector('.square'),
        width: 300,
        duration: 2000
    });
})

// Animation 5
sections[4].addEventListener('click', () => {
    anime({
        targets: sections[4].querySelectorAll('.square'),
        translateX: 250,
        duration: 2000,
        delay: anime.stagger(100)
    });
})

// Animation 6
sections[5].addEventListener('click', () => {
    anime({
        targets: sections[5].querySelectorAll('.square'),
        translateX: anime.stagger(80),
        duration: 2000,
        delay: anime.stagger(100)
    });
})

// Animation 7
sections[6].addEventListener('click', () => {
    anime({
        targets: sections[6].querySelector('.square'),
        translateX: 300,
        rotate: 720,
        scale: 1.25,
        duration: 2500
    });
})

// Animation 8
sections[7].addEventListener('click', () => {
    anime({
        targets: sections[7].querySelector('.square'),
        translateX: {
            value: 350,
            duration: 2500
        },
        rotate: {
            value: -360,
            duration: 3600,
            delay: 850
        },
        scale: {
            value: 1.25,
            duration: 3600,
            delay: 900
        }
    });
})

// Animation 9
sections[8].addEventListener('click', () => {
    anime({
        targets: sections[8].querySelectorAll('.square'),
        translateX: (el, i, l) => {
            return (70 / 2) * (l - i) + 350;
    },
        duration: 2000,
        direction: 'alternate',
        delay: (el, i, l) =>  {
            return i * 250;
        },
        scaleX: (el, i, l) => {
            return 1 + i;
        },
        easing: 'linear',
    });
})

// Animation 10
sections[9].querySelectorAll('.square').forEach((el) => {
    el.style.width = '35px';
    el.style.height = '35px';
});
sections[9].addEventListener('click', () => {
    anime({
        targets: sections[9].querySelectorAll('.square'),
        loop: 6,
        duration: 1500,
        delay: (el, i) => {
          return 100 * i;
        },
        translateX: (el, i, l) => {
            const x = 350;
            switch (i) {
                case 0:
                    return 70 + x;
                case 1:
                    return 175 + x;
                case 2:
                    return x;
            }
        },
        translateY: (el, i, l) => {
            return -70 + (i * 35);
        },
        scale: (el, i, l) => {
            return i + 1;
        },
        endDelay: 100,
        rotate: {
            value: (el, i) => 360 + i * 180,
            delay: 250
        },
        direction: 'alternate'
    });
})
