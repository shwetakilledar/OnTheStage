const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

app.listen(3000, () => {
	console.log('app listening on port 3000');
});

app.use(express.static(path.resolve(__dirname, './client/build')));

app.post('/api/savePerformance', (req, res) => {
	res.status(200).send({ message: 'successfully saved the date' });
});
