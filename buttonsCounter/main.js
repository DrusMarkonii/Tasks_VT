const buttons = document.querySelectorAll('.btn');
const button = document.querySelector('.btn');


function counterClicks() {
	let counterButton = 0;

	this.innerHTML = +this.innerHTML + 1;
	counterButton = this.innerHTML;

	return counterButton;
};





buttons.forEach(button => button.addEventListener('click', counterClicks));


