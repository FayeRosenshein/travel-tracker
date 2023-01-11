import chai from 'chai';
import Traveler from '../src/Traveler'
const expect = chai.expect;

describe('See if the tests are running', function () {
	let travelerInfo = {id: 30, name: "Kearney Hadland", travelerType: "thrill-seeker"}
	let tripInfo = [{id: 36, userID: 30, destinationID: 26, travelers: 5, date: "2019/10/20", duration: 17, status: "approved", suggestedActivities: [ ]}, {id: 92, userID: 30, destinationID: 4, travelers: 2, date: "2020/12/24", duration: 16, status: "approved", suggestedActivities: [ ]},{id: 152, userID: 30, destinationID: 40, travelers: 1, date: "2020/03/26", duration: 16, status: "approved", suggestedActivities: [ ]}]
	let traveler
	beforeEach(() => {
		traveler = new Traveler(travelerInfo)
	});
	it('should have a parameter to take in a travelerInfo object and instantiate a new Traveler', function () {
    expect(traveler).to.be.an.instanceOf(Traveler);
  });
	it('should hold on to the traveler properties from the info file', function () {
    expect(traveler.id).to.equal(travelerInfo.id);
    expect(traveler.name).to.equal(travelerInfo.name);
    expect(traveler.type).to.equal(travelerInfo.type);
  });
});