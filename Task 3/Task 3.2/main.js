const buttons = document.querySelectorAll('.btn');
const button = document.querySelector('.btn');


function counterClicks() {
	 return this.innerHTML = +this.innerHTML + 1
}



buttons.forEach(button => button.addEventListener('click', counterClicks));


