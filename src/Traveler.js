import dayjs from "dayjs"

class Traveler {
	constructor(travelerInfo) {
		this.id = travelerInfo.id
		this.name = travelerInfo.name
		this.type = travelerInfo.travelerType
		this.trips = []
	}
	sortTrips() {
    return this.trips.sort((day1,day2) => {
        return (day1.date).localeCompare(day2.date);
    });
  }
	calculateTotalCost() {
		const today = dayjs(Date.now())
		const thisYearsTrips = this.trips.filter(trip => {
			//This is hard coded right now, but should change when finally deployed
			//should be today.year()
			return dayjs(trip.date).year() === 2020 && trip.status === 'approved'
		})
		//perDayCost
		//duration
		//perPersonFlightCost
		//numberOfTravelers
		//10% agency fee
		const reducedTrips = thisYearsTrips.reduce((acc, trip) => {
			//lodging cost
			acc += trip.destination.estimatedLodgingCostPerDay*trip.duration
			//flight cost
			acc += trip.destination.estimatedFlightCostPerPerson*trip.travelers
			return acc
		}, 0)
		const total = +(reducedTrips*1.1).toFixed(2)
		return total
	}
}

export default Traveler

// id: 1,
// name: "Ham Leadbeater",
// travelerType: "relaxer"
// },