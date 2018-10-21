import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLString,
    GraphQLList
  } from 'graphql/type';

/*
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
*/
  const carItem = new GraphQLObjectType({
    name: 'CarItem',
    description: 'Car Item',
    fields: () => ({
        id : {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The id of the car item',
        },
        price : {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The price of the car',
        },
        mainImage : {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The image of the car',
        },
        agency : {
            type: new GraphQLNonNull(agency),
            description: 'The dealer of the car',
        },
    })
  });

  const agency = new GraphQLObjectType({
    name: 'Agency',
    description: 'Dealer of the car',
    fields: () => ({
        logo : {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The id of the car item',
        },
        brandingColors : {
            type: new GraphQLNonNull(brandingColors),
            description: 'The price of the car',
        },
    })
  });

  const brandingColors = new GraphQLObjectType({
    name: 'BrandingColor',
    description: 'Color hex number of the brand',
    fields: () => ({
        primary : {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The primary color of the brand',
        },
    })
  });

  const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: {
        results: {
          type: [carItem],
          resolve: function() {
            return '';
          }
        },
        savedResults: {
          type: [carItem],
          resolve: () => {
            return '';
          }
        }
      }
    }),
  
    // mutation
    mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: {
        addCarItem: {
          type: userType,
          args: {
            name: {
              name: 'name',
              type: GraphQLString
            }
          },
          resolve: () =>  {
            return '';
          }
        }
      }
    })
  });


  export default schema;