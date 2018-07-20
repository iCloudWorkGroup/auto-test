const position = require('../src/position.js')
module.exports = function(coordinate, fn = function(){}) {
	position.call(this, {
		col: coordinate.col,
		row: coordinate.row
	}, function(posi) {
		let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
			';"][style*="left: ' + posi.left + ';"] .cell-content'
		posi.left = parseInt(posi.left) + 3
		posi.top = parseInt(posi.top) + 3
		this.moveToElement('.edit-panel', posi.left, posi.top, function(argument) {
			this.mouseButtonClick(0).pause(2000)
		})
		fn.call(this)
	})
}