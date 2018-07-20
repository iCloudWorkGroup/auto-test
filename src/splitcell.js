//拆分单元格(F5-G6)
const position = require('../src/position.js')
const property = require('../src/property.js')
const elements = require('../src/elements.js')
const splitcellfzu = require('../src/splitcellfzu.js')
module.exports = function(coordinate) {
	this.useXpath()
	this.click('//*[@id="homeTool"]/li[5]/span[1]/div[1]/span/div/div') //点击合并按钮
	this.useCss()
	console.log('拆分单元格')
	elements.call(this, {
		col: coordinate.col,
		row: coordinate.row,
		endCol: coordinate.endCol,
		endRow: coordinate.endRow
	}, function(posi) {
		let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
			';"][style*="left: ' + posi.left + ';"] .cell-content'
		property.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			splitcellfzu.call(this, {
				col: coordinate.col,
				row: coordinate.row,
				endCol: coordinate.endCol,
				endRow: coordinate.endRow
			}, function(endposi) {
				endposi.w = endposi.w / endposi.f
				endposi.w = endposi.w + (endposi.endCol - endposi.col)
				endposi.w = endposi.w + 'px'
				endposi.h = endposi.h + (coordinate.endRow - coordinate.row)
				endposi.h = endposi.h + 'px'
				if (posi.width == endposi.w && posi.height == endposi.h) {
					console.log('拆分验证成功success')
					console.log('总宽度：' + posi.width)
					console.log('列差宽度和：' + endposi.w)
					console.log('总高度：' + posi.height)
					console.log('行差高度和：' + endposi.h)
				} else {
					console.log('拆分验证失败fall')
					
				}
			})

		})
	})
}