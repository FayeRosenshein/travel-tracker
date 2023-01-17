import dayjs from "dayjs"

class Traveler {
	constructor(travelerInfo) {
		this.id = travelerInfo.id
		this.name = travelerInfo.name
		this.type = travelerInfo.travelerType
		this.trips = []
	}
	calculateTotalCost() {
		const today = dayjs(Date.now())
		const thisYearsTrips = this.trips.filter(trip => {
			return dayjs(trip.date).year() === today && trip.status === 'approved'
		})
		const reducedTrips = thisYearsTrips.reduce((acc, trip) => {
			acc += trip.destination.estimatedLodgingCostPerDay * trip.duration
			acc += trip.destination.estimatedFlightCostPerPerson * trip.travelers
			return acc
		}, 0)
		const total = +(reducedTrips * 1.1).toFixed(2)
		return total
	}
}

export default Traveler