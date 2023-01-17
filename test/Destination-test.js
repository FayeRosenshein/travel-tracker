import chai from 'chai';
import destinations from './Destination-test-Data';
import Trip from '../src/Trip';
import Destination from '../src/Destination';
const expect = chai.expect;

describe('Destination-test', function () {
	let destination
	beforeEach(() => {
		destination = new Destination(destinations[0])
	})
	it('should have a parameter to take in a destinationInfo object and instantiate a new Destination', function () {
    expect(destination).to.be.an.instanceOf(Destination)
  })
	it('should hold on to the destination properties from the info file', function () {
    expect(destination.id).to.equal(destinations[0].id)
    expect(destination.name).to.equal(destinations[0].destination)
    expect(destination.estimatedLodgingCostPerDay).to.equal(destinations[0].estimatedLodgingCostPerDay)
		expect(destination.estimatedFlightCostPerPerson).to.equal(destinations[0].estimatedFlightCostPerPerson)
		expect(destination.image).to.equal(destinations[0].image)
		expect(destination.alt).to.equal(destinations[0].alt)
  })})