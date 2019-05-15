const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const donationServices = require('../services/donationServices');

//Schema defines type of posible attributes from root.
const schema = buildSchema(`
  type Query {
      donationTotal: CurrentDonation
  }
  type Mutation {
    donate(amount: Int) : CurrentDonation
  }
  type CurrentDonation {
    total : Int
  }
`);

//Root is implementations of schema which adapts to promise. 
var root = {
  donate: (amount) => donationServices
    .makeDonation(amount.amount)
    .then(total => total),
  donationTotal: () => donationServices
    .getCurrentDonation()
    .then(total => total)
};

// Create an express server and a GraphQL endpoint
module.exports = express_graphql({ 
    schema,
    rootValue:root,
    graphiql:true
});


