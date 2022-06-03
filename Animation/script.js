const wrapperEl = document.querySelectorAll('.wrapper');
const boxEl = document.querySelectorAll('.border-animation');
const aylanaEl = document.querySelector('.aylana-container');
const bannerEl = document.querySelector('.banner');


wrapperEl.forEach((e ,idx) => {
    e.addEventListener('click', () => {
        if (!(e.classList.contains('up'))) {
            e.classList.remove('left');
            e.classList.remove('right');
            e.classList.remove('up');

            aylanaEl.classList.add('titrash');
            setTimeout(() => {
                
                aylanaEl.classList.remove('titrash');
            }, 500);


            if (!(bannerEl.classList.contains('fadeindown'))) {

                bannerEl.classList.add('fadeindown');
            } else {
                bannerEl.classList.remove('fadeindown');
                bannerEl.classList.add('fadeindown');



                // setTimeout(() => {
                //     const fadecount = document.querySelectorAll('.fadeindown');
                //     fadecount.forEach((e) => {
                //         console.log(e)
                //     })
                //     console.log(fadecount)
                //     // if (fadecount > 1 ) {
    
                //     //     bannerEl.classList.remove('fadeindown');
                //     // }
                // }, 100);
            }
            

            let n = +idx + 1;
            if (n === 1) {
                wrapperEl[0].classList.remove('up','left' ,'right');
                wrapperEl[1].classList.remove('up','left' ,'right');
                wrapperEl[2].classList.remove('up','left' ,'right');

                wrapperEl[0].classList.add('up');
                wrapperEl[1].classList.add('left');
                wrapperEl[2].classList.add('right');

            } else if (n === 2) {
                wrapperEl[0].classList.remove('up','left' ,'right');
                wrapperEl[1].classList.remove('up','left' ,'right');
                wrapperEl[2].classList.remove('up','left' ,'right');

                wrapperEl[0].classList.add('right');
                wrapperEl[1].classList.add('up');
                wrapperEl[2].classList.add('left');

               
            }else if (n === 3) {
                wrapperEl[0].classList.remove('up','left' ,'right');
                wrapperEl[1].classList.remove('up','left' ,'right');
                wrapperEl[2].classList.remove('up','left' ,'right');

                wrapperEl[0].classList.add('left');
                wrapperEl[1].classList.add('right');
                wrapperEl[2].classList.add('up');

               
            }
            boxEl.forEach((b) => {
                if (n === 1) {
                    boxEl[0].classList.remove('chiq');
                    boxEl[1].classList.remove('chiq');
                    boxEl[2].classList.remove('chiq');
                    
                    boxEl[0].classList.add('chiq');
                } else if (n === 2) {
                    boxEl[0].classList.remove('chiq');
                    boxEl[1].classList.remove('chiq');
                    boxEl[2].classList.remove('chiq');
                    
                    boxEl[1].classList.add('chiq');
                } else if (n === 3) {
                    boxEl[0].classList.remove('chiq');
                    boxEl[1].classList.remove('chiq');
                    boxEl[2].classList.remove('chiq');
                    
                    boxEl[2].classList.add('chiq');
                }
            })
        }
    })
})
console.log(boxEl[0],boxEl[1],boxEl[2]);