const inputEl = document.querySelectorAll('.input-inside');
const buttonEl = document.querySelector('.btn-light');
const formEl = document.getElementById('program');
const mapSection = document.getElementById('map');

inputEl.forEach((e) => {
    e.addEventListener('click' , () => {
        e.classList.add('active');
    })
});

buttonEl.addEventListener('click' , () => {
    mapSection.classList.add('map-mar');
    formEl.classList.remove('program');
});

