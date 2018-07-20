const position = require('../src/position.js')
module.exports = function(a) {
	this.useXpath()
	this.dblClick('//*[@id="table"]/tbody/tr[2]/td[2]/div/div/div[4]/div/div/div[1]') //双击页面
	this.useCss()
	this.clearValue('.edit-frame') //清空输入框
	this.setValue('.edit-frame', a) //输入数据
	this.pause(1000)
	this.useXpath()
	this.click('//*[@id="homeTool"]/li[3]/span[1]/div[2]')
	this.useCss()
}