const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const beerRoutes = require('./api/routes/beer');

const app = express();
app.use(cors());
const port = process.env.DEV_NODE_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    return res.status(200).json({});
  }
  next();
});

app.use('/', beerRoutes);

app.listen(port, () => {
  console.log(`Our server is listening ${port}.`);
});
