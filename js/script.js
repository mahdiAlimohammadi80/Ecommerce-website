
// show && hide mega menu

const productMenu = document.querySelector('.menu-item.product-item');
const productSubMenu = document.querySelector('.navbar .product-item .sub-menu');

productMenu.addEventListener('click',(e)=>{
    e.preventDefault();
    productSubMenu.classList.toggle('active');
})

//---------------------------------------------------------------

// fix navbar on top on scroll

const navbar = document.querySelector('.navbar');
const logoImage = document.querySelector('.logo img');

window.addEventListener('scroll',()=>{
    if(window.scrollY > 150 && document.body.clientWidth > 1200){
        logoImage.src = 'image/logo-active.png';
       return navbar.classList.add('active');
    }
    navbar.classList.remove('active');
    logoImage.src = 'image/1.png';
})