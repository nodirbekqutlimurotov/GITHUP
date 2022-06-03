const hrefEl = document.getElementById('href');
const recentPostsEl = document.querySelector('.recent__posts');
const iconBurgerEl = document.querySelector('.icon__burger');
const navItemEl = document.querySelector('.nav__item');


hrefEl.addEventListener('click' , () => {
    recentPostsEl.style = ` 
    overflow:auto;
    max-height:fit-content;
    `;
    recentPostsEl.children[1].children[1].style = `
    .box:not(:nth-child(2)) {
        display: block;
    }
    `

    console.log(recentPostsEl.children[1].children[1].style);
})

iconBurgerEl.addEventListener('click' , () => {

})