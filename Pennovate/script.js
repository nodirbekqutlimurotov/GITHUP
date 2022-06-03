const inputEl = document.querySelectorAll('.input-inside');

inputEl.forEach((e) => {
    e.addEventListener('click' , () => {
        e.classList.add('active');
    })
})