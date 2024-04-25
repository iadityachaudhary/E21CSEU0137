/** @format */

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

const WINDOW_SIZE = 10;
let storedNumbers = [];

const fetchNumbers = async (type) => {
	let url;
	switch (type) {
		case 'p':
			url = 'http://20.244.56.144/test/primes';
			break;
		case 'f':
			url = 'http://20.244.56.144/test/fibo';
			break;
		case 'e':
			url = 'http://20.244.56.144/test/even';
			break;
		case 'r':
			url = 'http://20.244.56.144/test/rand';
			break;
		default:
			return [];
	}

	try {
		const response = await axios.get(url);
		return response.data.numbers || [];
	} catch (error) {
		console.error('Error fetching numbers:', error.message);
		return [];
	}
};

const calculateAverage = (numbers) => {
	const sum = numbers.reduce((acc, curr) => acc + curr, 0);
	return sum / numbers.length;
};

app.get('/numbers/:numberid', async (req, res) => {
	const { numberid } = req.params;
	if (!['p', 'f', 'e', 'r'].includes(numberid)) {
		return res.status(400).json({ error: 'Invalid number ID' });
	}

	const prevWindow = [...storedNumbers];
	const fetchedNumbers = await fetchNumbers(numberid);
	storedNumbers.push(...fetchedNumbers);
	storedNumbers = storedNumbers.slice(-WINDOW_SIZE);
	const currWindow = [...storedNumbers];

	const average = calculateAverage(currWindow);

	res.json({
		windowPrevState: prevWindow,
		windowCurrState: currWindow,
		numbers: fetchedNumbers,
		avg: average.toFixed(2),
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
