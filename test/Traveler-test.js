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
		const repo = new Repository(travelerData, tripRepositoryInfo, destinations)
		repo.initialize()
		traveler = repo.travelers[2]
	})
	it('should have a parameter to take in a travelerInfo object and instantiate a new Traveler', function () {
		expect(traveler).to.be.an.instanceOf(Traveler)
	})
	it('should hold on to the traveler properties from the info file', function () {
		expect(traveler.id).to.equal(travelerData[2].id)
		expect(traveler.name).to.equal(travelerData[2].name)
		expect(traveler.type).to.equal(travelerData[2].travelerType)
	})
	it('should calculate cost for the year', function () {
		expect(traveler.calculateTotalCost()).to.equal(0)
	})
});