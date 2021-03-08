require('dotenv').config();

import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as http from 'http';

const errorMiddleware = require('./middleware/errorMiddleware');

const mountRoutes = require('./routes');

const app = express();

const server = http.createServer(app);
const port = process.env.PORT || '8080';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const publicPath = path.join(__dirname, '../', '/client', '/public');

app.use(express.static(publicPath));

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  const indexPath = path.join(publicPath, 'index.html');
  res.sendFile(indexPath);

  next();
});

app.disable('x-powered-by');

mountRoutes(app);
app.use(errorMiddleware);

app.set('port', port);

server.listen(port);

console.log('Server listening on port ' + port);

app.get('/', (request, response) => {
  response.json({ info: 'Teraz tylko robić :P' });
});

module.exports = app;
