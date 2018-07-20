//字体背景（红色）
const position = require('../src/position.js')
const elements = require('../src/elements.js')
module.exports = function(coordinate) {
	this.useXpath()
	this.pause(1000)
	this.click('//*[@id="homeTool"]/li[3]/span[1]/div[1]/div[1]/div[2]/span[6]') //点击工具栏字体颜色
	this.pause(1000)
	this.click('//*[@id="homeTool"]/li[3]/span[1]/div[1]/div[5]/div/div/div[2]/table/tbody/tr[1]/td[4]') //选择红色
	this.pause(1000)
	console.log('设置字体颜色')
	this.useCss()
	elements.call(this, {
		col: coordinate.col,
		row: coordinate.row,
		endCol: coordinate.endCol,
		endRow: coordinate.endRow
	}, function(posi) {
		let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
			';"][style*="left: ' + posi.left + ';"] .cell-content';
		this.getCssProperty(posiSelector, 'color', function(ret) {
			if (ret.status == 0) {
				this.assert.cssProperty(posiSelector, 'color', 'rgba(192, 80, 77, 1)')
				console.log('字体颜色设置成功')
			} else {
				console.log('对象不存在')
			}
		})
	})
}