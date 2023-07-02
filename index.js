let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header__list');
let menuItem = document.querySelectorAll('.header__item');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


menuItem.forEach (function(item) {
  item.addEventListener('click',function(){
          menuBtn.classList.toggle('active');
          menu.classList.toggle('active');
  })
})