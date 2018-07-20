const Toindex = require('../src/Toindex.js')
module.exports = function(coordinate, fn = function() {}, unit = true) {
	if (coordinate.endCol == null || coordinate.endRow == null) {
		coordinate.endCol = coordinate.col
		coordinate.endRow = coordinate.row
	}
	coordinate.col = Toindex(coordinate.col)
	coordinate.endCol = Toindex(coordinate.endCol)
	let selectorEndCol = '.edit-panel .col-group .col:nth-child(' + coordinate.endCol + ')'
	this.getCssProperty(selectorEndCol, 'left', function(ret) {
		right = ret.value
		right = parseInt(right) - 1
		if (unit) {
			right = right + 'px'
		}
	})
	let selectorEndRow = '.edit-panel .row-group .row:nth-child(' +
		coordinate.endRow + ')'
	this.getCssProperty(selectorEndRow, 'top', function(ret) {
		bottom = ret.value
		bottom = parseInt(bottom) - 1
		if (unit) {
			bottom = bottom + 'px'
		}
	})
	let selectorRow = '.edit-panel .row-group .row:nth-child(' +
		coordinate.row + ')'
	this.getCssProperty(selectorRow, 'top', function(ret) {
		top = ret.value
		top = parseInt(top) - 1
		if (unit) {
			top = top + 'px'
		}
	})
	let selectorCol = '.edit-panel .col-group .col:nth-child(' +
		coordinate.col + ')'
	this.getCssProperty(selectorCol, 'left', function(ret) {
		left = ret.value
		left = parseInt(left) - 1
		if (unit) {
			left = left + 'px'
		}
		fn.call(this, {
			top,
			left,
			right,
			bottom
		})
	})
}