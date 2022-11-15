const express = require('express');
const dotenv = require('dotenv');
const routes = require('./router');
const cors = require('cors');
const dbConnection = require('./config/connection');

dotenv.config();
dbConnection();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(port, () => console.log(`App is running in http://localhost:${port}`));
