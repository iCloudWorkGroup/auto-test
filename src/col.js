const Toindex = require('../src/Toindex.js')
module.exports = function(coordinate, fn) {
	coordinate.col = (Toindex.call(this, coordinate.col))
	let selectorRow = '.edit-panel .row-group .row:nth-child(' +
		coordinate.row + ')'
	let selectorCol = '.edit-panel .col-group .col:nth-child(' +
		coordinate.col + ')'
	let number
	let left
	number = coordinate.col
	this.useCss()
	this.getCssProperty(selectorCol, 'left', function(ret) {
		left = ret.value
		fn.call(this,{
			left,
			number
		})
	})
}