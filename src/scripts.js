// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


const usernameField = document.getElementById('username')
const passwordField = document.getElementById('password')
const logInForm = document.getElementById('logInForm')

logInForm.addEventListener('submit', (event) => {
	login(event)
})

let currentUserId

function login(event) {
	event.preventDefault()
	const username = usernameField.value 
	const password = passwordField.value
	if (password !== 'travel') {
		console.log('Incorrect password')
		return
	}
	currentUserId = usernameToUserId(username)
	console.log(currentUserId)
}

function usernameToUserId(username) {
	if (!username.startsWith('traveler')) {
		console.log(`${username} doesn't start with traveler`)
		return -1
	}
	const usernameId = username.replace('traveler', '')
	const id = parseInt(usernameId)
	if (isNaN(id)) {
		console.log('traveler id is not a number')
		return -1
	}
	return id
}