//下划线
const position = require('../src/position.js')
const elements = require('../src/elements.js')
module.exports = function(coordinate) {
	this.useCss()
	this.click('.ico-underline')
	let underline
	elements.call(this, {
		col: coordinate.col,
		row: coordinate.row,
		endCol: coordinate.endCol,
		endRow: coordinate.endRow
	}, function(posi) {
		let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
			';"][style*="left: ' + posi.left + ';"] .cell-content'
		this.getCssProperty(posiSelector, 'text-decoration', function(ret) {
			underline = ret.value
			if (ret.status == 0) {
				if (underline == 'none') {
					this.assert.cssProperty(posiSelector, 'text-decoration', 'none')
					console.log('取消设置下滑线成功')
				} else {
					this.assert.cssProperty(posiSelector, 'text-decoration', 'underline')
					console.log('设置下划线成功')
				}
			} else {
				console.log('对象不存在')
			}
		})
	})
}