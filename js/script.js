
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

//---------------------------------------------------------------

// hero section animations

window.addEventListener('load', ()=>{

    const animatedButton = document.querySelector('.shop-btn');
    const heroTitle = document.querySelector('.hero-section .details h2');
    const heroText = document.querySelector('.hero-section .details p');
    const heroImage = document.querySelector('.hero-section .image');

    animatedButton.style.animation = 'fadeLeft 1s linear 1.2s';
    animatedButton.addEventListener('animationend', function() {
        animatedButton.style.opacity = 1;
        animatedButton.style.right = 0;
    });

    heroTitle.style.animation = 'fadeTop 1s linear .2s';
    heroTitle.addEventListener('animationend',()=>{
        heroTitle.style.opacity = 1;
        heroTitle.style.right = 0;
    })

    heroText.style.animation = 'fadeTop 1s linear .3s';
    heroText.addEventListener('animationend',()=>{
        heroText.style.opacity = .8;
        heroText.style.right = 0;
    })

    heroImage.style.animation = 'zoomBottom 1s linear .1s';
    heroImage.addEventListener('animationend',()=>{
        heroImage.style.opacity = 1;
        heroImage.style.top = 0;
    })

})