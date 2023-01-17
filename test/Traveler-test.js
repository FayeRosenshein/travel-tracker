import chai from 'chai';
import Traveler from '../src/Traveler'
import travelerData from './Traveler-test-data'
import destinations from './Destination-test-Data'
import tripRepositoryInfo from './Trip-test-data'
import Repository from '../src/Repository';
const expect = chai.expect;

describe('Traveler-test', function () {
	let traveler
	beforeEach(() => {
		const repo = new Repository(travelerData,tripRepositoryInfo,destinations)
		repo.initialize()
		traveler = repo.travelers[2]
	});
	it('should have a parameter to take in a travelerInfo object and instantiate a new Traveler', function () {
    expect(traveler).to.be.an.instanceOf(Traveler)
  });
	it('should hold on to the traveler properties from the info file', function () {
    expect(traveler.id).to.equal(travelerData[2].id)
    expect(traveler.name).to.equal(travelerData[2].name)
    expect(traveler.type).to.equal(travelerData[2].travelerType)
  });
	// it('should be able to sort trips data by date', function () {
  //   traveler.sortTrips()
  //   expect(traveler.trips).to.deep.equal([{id: 36, userID: 30, destinationID: 26, travelers: 5, date: '2019/10/20', duration: 17, status: 'approved', suggestedActivities: []}, { id: 152, userID: 30, destinationID: 40, travelers: 1, date: '2020/03/26', duration: 16, status: 'approved', suggestedActivities: []}, {id: 92, userID: 30, destinationID: 4, travelers: 2, date: '2020/12/24', duration: 16, status: 'approved', suggestedActivities: []}])
	// })
	it('should calculate cost for the year', function () {
		expect(traveler.calculateTotalCost()).to.equal(12562) 
	})
});