const { Sequelize } = require('sequelize');
module.exports = new Sequelize('blog_tutorial', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
});
