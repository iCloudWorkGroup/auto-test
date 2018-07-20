//取消隐藏v(1:行，2：列)
const position = require('../src/position.js')
module.exports = function(a) {
	this.useXpath()
	this.click('/html/body/div/div[1]/div[1]/ul/li[2]')
	this.useCss()
		if (a === 1) {
			this.useXpath()
			this.click('//*[@id="reviewTool"]/li[2]/span[1]/div[1]/span[2]') //点击工具栏取消隐藏按钮	
			this.pause(1000)
			this.click('//*[@id="reviewTool"]/li[2]/span[1]/div[1]/div[2]/div/ul/li[1]') //取消隐藏行
			this.pause(1000)
		} else {
			this.useXpath()
			this.click('//*[@id="reviewTool"]/li[2]/span[1]/div[1]/span[2]') //点击工具栏取消隐藏按钮	
			this.pause(1000)
			this.click('//*[@id="reviewTool"]/li[2]/span[1]/div[1]/div[2]/div/ul/li[2]') //取消隐藏行
			this.pause(1000)
		}
	this.useXpath()
	this.click('/html/body/div/div[1]/div[1]/ul/li[1]')
	this.useCss()
}