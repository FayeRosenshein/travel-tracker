import Traveler from "./Traveler"
import Trip from "./Trip"
import Destination from "./Destination"

class Repository {
	constructor(travelerData, tripsData, destinationData) {
		this.travelerData = travelerData
		this.tripsData = tripsData
		this.destinationsData = destinationData
		this.travelers =[]
		this.trips = []
		this.destinations = []
		this.traveler
	}
	initialize() {
		this.destinationsData.forEach(destination => {
			let newDestination = new Destination(destination)
			this.destinations.push(newDestination)
		})
		this.tripsData.forEach(trip => {
			let newTrip = new Trip(trip)
			newTrip.destination = this.findDestination(newTrip.destinationID)
			this.trips.push(newTrip)
		})
		this.travelerData.forEach(traveler => {
			let newTraveler = new Traveler(traveler)
			newTraveler.trips = this.findTripsByTravelerId(newTraveler.id)
			this.travelers.push(newTraveler)
		})
	}
	findTripsByTravelerId(id) {
		const filterTrips = this.trips.filter(trip => {
			return trip.userID === id
		})
		return filterTrips
	}
	findDestination(id) {
		return this.destinations.find(destination => {
			return destination.id === id
		})
	}
}

export default Repository
