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
}

export default Traveler

// id: 1,
// name: "Ham Leadbeater",
// travelerType: "relaxer"
// },