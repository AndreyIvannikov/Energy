var menu = document.querySelector('.page-header__wrapper');
var toggle = document.querySelector('.main-nav__toggle');

toggle.addEventListener('click',function(){
    if(menu.classList.contains("main-nav--closed")){
        menu.classList.remove('main-nav--closed')
        menu.classList.add('main-nav--open')    
    }else{
        menu.classList.remove('main-nav--open')
        menu.classList.add('main-nav--closed')
    }
})
 console.log(toggle)