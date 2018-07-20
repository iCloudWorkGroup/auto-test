//插入行
const position = require('../src/position.js')
const row = require('../src/row.js')
module.exports = function(coordinate) {
		row.call(this, {
			row: coordinate.row,
			col: coordinate.col
		}, function(posi) {
			let posiSelector1 = '.edit-panel .row-group .row:nth-child(' +
				posi.number + ')'
			let posiSelector2 = '.edit-panel .row-group .row:nth-child(36)'
			this.useCss()
			this.assert.cssProperty(posiSelector1, 'top', posi.top)
			this.useXpath()
			this.click('//*[@id="homeTool"]/li[8]/span[1]/div[1]/span[1]/div')
			this.pause(2000)
			this.click('//*[@id="homeTool"]/li[8]/span[1]/div[1]/div[1]/div/ul/li[1]')
			console.log('插入行')
			this.useCss()
			this.pause(2000)
			//this.assert.cssProperty(posiSelector2, 'top', '938px')
		})
}