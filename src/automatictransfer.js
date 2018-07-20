//自动换行
const position = require('../src/position.js')
const elements = require('../src/elements.js')
module.exports = function(coordinate) {
	this.useXpath()
	this.click('//*[@id="homeTool"]/li[6]/span[1]/div[1]/span/div/div/span[2]')
	this.useCss()
	elements.call(this, {
		col: coordinate.col,
		row: coordinate.row,
		endCol: coordinate.endCol,
		endRow: coordinate.endRow
	}, function(posi) {
		let whitespace
		let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
			';"][style*="left: ' + posi.left + ';"] .cell-content';
		this.getCssProperty(posiSelector, 'white-space', function(ret) {
			whitespace = ret.value
			if (ret.status == 0) {
				if (whitespace == 'pre-line') {
					this.assert.cssProperty(posiSelector, 'white-space', 'pre-line')
					console.log('默认未换行，自动换行成功')
				} else {
					this.assert.cssProperty(posiSelector, 'white-space', 'pre')
					console.log('默认换行，取消自动换行')
				}
			} else {
				console.log('对象不存在')
			}
		})
	})
}