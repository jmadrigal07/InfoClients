import GraphQLJSON from 'graphql-type-json'
import customer from '../customer';
import cities from '../cities';

const theCustomer = new customer();
const theCities = new cities();

const resolvers = {
    Query: {
        customer: theCustomer.customer,
        customers: theCustomer.customers,
        cities: theCities.cities
    },
    Mutation: {
        createCustomer: theCustomer.addCustomer
    },
    JSON: GraphQLJSON
};

export default resolvers;