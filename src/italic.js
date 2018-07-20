//斜体
const position = require('../src/position.js')
const elements = require('../src/elements.js')
module.exports = function(coordinate) {
	this.useCss()
	this.click('.ico-italic')
	let italic
	elements.call(this, {
		col: coordinate.col,
		row: coordinate.row,
		endCol: coordinate.endCol,
		endRow: coordinate.endRow
	}, function(posi) {
		let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
			';"][style*="left: ' + posi.left + ';"] .cell-content'
		this.getCssProperty(posiSelector, 'font-style', function(ret) {
			italic = ret.value
			console.log(italic)
			if (ret.status == 0) {
				if (italic == 'normal') {
					this.assert.cssProperty(posiSelector, 'font-style', 'normal')
					console.log('取消设置斜体成功')
				} else {
					this.assert.cssProperty(posiSelector, 'font-style', 'italic')
					console.log('设置斜体成功')
				}
			} else {
				console.log('对象不存在')
			}
		})
	})
}