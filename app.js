// Load app using express
const express = require('express');
const app = express();
const PORT = 3666;

app.get('/', (req, res) => {
	res.status(200).json('Server is up and running!');
});

app.get('/buffs', (req, res) => {
	res.status(200).json([
		{
			name: "Advantage",
			explanation: "Guaranteed Critical Hit on next attack"
		},
		{
			name: "Backup Plan",
			explanation: "Recover 10% Health Per turn. Revive with 80% Health and 30% TM when defeated"
		}
	])
});

app.listen(PORT, () => {
	console.log(`Server is up and listening on port ${PORT}!`);
});