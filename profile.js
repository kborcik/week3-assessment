// <button id="color">My Favorite Color</button>
// <button id="place">My Favorite Place</button>
// <button id="ritual">My Favorite Ritual</button>

// function whichButton () {
//    let button = document.querySelector('button')
// }

function buttonClickColor (evt) {
	
	
	alert( `My favorite color of light is white. It's a blend of all the colors. A mix and an inclusion. Are you surpised? ;) But I do really like forest green at the moment too.`)
	
}

function buttonClickPlace (evt) {
	
	
	alert( `I have always loved Las Vegas. It is the magic capital of the world. And I have always had an interest in Australia too.` )
}

function buttonClickRitual (evt) {
	
	
	alert( 'When I am feeling stressed and anxious and "in too deep" I enjoy going to the movies by myself, going dancing, and just all around "just goofin. new boot goofin" ')
	
}

//let buttonselection = document.querySelector('button');

let buttonselection1= document.querySelector('#color')
let buttonselection2= document.querySelector('#place')
let buttonselection3= document.querySelector('#ritual')

buttonselection1.addEventListener('click', buttonClickColor)
buttonselection2.addEventListener('click', buttonClickPlace)
buttonselection3.addEventListener('click', buttonClickRitual)

