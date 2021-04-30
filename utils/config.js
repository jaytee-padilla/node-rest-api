const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	port: process.env.PORT || 500,
	host: process.env.HOST,
	user: process.env.USERDB,
	password: process.env.PASSWORD,
	database: process.env.DATABASE
};