//合并单元格(F5-G6)
const position = require('../src/position.js')
const property = require('../src/property.js')
const elements = require('../src/elements.js')
const mergecellfuzu = require('../src/mergecellfuzu.js')
const Toindex = require('../src/Toindex.js')
module.exports = function(coordinate, fn = function() {}) {
	mergecellfuzu.call(this, {
		col: coordinate.col,
		row: coordinate.row,
		endCol: coordinate.endCol,
		endRow: coordinate.endRow
	}, function(posi) {
		let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
			';"][style*="left: ' + posi.left + ';"]';
		property.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			this.useXpath()
			this.pause(1000)
			this.click('//*[@id="homeTool"]/li[5]/span[1]/div[1]/span/div/div') //点击合并按钮
			console.log('合并单元格')
			this.pause(2000) 
			this.useCss()
			this.assert.cssProperty(posiSelector, 'width', posi.width) //判断拆分后的宽度是否正确
			this.assert.cssProperty(posiSelector, 'height', posi.height) //判断拆分后的高度是否正确
		})
	})
	fn.call(this)
}