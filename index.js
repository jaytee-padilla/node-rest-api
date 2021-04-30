// PACKAGES
const server = require('./api/server');

// MODULES
const { port } = require('./utils/config');

server.listen(port, () => {
	console.log(`=== Server up and running at port ${port} ===`);
});