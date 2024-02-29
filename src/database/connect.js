const sequelize = require('./sequelize');

const connectSequelize = sequelize
  .sync()
  .then(() => {
    console.log('[NODENEW]: Connection to DB has extablished');
  })
  .catch((err) => {
    console.error('[NODENEW]: Unable to connect to the database:', err);
  });

module.exports = connectSequelize;
