const express = require('express');
const bodyParser = require('body-parser');
const audit = require('express-requests-logger');
const apiRoutes = require('./src/endpoints/api');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
