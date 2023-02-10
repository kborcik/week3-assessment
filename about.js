console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	// let formSubmit = document.createElement('p')
	// formSubmit.textContent = 'You submitted your information. Team Rocket is blasting Off again to get that information to the right person!!'
	// document.querySelector('form').appendChild(formSubmit)
	// console.log('form submit');  
	//I accidentally did this first then realized i was supposed to do an an alert
	alert( `Thanks! Team Rocket is blasting Off again to get that information to the right person. Meanwhile, go catch 'em all`)
	
}

const usercompliment = () => {
alert (`'MEOWTH! THATS RIGHT! You're an elite trainer! And we're excited to have you!'`)

}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img')

img.addEventListener('mouseover', usercompliment)