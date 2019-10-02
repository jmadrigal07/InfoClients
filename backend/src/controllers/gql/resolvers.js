import GraphQLJSON from 'graphql-type-json'
import customer from '../customer';
const theCustomer = new customer();

const resolvers = {
    Query: {
        customer: theCustomer.customer
    },
    Mutation: {
        createCustomer: theCustomer.addCustomer
    },
    JSON: GraphQLJSON
};

export default resolvers;