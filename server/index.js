const express = require('express');
const sequelize = require('./db');
const cors = require('cors');

const router = require('./router/index');
const Blog = require('./models/models');

const app = express();
app.use(cors());
const PORT = 3000;

app.use(express.json());
app.use('/api', router);

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Started listening on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
