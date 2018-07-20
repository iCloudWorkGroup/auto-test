//const browser = require('../src/demo1.js')
const position = require('../src/position.js')
const elements = require('../src/elements.js')
const Toindex = require('../src/Toindex.js')
module.exports = function(coordinate, fn) {
	if (coordinate.endCol == null || coordinate.endRow == null) {
		coordinate.endCol = coordinate.col
		coordinate.endRow = coordinate.row
	}
	coordinate.col = Toindex(coordinate.col)
	coordinate.endCol = Toindex(coordinate.endCol)
	for (let i = coordinate.row; i < coordinate.endRow + 1; i++) {
		for (let j = coordinate.col; j < coordinate.endCol + 1; j++) {
			let top
			let left
			let selectorRow = '.edit-panel .row-group .row:nth-child(' +
				i + ')'
			let selectorCol = '.edit-panel .col-group .col:nth-child(' +
				j + ')'
			this.getCssProperty(selectorRow, 'top', function(ret) {
				top = ret.value
				top = parseInt(top) - 1
				top = top + 'px'
			})
			this.getCssProperty(selectorCol, 'left', function(ret) {
				left = ret.value
				left = parseInt(left) - 1
				left = left + 'px'
				fn.call(this, {
					top,
					left
				})
			})
		}
	}
}