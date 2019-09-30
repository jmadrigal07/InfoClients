import express from 'express';
import bodyParser from "body-parser";
import http from 'http';
import config from "./config";
import server from './controllers/gql/graphql';

const app = express();
server.applyMiddleware({ app });

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/', (req, res) => {
  res.send('All right');
});

http.createServer(app).listen(config.configs.web.port, () => {
  console.log(`Server started at ${config.configs.web.url}:${config.configs.web.port}`);
  console.log(`GraphQL is Running on ${config.configs.web.url}:${config.configs.web.port}${server.graphqlPath}`)
});