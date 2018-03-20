const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const propertyServices = require('../services/propertyServices');

const schema = buildSchema(`
  type Query {
      results: [CarItem]
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

var root = {
  results: () => 
    propertyServices
    .getPropertyList()
    .then(properties => properties).catch(e => {})
};

// Create an express server and a GraphQL endpoint

module.exports = express_graphql({ 
    schema,
    rootValue:root,
    graphiql:true
});


