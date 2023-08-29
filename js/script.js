
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

//-----------------------------------------------------------

// draggable lists

const list = document.querySelectorAll('.clothes-list');
const arrows = document.querySelectorAll('.title-arrow .arrow');

list.forEach((box) => {
    let isDragging = false;

    box.addEventListener('mousedown', () => {
        isDragging = true;
        box.classList.add('active')
    });

    box.addEventListener('mousemove', (e) => {
        if (isDragging) {
            box.scrollLeft -= e.movementX;
        }
    });

    box.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            box.classList.remove('active');
        }
    });

    arrows.forEach((arrow)=>{
        arrow.addEventListener('click',()=>{
            if(arrow.classList.contains('left')){
                box.scrollLeft -= 300;
            }else{
                box.scrollLeft += 300;
            }
        })
    })
});

//---------------------------------------------------------------

// banner card time left

const timeBoxes = document.querySelectorAll('.banner-card .time-box');

    let expirationTimes = [
        new Date('2023-09-20T19:38:20').getTime(),
        new Date('2023-09-25T17:45:00').getTime(),
    ];
    timeBoxes.forEach((box, index) => {
        let expirationTime = expirationTimes[index];
        let bannerBtn = document.querySelectorAll('.banner-btn');

        let int = setInterval(() => {
            let currentTime = new Date().getTime();
            let timeDifference = expirationTime - currentTime;

            if (timeDifference <= 0) {
                clearInterval(int);
                bannerBtn[index].style.display = 'none';
                box.textContent = "تخفیف منقضی شده است.";
            }

            let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            let dayElement = box.querySelector('.day-text');
            let hourElement = box.querySelector('.hour-text');
            let minuteElement = box.querySelector('.minute-text');
            let secondElement = box.querySelector('.second-text');

            dayElement.textContent = days < 10 ? `0${days}` : days;
            hourElement.textContent = hours < 10 ? `0${hours}` : hours;
            minuteElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
            secondElement.textContent = seconds < 10 ? `0${seconds}` : seconds;

        },1000)
    })


//----------------------------------------------------------------

// filterable category 

const filterCards = document.querySelectorAll('.filter-category .card');
const filterBtn = document.querySelectorAll('.filter-btn');

filterBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        filterCards.forEach((card)=>{
            card.style.display = 'block'
            if(btn.dataset.cat == 'no-filter'){
                return
            }
            else{
                filterCards.forEach((card)=>{
                    if(card.dataset.cat != btn.dataset.cat){
                        card.style.display = 'none';
                    }
                })
            } 
        })
    })
})

//-----------------------------------------------------------------------

// show cart

const cartIconBox = document.querySelector('.cart');
const cartBox = document.querySelector('.cart-box');
const closeIcon = document.querySelector('.cart-box .close-icon');

cartIconBox.addEventListener('click',()=>{
    cartBox.classList.toggle('active');
})

closeIcon.addEventListener('click',()=>{
    cartBox.classList.remove('active');
})