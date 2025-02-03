let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick =()=>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
};

window.onscroll =()=>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}


// cart

// Add these to your script.js
const cartTab = document.querySelector('.cart-tab');
const cartButton = document.querySelector('.cart-box-button');
const closeButton = document.querySelector('.close');

// Toggle cart when cart icon is clicked
cartButton.addEventListener('click', () => {
    cartTab.classList.toggle('active');
});

// Close cart when close button is clicked
closeButton.addEventListener('click', () => {
    cartTab.classList.remove('active');
});

// Close cart when clicking outside
document.addEventListener('click', (e) => {
    if (!cartTab.contains(e.target) && !cartButton.contains(e.target)) {
        cartTab.classList.remove('active');
    }
});