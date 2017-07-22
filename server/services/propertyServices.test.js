//Unit Test is going along with services
var propertyServices = require('./propertyServices');
var expect = require('chai').expect;

describe('Property Services', () => {
  it('should be able to list all available properties', () => {
      propertyServices.getPropertyList()
      .then(properties => {
        expect(properties).to.be.a('array');
        expect(properties).to.have.lengthOf.above(1);
      })
  });

//   it('should be able add a property', () => {
//   });

//   it('should be able add remove a property', () => {
//   });

});