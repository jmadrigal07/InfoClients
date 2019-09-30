import { gql } from 'apollo-server-express';

const resolvers = {
    Query: {
        hello: () => 'Hello world!'
    }
};

export default resolvers;