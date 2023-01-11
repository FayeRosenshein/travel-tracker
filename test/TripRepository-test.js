import chai from 'chai';
import Trip from '../src/Trip'
import Traveler from '../src/Traveler'
import travelerData from './Traveler-test-data';
import TripRepository from '../src/TripRepository'
import tripRepositoryInfo from './Trip-test-data'
const expect = chai.expect;


describe('TripRepository-test', function () {
	let traveler
	let tripRepo
	beforeEach(() => {
		traveler = new Traveler(travelerData[2])
		tripRepo = new TripRepository(travelerData, tripRepositoryInfo)
	});

	it('should be able to be given an id and return that user\'s data', function () {
		tripRepo.initialize()
		expect(tripRepo.findUser(30)).to.deep.equal({id: 30, name: 'Kearney Hadland', type: 'thrill-seeker', trips: [ {id: 36, userID: 30, destinationID: 26, travelers: 5, date: '2019/10/20', duration: 17, status: 'approved', suggestedActivities: []}, {id: 92, userID: 30, destinationID: 4, travelers: 2, date: '2020/12/24', duration: 16, status: 'approved', suggestedActivities: []}, { id: 152, userID: 30, destinationID: 40, travelers: 1, date: '2020/03/26', duration: 16, status: 'approved', suggestedActivities: []}]
		})
	})
})