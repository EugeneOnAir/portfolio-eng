'use strict';
let burger = document.querySelector('.header-burger');
let burgerMenu = document.querySelector('.header-menu');

burger.addEventListener('click', function(){
		burger.classList.toggle('active');
		burgerMenu.classList.toggle('active'); 
		document.body.classList.toggle('lock');
	});

const burgerLinks = document.querySelectorAll('.header-link');
burgerLinks.forEach(burgerLink => {burgerLink.addEventListener('click', function(){
		burger.classList.remove('active');
		burgerMenu.classList.remove('active'); 
		document.body.classList.remove('lock');
	});
})	 

let galleryGrid = document.querySelector('.gallery-grid');
let btnBack = document.querySelector('.button-back'); 
let btnForward = document.querySelector('.button-forward'); 
let allPhoto = galleryGrid.querySelectorAll('.photo');
let allGallery = galleryGrid.querySelectorAll('.gallery-item');

var arrPhoto = [];
for(var i = allGallery.length; i--; arrPhoto.unshift(allGallery[i]));


btnForward.addEventListener('click', function(event){
	arrPhoto.forEach((photo, index) => {
		photo.classList.remove(`gallery-item${index}`);
	});//удаляю класс с порядковым номером, использую значения индекса
	arrPhoto.unshift(arrPhoto.pop());//смещаю массив, добавляя в начало крайний элемент
	arrPhoto.forEach((photo, index) => {
		photo.classList.add(`gallery-item${index}`);
	});//добавляю класс с порядковым номером, использую значения индекса 
});

btnBack.addEventListener('click', function(event){
	arrPhoto.forEach((photo, index) => {
		photo.classList.remove(`gallery-item${index}`);
	});//удаляю класс с порядковым номером, использую значения индекса
	arrPhoto.push(arrPhoto.shift()); //смещаю массив, добавляя в конец нулевой элемент
	arrPhoto.forEach((photo, index) => {
		photo.classList.add(`gallery-item${index}`);
	});//добавляю класс с порядковым номером, использую значения индекса 
});

