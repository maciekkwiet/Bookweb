require('dotenv').config();

import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as http from 'http';

const app = express();
const router = require('./routes/index');

const server = http.createServer(app);
const port = process.env.PORT || '3000';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.disable('x-powered-by');

app.use('/api', router);

app.set('port', port);

server.listen(port);

console.log('Server listening on port ' + port);

app.use((err: any, req: any, res: any, next: any) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

app.get('/', (request, response) => {
    response.json({ info: 'Teraz tylko robić :P' });
});

//register and login routes
app.use('/auth', require('./routes/jwtAuth'));

module.exports = app;
