//取消冻结
const position = require('../src/position.js')
module.exports = function() {
	this.useXpath()
	this.click('/html/body/div/div[1]/div[1]/ul/li[2]')
	this.useCss()

	this.useXpath()
	this.click('//*[@id="reviewTool"]/li[1]/span[1]/div[1]/div[1]/div')
	this.pause(2000)
	this.click('//*[@id="reviewTool"]/li[1]/span[1]/div[1]/div[2]/div/ul/li[1]')
	console.log('设置取消冻结窗口')
	this.pause(2000)
	this.useCss()
	// this.assert.visible(' .frozen-right-border .frozen-bottom-border .cells-container')
	// this.assert.cssProperty('.container .frozen-right-border .frozen-bottom-border', 'width', posi.left)
	// this.assert.cssProperty('.container .frozen-right-border .frozen-bottom-border', 'height', posi.top)

	this.useXpath()
	this.click('/html/body/div/div[1]/div[1]/ul/li[1]')
	this.useCss()
}