const express = require('express');
const mysql = require('mysql');

const { port, user, password, host, database } = require('./utils/config');

const app = express();

app.get('/', (req, res) => {
	res.status(200).json('Server is up and running!');
});

app.get('/buffs', (req, res) => {
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

app.get('/buffs/:id', (req, res) => {
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
		}

		if (!rows[0]) {
			res.status(404).json({errorMessage: `Buff id = ${req.params.id} does not exist`});
			console.log(`Buff id = ${req.params.id} does not exist`);
		}

		res.status(200).json(rows[0]);
	});
});

app.listen(port, () => {
	console.log(`Server is up and listening on port ${port}!`);
});