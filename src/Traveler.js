class Traveler {
	constructor(travelerInfo) {
		this.id = travelerInfo.id
		this.name = travelerInfo.name
		this.type = travelerInfo.type
		this.trips = []
		this.destinations = []
	}
}

export default Traveler

// id: 1,
// name: "Ham Leadbeater",
// travelerType: "relaxer"
// },