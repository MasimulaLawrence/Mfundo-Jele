const navToggle = document.querySelector('.nav-toggle');

const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click',()=>{
	document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	})
});



// model
const modalBtn = document.querySelector('.modalButton');


modalBtn.addEventListener('click',()=>{
	document.body.classList.toggle('open');
});

// // get the modal

// let modal = document.getElementById('simpleModal');

// // get the modal open button

// let modalBtn = document.getElementById('modalBtn1');

// //get the modal clsoe button

// let closeBtn = document.getElementsByClassName('closeBtn')[0];

// //Listen To Open Button

// modalBtn.addEventListener('click',openModal);

// // Open Modal Function

// function openModal(){
//     modal.style.display = 'block';
// }

// //Listen To Close Button

// closeBtn.addEventListener('click', closeModal);

// // Close Modal Function

// function closeModal(){
//     modal.style.display = 'none';
// }

// // Listen To Outside Click

// window.addEventListener('click', OutsideClick);

// // Outside Click Function

// function OutsideClick(e){
//     if(e.target == modal){
//         modal.style.display = 'none';
//     }
// }
