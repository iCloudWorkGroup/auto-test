const Toindex = require('../src/Toindex.js')
module.exports = function(coordinate, fn) {
	let width
	let height
	let h = 0
	let w = 0
	let f = 0
	let col = (Toindex.call(this, coordinate.col))
	let endCol = (Toindex.call(this, coordinate.endCol))
	for (let i = coordinate.row; i < coordinate.endRow + 1; i++) {
		let selectorRow = '.edit-panel .row-group .row:nth-child(' +
			i + ')'
		for (let j = col; j < endCol + 1; j++) {
			let selectorCol = '.edit-panel .col-group .col:nth-child(' +
				j + ')'
			this.getCssProperty(selectorCol, 'width', function(ret) {
				width = ret.value
				w = parseInt(width) + w
			})
		}
		this.getCssProperty(selectorRow, 'height', function(ret) {
			height = ret.value
			h = parseInt(height) + h
			f = f + 1
			fn.call(this, {
				w,
				h,
				f,
				col,
				endCol
			})
		})

	}

}