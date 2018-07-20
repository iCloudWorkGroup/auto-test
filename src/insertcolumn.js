//插入列
const position = require('../src/position.js')
const col = require('../src/col.js')
module.exports = function(coordinate) {
	col.call(this, {
		row: coordinate.row,
		col: coordinate.col
	}, function(posi) {
		let posiSelector1 = '.edit-panel .col-group .col:nth-child(' +
			posi.number + ')'
		let posiSelector2 = '.edit-panel .col-group .col:nth-child(26)'
		this.useCss()
		this.assert.cssProperty(posiSelector1, 'left', posi.left)
		this.useXpath()
		this.click('//*[@id="homeTool"]/li[8]/span[1]/div[1]/span[1]/div')
		this.pause(2000)
		this.click('//*[@id="homeTool"]/li[8]/span[1]/div[1]/div[1]/div/ul/li[2]')
		console.log('插入列')
		this.useCss()
		this.pause(2000)
		//this.assert.cssProperty(posiSelector2, 'left', posi.left)
	})
}