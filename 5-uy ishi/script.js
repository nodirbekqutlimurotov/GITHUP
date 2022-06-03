const IconEl = document.getElementById('icon')
const SearchEl =document.querySelector('.search')

IconEl.addEventListener('click', () => {
    if (SearchEl.classList.contains('active')) {
        SearchEl.classList.remove('active')
    } else {
        SearchEl.classList.add('active')
    }
})