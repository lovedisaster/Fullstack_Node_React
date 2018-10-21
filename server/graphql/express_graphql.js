const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const propertyServices = require('../services/propertyServices');

//Schema defines type of posible attributes from root.
const schema = buildSchema(`
  type Query {
      results: [CarItem]
      savedResults: [CarItem]
  }
  type Mutation {
    addCarItem(id : String) : [CarItem]
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


