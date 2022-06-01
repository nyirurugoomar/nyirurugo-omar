let hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
let mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
let menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
let header =document.querySelector('.header.container');


hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;
    if (scroll_position>590){
        header.style.backgroundColor ='#29323c';
    }else{
        header.style.backgroundColor ='transparent';
    }
})

menu_item.forEach((item) =>{
    item.addEventListener('click', () =>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active'); 
    })
})