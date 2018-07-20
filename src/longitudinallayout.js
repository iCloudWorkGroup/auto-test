//纵向布局(1:居上，2：居中，3：局下)
const position = require('../src/position.js')
const elements = require('../src/elements.js')
module.exports = function(coordinate) {
	this.useXpath()
	this.click('//*[@id="homeTool"]/li[4]/span[1]/div[1]/div/div[1]/span[' + coordinate.layout + ']')
	this.useCss()
	if (coordinate.layout == 1) {
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"] .cell-content'
			this.getCssProperty(posiSelector, 'text-align', function(ret) {
				if (ret.status == 0) {
					this.useCss()
					this.assert.cssProperty(posiSelector, 'vertical-align', 'top') //判断字体的格式是否是居上
					console.log('字体纵向居上成功')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else if (coordinate.layout == 2) {
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"] .cell-content'
			this.getCssProperty(posiSelector, 'text-align', function(ret) {
				if (ret.status == 0) {
					this.useCss()
					this.assert.cssProperty(posiSelector, 'vertical-align', 'middle') //判断字体的格式是否是居上
					console.log('字体纵向居中成功')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else {
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"] .cell-content'
			this.getCssProperty(posiSelector, 'text-align', function(ret) {
				if (ret.status == 0) {
					this.useCss()
					this.assert.cssProperty(posiSelector, 'vertical-align', 'bottom')
					console.log('字体纵向居下成功')
				} else {
					console.log('对象不存在')
				}
			})
		})
	}
}