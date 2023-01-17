import chai from 'chai';
import tripRepositoryInfo from './Trip-test-data'
import Trip from '../src/Trip';
const expect = chai.expect;

describe('Trip-test', function () {
	let trip
	beforeEach(() => {
		trip = new Trip(tripRepositoryInfo[35])
	})
	it('should have a parameter to take in a tripInfo object and instantiate a new Trip', function () {
    expect(trip).to.be.an.instanceOf(Trip)
  })
	it('should hold on to the trip properties from the info file', function () {
    expect(trip.id).to.equal(tripRepositoryInfo[35].id)
    expect(trip.userID).to.equal(tripRepositoryInfo[35].userID)
    expect(trip.travelers).to.equal(tripRepositoryInfo[35].travelers)
		expect(trip.date).to.equal(tripRepositoryInfo[35].date)
		expect(trip.duration).to.equal(tripRepositoryInfo[35].duration)
		expect(trip.status).to.equal(tripRepositoryInfo[35].status)
		expect(trip.suggestedActivities).to.equal(tripRepositoryInfo[35].suggestedActivities)
  })})