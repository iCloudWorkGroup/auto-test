const position = require('../src/position.js')
const elements = require('../src/elements.js')
module.exports = function(coordinate) {
	this.useCss()
	this.click('.ico-weight')
	elements.call(this, {
		col: coordinate.col,
		row: coordinate.row,
		endCol: coordinate.endCol,
		endRow: coordinate.endRow
	}, function(posi) {
		let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
			';"][style*="left: ' + posi.left + ';"] .cell-content'
		this.getCssProperty(posiSelector, 'font-weight', function(ret) {
			fontwidth = ret.value
			if (ret.status == 0) {
				if (fontwidth == 'normal') {
					this.assert.cssProperty(posiSelector, 'font-weight', 'normal')
					console.log('设置取消加粗')
				} else {
					this.assert.cssProperty(posiSelector, 'font-weight', 'bold')
					console.log('设置加粗')
				}
			} else {
				console.log('对象不存在')
			}
		})

	})
}