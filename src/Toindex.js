const position = require('../src/position.js')
module.exports = function(colName) {
	let index = 0
	let chars = colName.toUpperCase().split('')
	for (let i = 0, len = chars.length; i < len; i++) {
		index += (chars[i].charCodeAt(0) -
				'A'.charCodeAt(0) + 1) *
			Math.pow(26, len - i - 1);
	}
	return index;
}