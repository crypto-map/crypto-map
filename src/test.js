const fs = require('fs');

const dbPath = '../database';

const tables = fs.readdirSync(dbPath);

tables.forEach(table => {

	console.log('table:', table);

	const rows = fs.readdirSync(`${dbPath}/${table}`)
	rows.forEach(row => {
		console.log('row:', row);
		const fileContent = fs.readFileSync(`${dbPath}/${table}/${row}`, 'utf8');
		console.log('>>> ', fileContent);
	});

});

console.log('end')

//db.tables;