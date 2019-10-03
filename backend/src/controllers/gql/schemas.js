import { gql } from 'apollo-server-express';

const typeDefs = gql`
    scalar JSON
    scalar Date

    type Query {
        customers: [CustomerInfo]
        cities: [City]
        customer(id: Int!): CustomerInfo!
    }
    type Mutation {
        createCustomer(input: Customer!): CustomerInfo!
    }

    type CustomerInfo {
        id: Int
        name: String
        address: String
        credit_limit: Float
        available_credit: Float
        visits_percentage: Float
        createdAt: Date
        updatedAt: Date
        city: String
        state: String
        country: String
        visits: [JSON]
    }
    type City {
        id: Int
        name: String
    }
    input Customer {
        name: String!
        address: String!
        credit_limit: Float!
        available_credit: Float!
        visits_percentage: Float!
        cityId: Int
        createdAt: Date
        updatedAt: Date
    }
`;

export default typeDefs;