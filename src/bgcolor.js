//背景颜色（红色）
const position = require('../src/position.js')
const elements = require('../src/elements.js')
module.exports = function(coordinate) {
	this.useXpath()
	this.click('//*[@id="homeTool"]/li[3]/span[1]/div[1]/div[1]/div[2]/span[5]') //点击工具栏背景颜色
	this.pause(1000)
	this.click('//*[@id="homeTool"]/li[3]/span[1]/div[1]/div[4]/div/div/div[2]/table/tbody/tr[4]/td[10]') //选择红色
	this.useCss()
	elements.call(this, {
		col: coordinate.col,
		row: coordinate.row,
		endCol: coordinate.endCol,
		endRow: coordinate.endRow
	}, function(posi) {
		let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
			';"][style*="left: ' + posi.left + ';"] .cell-content';
		this.getCssProperty(posiSelector, 'background-color', function(ret) {
			if (ret.status == 0) {
				this.assert.cssProperty(posiSelector, 'background-color', 'rgba(250, 192, 143, 1)') //判断背景颜色
				console.log('背景颜色设置成功')
			} else {
				console.log('对象不存在')
			}
		})
	})
}