import express from 'express';
import bodyParser from "body-parser";
import http from 'http';
import config from "./config";

const app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/', (req, res) => {
  res.send('All right');
});

http.createServer(app).listen(config.configs.web.port, () => {
  console.log(`Server started at ${config.configs.web.url}:${config.configs.web.port}`);
});