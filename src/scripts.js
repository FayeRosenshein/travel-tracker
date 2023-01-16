// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import dayjs from 'dayjs';
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import Repository from './Repository';

let travelersPromise = fetchData()
let destinationsPromise = fetchDestinationData()
let tripsPromise = fetchTripData()

const welcomeBanner = document.getElementById('welcomeBanner')
const usernameField = document.getElementById('username')
const passwordField = document.getElementById('password')
const logInForm = document.getElementById('logInForm')
const logInSection = document.getElementById('logInSection')
const dashboardSection = document.getElementById('dashboardSection')
const travelInputSection = document.getElementById('travelInputSection')
const upcomingTripSection = document.getElementById('upcomingTripSection')
const pastTripSection = document.getElementById('pastTripSection')
const pendingTripSection = document.getElementById('pendingTripSection')
const totalValue = document.getElementById('totalValue')
const dashboardButton = document.getElementById('dashboardButton')
const newTripButon = document.getElementById('newTripButon')
const upcomingTripButon = document.getElementById('upcomingTripButon')
const pastTripsButton = document.getElementById('pastTripsButton')
const pendingTripsButton = document.getElementById('pendingTripsButton')
const upcomingTripInfo = document.getElementById('upcomingTripInfo')
const pastTripInfo = document.getElementById('pastTripInfo')
const pendingTripInfo = document.getElementById('pendingTripInfo')
const dataEntryForm = document.getElementById('dataEntryForm')
const dataEntryFormButton = document.getElementById('dataEntryFormButton')

window.addEventListener('load', function () {
	resolvePromises()
})
logInForm.addEventListener('submit', (event) => {
	login(event)
})
dashboardButton.addEventListener('click', showDashboard)
newTripButon.addEventListener('click', showBookATrip)
upcomingTripButon.addEventListener('click', showUpcomingTrips)
pastTripsButton.addEventListener('click', showPastTrips)
pendingTripsButton.addEventListener('click', showPendingTrips)
dataEntryForm.addEventListener('submit', (event) => {
	submitFormData(event)
})

let repo
let currentTraveler
let currentTravelerId
let destinations
let trips

function login(event) {
	event.preventDefault()
	const username = usernameField.value
	const password = passwordField.value
	if (password !== 'travel') {
		console.log('Incorrect password')
		return
	}
	currentTravelerId = usernameToUserId(username)
	showDashboard()
	console.log(currentTravelerId)
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
function resolvePromises() {
	Promise.all([travelersPromise, tripsPromise, destinationsPromise])
		.then((values) => {
			console.log(values)
			parseData(values)
		})
}
function parseData(values) {
	repo = new Repository(values[0], values[1], values[2])
	repo.initialize()
	currentTraveler = repo.travelers[37]
}
function showDashboard() {
	totalValue.innerText = `$${currentTraveler.calculateTotalCost()}`
	welcomeBanner.classList.remove('hidden')
	dashboardSection.classList.remove('hidden')
	travelInputSection.classList.add('hidden')
	upcomingTripSection.classList.add('hidden')
	pastTripSection.classList.add('hidden')
	pendingTripSection.classList.add('hidden')
	dashboardButton.classList.add('hidden')
	logInSection.classList.add('hidden')
}
function showBookATrip() {
	welcomeBanner.classList.remove('hidden')
	dashboardButton.classList.remove('hidden')
	travelInputSection.classList.remove('hidden')
	pastTripSection.classList.add('hidden')
	upcomingTripSection.classList.add('hidden')
	pendingTripSection.classList.add('hidden')
	dashboardSection.classList.add('hidden')
	logInSection.classList.add('hidden')
}
function showUpcomingTrips() {
	displayUpcomingTrips()
	welcomeBanner.classList.remove('hidden')
	dashboardButton.classList.remove('hidden')
	upcomingTripSection.classList.remove('hidden')
	pastTripSection.classList.add('hidden')
	pendingTripSection.classList.add('hidden')
	travelInputSection.classList.add('hidden')
	dashboardSection.classList.add('hidden')
	logInSection.classList.add('hidden')
}
function showPastTrips() {
	displayPastTrips()
	welcomeBanner.classList.remove('hidden')
	dashboardButton.classList.remove('hidden')
	pastTripSection.classList.remove('hidden')
	upcomingTripSection.classList.add('hidden')
	pendingTripSection.classList.add('hidden')
	travelInputSection.classList.add('hidden')
	dashboardSection.classList.add('hidden')
	logInSection.classList.add('hidden')
}
function showPendingTrips() {
	displayPendingTrips()
	welcomeBanner.classList.remove('hidden')
	dashboardButton.classList.remove('hidden')
	pendingTripSection.classList.remove('hidden')
	pastTripSection.classList.add('hidden')
	upcomingTripSection.classList.add('hidden')
	travelInputSection.classList.add('hidden')
	dashboardSection.classList.add('hidden')
	logInSection.classList.add('hidden')
}
function fetchData() {
	const userURL = `http://localhost:3001/api/v1/travelers`;
	return fetch(userURL)
		.then((response) => {
			if (response.ok) {
				return response.json()
			}
			throw Promise.reject(response)
		})
		.then((data) => {
			console.log(data)
			return data.travelers
		})
		.catch((response) => {
			console.log('Something went wrong: ', response);
		});
}
function fetchDestinationData() {
	const URL = `http://localhost:3001/api/v1/destinations`;
	return fetch(URL)
		.then((response) => {
			if (response.ok) {
				return response.json()
			}
			throw Promise.reject(response)
		})
		.then((data) => {
			destinations = data.destinations
			console.log(destinations)
			return destinations
		})
		.catch((response) => {
			console.log('Something went wrong: ', response);
		});
}
function fetchTripData() {
	const URL = `http://localhost:3001/api/v1/trips`;
	return fetch(URL)
		.then((response) => {
			if (response.ok) {
				return response.json()
			}
			throw Promise.reject(response)
		})
		.then((data) => {
			trips = data.trips
			return trips
		})
		.catch((response) => {
			console.log('Something went wrong: ', response);
		});
}
let postTrip = (postData) => {
	console.log(postData)
	fetch('http://localhost:3001/api/v1/trips', {
		method: 'POST',
		body: JSON.stringify(postData),
		headers: { 'Content-Type': 'application/json' }
	})
		.then(response => {
			if (!response.ok) {
				throw new Error("Data failed to post");
			} else {
				return response.json()
			}
		})
		.then(data => console.log('DATA', data))
		.catch(error => console.log(error.message))
}

function displayUpcomingTrips() {
	console.log(currentTraveler.trips)
	const upcomingTrips = currentTraveler.trips.filter(trip => dayjs(trip.date) >= dayjs(Date.now()) && trip.status === 'approved')
	upcomingTripInfo.innerHTML = ``
	upcomingTrips.forEach(trip => upcomingTripInfo.innerHTML += `<article class="trip-info">
	<p class="upcoming-trip destination">DESTINATION: ${trip.destination.name}</p>
	<P class="upcoming-trip date">STARTING DATE ${trip.date}</P>
	<P class="upcoming-trip number">NUMBER OF PEOPLE: ${trip.travelers}</P>
	</article`)
}
function displayPastTrips() {
	console.log(currentTraveler.trips)
	const pastTrips = currentTraveler.trips.filter(trip => dayjs(trip.date) < dayjs(Date.now()) && trip.status === 'approved')
	pastTripInfo.innerHTML = ``
	pastTrips.forEach(trip => pastTripInfo.innerHTML += `<article class="trip-info">
	<p class="destination">DESTINATION: ${trip.destination.name}</p>
	<P class="date">STARTING DATE ${trip.date}</P>
	<P class="number">NUMBER OF PEOPLE: ${trip.travelers}</P>
	</article`)
}
function displayPendingTrips() {
	console.log(currentTraveler.trips)
	const pendingTrips = currentTraveler.trips.filter(trip => trip.status !== 'approved')
	pendingTripInfo.innerHTML = ``
	pendingTrips.forEach(trip => pendingTripInfo.innerHTML += `<article class="trip-info">
	<p class="destination">DESTINATION: ${trip.destination.name}</p>
	<P class="date">STARTING DATE ${trip.date}</P>
	<P class="number">NUMBER OF PEOPLE: ${trip.travelers}</P>
	</article`)
}
function submitFormData(event) {
	event.preventDefault()
	const formData = new FormData(dataEntryForm)
	const values = [...formData.entries()]
	console.log(values)
	let postData = {}
	postData.id = 2004
	postData.userID = +currentTraveler.id
	postData.status = 'pending'
	postData.suggestedActivities = []
	values.forEach(value => {
		let itemName = value[0]
		let itemValue = value[1]
		switch (itemName) {
			case 'start_date':
				postData.date = itemValue.replaceAll('-', '/')
				break
			case 'duration':
				postData.duration = +itemValue
				break
			case 'number_of_people':
				postData.travelers = +itemValue
				break
			case 'destination_drop_down':
				postData.destinationID = +itemValue
				break
		}
	})
	console.log(postData)
	// let result = await postTrip(postData)
	// console.log(results)
	postTrip(postData)

}

	// {id: <number>, userID: <number>, destinationID: <number>, travelers: <number>, date: <string 'YYYY/MM/DD'>, duration: <number>, status: <string 'approved' or 'pending'>, suggestedActivities: <array of strings>}