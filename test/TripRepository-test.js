import chai from 'chai';
import Traveler from '../src/Traveler'
import travelerData from './Traveler-test-data';
import Repository from '../src/Repository'
import tripRepositoryInfo from './Trip-test-data'
import destinations from './Destination-test-Data';
const expect = chai.expect;


describe('TripRepository-test', function () {
	let traveler
	let tripRepo
	beforeEach(() => {
		traveler = new Traveler(travelerData[2])
		tripRepo = new Repository(travelerData, tripRepositoryInfo, destinations)
		tripRepo.initialize()
	});
	it('should create a new traveler with trips data', function () {
		expect(tripRepo.travelers[2]).to.deep.equal({
			id: 30,
			name: 'Kearney Hadland',
			type: 'thrill-seeker',
			trips: [
				{
					id: 36,
					userID: 30,
					destinationID: 26,
					travelers: 5,
					date: '2019/10/20',
					duration: 17,
					status: 'approved',
					suggestedActivities: [],
					destination: {
						id: 26,
						name: 'London, England',
						estimatedLodgingCostPerDay: 100,
						estimatedFlightCostPerPerson: 1000,
						image: 'https://images.unsplash.com/photo-1549471156-52ee71691122?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
						alt: 'city with bridge under night sky'
					}
				},
				{
					id: 92,
					userID: 30,
					destinationID: 4,
					travelers: 2,
					date: '2020/12/24',
					duration: 16,
					status: 'approved',
					suggestedActivities: [],
					destination: {
						id: 4,
						name: 'Cartagena, Colombia',
						estimatedLodgingCostPerDay: 65,
						estimatedFlightCostPerPerson: 350,
						image: 'https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
						alt: 'boats at a dock during the day time'
					}
				},
				{
					id: 152,
					userID: 30,
					destinationID: 40,
					travelers: 1,
					date: '2020/03/26',
					duration: 16,
					status: 'approved',
					suggestedActivities: [],
					destination: {
						id: 40,
						name: 'La Isla Tortuga, Costa Rica',
						estimatedLodgingCostPerDay: 600,
						estimatedFlightCostPerPerson: 80,
						image: 'https://images.unsplash.com/photo-1536708880921-03a9306ec47d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80',
						alt: 'trees near seashore'
					}
				}
			]
		})
	})
	it('should return a destination by id', function () {
		expect(tripRepo.findDestination(4)).to.deep.equal({
			id: 4,
			name: 'Cartagena, Colombia',
			estimatedLodgingCostPerDay: 65,
			estimatedFlightCostPerPerson: 350,
			image: 'https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
			alt: 'boats at a dock during the day time'
		})
	})
	it('should find the traveler by the ID given', function () {
		expect(tripRepo.findTravelerById(30)).to.deep.equal(tripRepo.travelers[2])
	})
})