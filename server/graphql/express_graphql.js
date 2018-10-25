const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const propertyServices = require('../services/propertyServices');
const donationServices = require('../services/donationServices');

//Schema defines type of posible attributes from root.
const schema = buildSchema(`
  type Query {
      results: [CarItem]
      savedResults: [CarItem]
  }
  type Mutation {
    addCarItem(id : String) : [CarItem]
    donate(amount: Int) : CurrentDonation
  }

  type CurrentDonation {
    total : Int
  }

  type BrandingColor {
      primary: String
  }
  type Agency {
    brandingColors: BrandingColor
    logo: String
  }
  type CarItem {
      price: String
      agency:Agency
      id: String
      mainImage: String
  }
`);

//Root is implementations of schema which adapts to promise. 
var root = {
  donate: (amount) => donationServices
    .makeDonation(amount.amount)
    .then(total => total),
  addCarItem: (id) => 
    propertyServices
    .addProperty(id.id)
    .then(savedProperties => {
        return savedProperties
    })
    .catch(e => {
      console.log("e");
      return [];
  }),
  savedResults: () => 
  propertyServices
  .getSavedPropertyList()
  .then(properties => {
      return properties;
  }).catch(e => {}),
  results: () => 
    propertyServices
    .getPropertyList()
    .then(properties => {
        return properties;
    }).catch(e => {})
};

// Create an express server and a GraphQL endpoint
module.exports = express_graphql({ 
    schema,
    rootValue:root,
    graphiql:true
});


