// PACKAGES
const routes = require('express').Router();
require('dotenv').config();
const mysql = require('mysql');

// MODULES
const { host, user, password, database } = require('../utils/config');

routes.get('/', (req, res) => {
	res.status(200).json([
		{
			name: "Advantage",
			explanation: "Guaranteed critical hit on next attack"
		},
		{
			name: "Backup Plan",
			explanation: "Recover 10% health per turn. Revive with 80% health and 30% turn meter when defeated"
		}
	])
});

routes.get('/:id', (req, res) => {
	const connection = mysql.createConnection({
		host: host,
		user: user,
		password: password,
		database: database
	});

	connection.query("SELECT * FROM buffs WHERE id = ?", [req.params.id], (err, rows, fields) => {
		if (err) {
			res.status(500).json({errorMessage: err});
			console.log(err);

			return;
		}

		if (!rows[0]) {
			res.status(404).json({errorMessage: `Buff id = ${req.params.id} does not exist`});
			console.log(`Buff id = ${req.params.id} does not exist`);

			return;
		}

		res.status(200).json(rows[0]);
	});
});

module.exports = routes