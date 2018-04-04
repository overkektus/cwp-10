const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const films = require('./top250.json');

const errCreate = {code: 400, message: 'error in creating '}
const validErr = {code: 400, message: 'validating error '}
const idErr = {code: 400, message: 'Where is id?'}
const invId = {code: 400, message: 'invalid id'}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/films/readall', (req, res) => {
  films.sort((x, y) => { x.position - y.position })
  res.send(films);    
});

app.get('/api/films/read', (req, res) => {
  const searchId = req.query.id;
  res.send(films.find(film => film.id == searchId));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});