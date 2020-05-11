//Here i made one function with return just one string and merge with chalk to customize and export to "app.js".

const chalk = require('chalk');
const getNotes = function() {
	return  `Hello ${chalk.blue('Horld')}`;
};

module.exports = getNotes;
