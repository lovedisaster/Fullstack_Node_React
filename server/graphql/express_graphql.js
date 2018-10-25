
// const { buildSchema } = require('graphql');
// const propertyServices = require('../services/propertyServices');
// const donationServices = require('../services/donationServices');

const {makeExecutableSchema} = require('graphql-tools');
const { resolvers } = require('./resolvers');

//Schema defines type of posible attributes from root.
const typeDefs = `
  type Channel {
    id: ID!                # "!" denotes a required field
    name: String
    messages: [Message]!
  }
  
  type Message {
    id: ID!
    text: String
  }

  
  # This type specifies the entry points into our API
  type Query {
    channels: [Channel]    # "[]" means this is a list of channels
    channel(id: ID!): Channel
  }

  type Mutation {
    donate(amount: Int) : CurrentDonation
  }

  type Subscription {
    donationAdded(amount: Int!): CurrentDonation
  }

  type CurrentDonation {
    total : Int
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
module.exports = { schema };


//Root is implementations of schema which adapts to promise. 
// var root = {
//   donate: (amount) => donationServices
//     .makeDonation(amount.amount)
//     .then(total => total),
//   addCarItem: (id) => 
//     propertyServices
//     .addProperty(id.id)
//     .then(savedProperties => {
//         return savedProperties
//     })
//     .catch(e => {
//       console.log("e");
//       return [];
//   }),
//   savedResults: () => 
//   propertyServices
//   .getSavedPropertyList()
//   .then(properties => {
//       return properties;
//   }).catch(e => {}),
//   results: () => 
//     propertyServices
//     .getPropertyList()
//     .then(properties => {
//         return properties;
//     }).catch(e => {})
// };

// // Create an express server and a GraphQL endpoint
// module.exports = express_graphql({ 
//     schema,
//     rootValue:root,
//     graphiql:true
// });


