import chai from 'chai';
import Traveler from '../src/Traveler'
import Destination from '../src/Destination'
import Trip from '../src/Trip'
const expect = chai.expect;

describe('See if the tests are running', function () {
	let travelerInfo = {id: 30, name: "Kearney Hadland", travelerType: "thrill-seeker"}
	let tripRepositoryInfo = [{id: 36, userID: 30, destinationID: 26, travelers: 5, date: "2019/10/20", duration: 17, status: "approved", suggestedActivities: [ ]}, {id: 92, userID: 30, destinationID: 4, travelers: 2, date: "2020/12/24", duration: 16, status: "approved", suggestedActivities: [ ]},{id: 152, userID: 30, destinationID: 40, travelers: 1, date: "2020/03/26", duration: 16, status: "approved", suggestedActivities: [ ]}]
	let destinationInfo = [{id: 26, destination: "London, England",estimatedLodgingCostPerDay: 100, estimatedFlightCostPerPerson: 1000, image: "https://images.unsplash.com/photo-1549471156-52ee71691122?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", alt: "city with bridge under night sky"}, {id: 4, destination: "Cartagena, Colombia",estimatedLodgingCostPerDay: 65, estimatedFlightCostPerPerson: 350, image: "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80", alt: "boats at a dock during the day time"}, {id: 40, destination: "La Isla Tortuga, Costa Rica", estimatedLodgingCostPerDay: 600, estimatedFlightCostPerPerson: 80, image: "https://images.unsplash.com/photo-1536708880921-03a9306ec47d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80", alt: "trees near seashore"}]
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