const aTegi = document.querySelectorAll('.aTegi')
const panelEl = document.querySelectorAll('.search-panel')

aTegi.forEach((e,idx) => {
    e.addEventListener('click',() => {
        // console.log(aTegi[idx].classList.length)

        if (aTegi[idx].classList.contains('active')) {
            aTegi[idx].classList.remove('active')
        } else {
            aTegi[idx].classList.add('active')
        }
    })
})

panelEl.forEach((el,idxn) => {
    el.addEventListener('click',() => {
        // console.log(aTegi[idx].classList.length)

        if (panelEl[idxn].classList.contains('panel')) {
            panelEl[idxn].classList.remove('panel')
        } else {
            panelEl[idxn].classList.add('panel')
        }
    })
})