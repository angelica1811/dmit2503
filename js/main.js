// Find and assign your constant.
const hamburgerIcon = document.querySelector('.menu-icon');

// Create a click event for it that toggles a CSS class. 
hamburgerIcon.addEventListener('click', () => {
	document.querySelector('nav').classList.toggle('active-nav')
});