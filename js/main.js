var menu = document.querySelector('.main-nav');
var toggle = document.querySelector('.main-nav__toggle');
var header = document.querySelector('.page-header__wrapper')
toggle.addEventListener('click',function(){
    if(header.classList.contains("main-nav--closed")){
        header.classList.remove('main-nav--closed')
        header.classList.add('main-nav--open')
    }else{
        header.classList.remove('main-nav--open')
        header.classList.add('main-nav--closed')
    }
})