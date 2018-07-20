const Toindex = require('../src/Toindex.js')	
module.exports = function(coordinate, fn = function() {}) {
	let top
	let left
	coordinate.col = Toindex(coordinate.col)
	console.log(coordinate.col)
	let selectorRow = '.edit-panel .row-group .row:nth-child(' +
		coordinate.row + ')'
	let selectorCol = '.edit-panel .col-group .col:nth-child(' +
		coordinate.col + ')'
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