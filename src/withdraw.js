//撤回
const position = require('../src/position.js')
module.exports = function() {
	position.call(this, {
		row: 2,
		col: 2
	}, function(posi) {
		let posiSelector = '.content-list .item[style*="top: ' + posi.top +
			';"][style*="left: ' + posi.left + ';"] .bg'
		this.useCss()
		this.click(posiSelector)
		this.pause(1000)
		this.useXpath()
		this.dblClick('//*[@id="tableContainer"]/tbody/tr[2]/td[3]/div/div/div[3]/div/div[2]') //双击单元格
		this.pause(1000)
		this.useCss()
		this.clearValue('.edit-frame')
		this.setValue('.edit-frame', '123') //设设置新值（123）
		this.useXpath()
		this.click('//*[@id="contentFontContainer"]/span[1]/div[2]')
		this.useCss()
		this.assert.containsText(posiSelector, '123') //判断输入值是否成功
		this.pause(1000)
		this.click(posiSelector) //点击单元格
		this.useXpath()
		this.dblClick('//*[@id="tableContainer"]/tbody/tr[2]/td[3]/div/div/div[3]/div/div[2]') //双击单元格
		this.useCss()
		this.clearValue('.edit-frame')
		this.setValue('.edit-frame', 'abc') //设置新值（abc）
		this.useXpath()
		this.click('//*[@id="contentFontContainer"]/span[1]/div[2]')
		this.pause(1000)
		this.useCss()
		this.assert.containsText(posiSelector, 'abc') //判断输入值是否成功
		this.useXpath()
		this.click('//*[@id="undoredoContainer"]/span[1]/div[1]/span/div[2]/span/div') //点击撤回按钮
		this.useCss()
		this.pause(1000)
		this.assert.containsText(posiSelector, '123') //判断操作是否被撤回
	})
}