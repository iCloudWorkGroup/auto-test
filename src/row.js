const Toindex = require('../src/Toindex.js')
module.exports = function(coordinate, fn) {
	coordinate.col = (Toindex.call(this, coordinate.col))
	let selectorRow = '.edit-panel .row-group .row:nth-child(' +
		coordinate.row + ')'
	let selectorCol = '.edit-panel .col-group .col:nth-child(' +
		coordinate.col + ')'
	let number
	let top
	number = coordinate.row
	this.useCss()
	this.getCssProperty(selectorRow, 'top', function(ret) {
		top = ret.value
		fn.call(this, {
			top,
			number
		})
	})
}