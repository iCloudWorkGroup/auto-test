const position = require('../src/position.js')
module.exports = function(coordinate, fn = function() {}) {
	position.call(this, {
		col: coordinate.col,
		row: coordinate.row,
		endCol: coordinate.endCol,
		endRow: coordinate.endRow
	}, function(posi) {
		let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
			';"][style*="left: ' + posi.left + ';"] .cell-content'
		posi.left = parseInt(posi.left) + 3
		posi.top = parseInt(posi.top) + 3
		this.moveToElement('.edit-panel', posi.left, posi.top, function(argument) {
			this.mouseButtonDown(0).pause(2000)
		})

		posiSelector = '.cell-group .cell[style*="top: ' + posi.bottom +
			';"][style*="left: ' + posi.right + ';"] .cell-content'
		posi.right = parseInt(posi.right) + 3
		posi.bottom = parseInt(posi.bottom) + 3
		this.moveToElement('.edit-panel', posi.right, posi.bottom, function(argument) {
			this.mouseButtonUp(0)
			fn.call(this)
		})

	}, false)
}