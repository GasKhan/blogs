const express = require('express');
const sequelize = require('./db');

const app = express();
const PORT = 3000;

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
