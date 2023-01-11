import Traveler from "./Traveler"

class TripRepository {
	constructor(travelerData, tripsData) {
		this.travelerData = travelerData
		this.trips = tripsData
		this.travelers =[]
		this.traveler
	}
	initialize() {
		this.travelerData.forEach(traveler => {
			let newTraveler = new Traveler(traveler)
			this.travelers.push(newTraveler)
		})
		this.trips.forEach(trip => {
			if (!this.findUser(trip.userID)) {
				return;
			} else {
				let traveler = this.findUser(trip.userID);
				traveler.trips.push(trip);
			}
		})
	}
	findUser(id) {
		if (!id){
			return false
		}
		let travelerIdArray = this.travelers.map(traveler => {
			return traveler.id;
			})
			if (travelerIdArray.includes(id)) {
			return this.travelers.find(traveler => {
					return traveler.id === id});
			} else {
				return false;
			}
	};
}

export default TripRepository
