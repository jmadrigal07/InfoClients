import { gql } from 'apollo-server-express';

const typeDefs = gql`
    scalar JSON
    type Query {
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
        createdAt: String
        updatedAt: String
        city: String
        state: String
        country: String
        visits: JSON
    }
    input Customer {
        name: String!
        address: String!
        credit_limit: Float!
        available_credit: Float!
        visits_percentage: Float!
        cityId: Int
        createdAt: String
        updatedAt: String
    }
`;

export default typeDefs;