import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schemas';
import resolvers from './resolvers';

export default new ApolloServer({ typeDefs, resolvers });