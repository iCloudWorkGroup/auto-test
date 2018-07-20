//删除列
const position = require('../src/position.js')
module.exports = function() {
		this.useXpath()
		this.pause(1000)
		this.click('//*[@id="homeTool"]/li[8]/span[1]/div[1]/span[2]/div')
		this.pause(1000)
		this.click('//*[@id="homeTool"]/li[8]/span[1]/div[1]/div[2]/div/ul/li[2]')
		this.pause(1000)
		console.log('删除列操作')
}