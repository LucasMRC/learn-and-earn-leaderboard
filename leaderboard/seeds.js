const mongoose = require('mongoose');
const Week = require('./models/week.js');

async function seedDB(num) {
	await Week.remove({});
	for (let i = 0; i < num; i++) {
		data.forEach(seed => {
			Week.create(seed);
		});
	}
	console.log(num * 3 + ' weeks created!');
}

module.exports = seedDB;

const data = [
	{
		dateRange: 'April 22 - April 28',
		date: 1,
		winners: [
			{
				name: 'Louli',
				place: '1st'
			},
			{
				name: 'Devendra',
				place: '2nd'
			},
			{
				name: 'Lucas',
				place: '3rd'
			}
		]
	},
	{
		dateRange: 'April 29 - May 5',
		date: 2,
		winners: [
			{
				name: 'Devendra',
				place: '1st'
			},
			{
				name: 'Lucas',
				place: '2nd'
			},
			{
				name: 'Louli',
				place: '3rd'
			}
		]
	},
	{
		dateRange: 'June 6 - June 12',
		date: 3,
		winners: [
			{
				name: 'Louli',
				place: '1st'
			},
			{
				name: 'Lucas',
				place: '2nd'
			},
			{
				name: 'Devendra',
				place: '3rd'
			}
		]
	}
];

async function seedDB(num) {
	await Week.remove({});
	for (let i = 0; i < num; i++) {
		data.forEach(seed => {
			Week.create(seed);
		});
	}
	console.log(num * 3 + ' weeks created!');
}

module.exports = seedDB;
