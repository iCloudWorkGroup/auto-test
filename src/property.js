const Toindex = require('../src/Toindex.js')
const position = require('../src/position.js')
module.exports = function(coordinate, fn) {
	let top
	let left
	let endTop
	let endLeft
	let height
	let width
	let col = coordinate.col
	let endCol = coordinate.endCol
	coordinate.col = Toindex(coordinate.col)
	coordinate.endCol = Toindex(coordinate.endCol)
	coordinate.endRow = coordinate.endRow + 1
	coordinate.endCol = coordinate.endCol + 1
	let selectorRow = '.edit-panel .row-group .row:nth-child(' +
		coordinate.row + ')'
	let selectorCol = '.edit-panel .col-group .col:nth-child(' +
		coordinate.col + ')'
	let selectorEndRow = '.edit-panel .row-group .row:nth-child(' +
		coordinate.endRow + ')'
	let selectorEndCol = '.edit-panel .col-group .col:nth-child(' +
		coordinate.endCol + ')'
	this.getCssProperty(selectorRow, 'top', function(ret) {
		top = ret.value
		top = parseInt(top) - 1
	
		this.getCssProperty(selectorEndRow, 'top', function(ret) {
			endTop = ret.value
			endTop = parseInt(endTop) - 2
			
			this.getCssProperty(selectorEndCol, 'left', function(ret) {
				endLeft = ret.value
				endLeft = parseInt(endLeft) - 2
				
				this.getCssProperty(selectorCol, 'left', function(ret) {
					left = ret.value
					left = parseInt(left) - 1
				
					height = endTop - top
					width = endLeft - left
					height = height + 'px'
					width = width + 'px'
					fn.call(this, {
						height,
						width
					})
				})

			})
		})
	})
}