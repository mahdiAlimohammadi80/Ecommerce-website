
// show && hide mega menu

const productMenu = document.querySelector('.menu-item.product-item');
const productSubMenu = document.querySelector('.navbar .product-item .sub-menu');

productMenu.addEventListener('click',(e)=>{
    e.preventDefault();
    productSubMenu.classList.toggle('active');
})

//---------------------------------------------------------------
