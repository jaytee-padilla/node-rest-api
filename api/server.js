// PACKAGES
const server = require('express')();
const cors = require('cors');

// enabling cors for all requests by using cors middleware
server.use(cors());
// Enable pre-flight &
// allows access from any origin (any domain)
server.options('*', cors());

// root query
server.get('/', (req, res) =>
  res.status(200).json({
    status: 200,
    message: 'SWGoH Status Effects API is alive and kicking!',
  }),
);

// ROUTES
const buffsRouter = require('../routes/statusEffects');
server.use('/buffs', buffsRouter);

module.exports = server;