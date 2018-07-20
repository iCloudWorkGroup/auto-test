//横向布局(1:居左，2：居中，3：局右)
const position = require('../src/position.js')
const elements = require('../src/elements.js')
module.exports = function(coordinate) {
	if (coordinate.layout == 1) {
		this.useXpath()
		this.click('//*[@id="homeTool"]/li[4]/span[1]/div[1]/div/div[2]/span[' + coordinate.layout + ']')
		this.useCss()
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
					this.assert.cssProperty(posiSelector, 'text-align', 'left') //判断字体的格式是否是居上
					console.log('字体横向居左成功')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else if (coordinate.layout == 2) {
		this.useXpath()
		this.click('//*[@id="homeTool"]/li[4]/span[1]/div[1]/div/div[2]/span[' + coordinate.layout + ']')
		this.useCss()
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
					this.assert.cssProperty(posiSelector, 'text-align', 'center') //判断字体的格式是否是居上
					console.log('字体横向居中成功')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else {
		this.useXpath()
		this.click('//*[@id="homeTool"]/li[4]/span[1]/div[1]/div/div[2]/span[' + coordinate.layout + ']')
		this.useCss()
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
					this.assert.cssProperty(posiSelector, 'text-align', 'right')
					console.log('字体横向居右成功')
				} else {
					console.log('对象不存在')
				}
			})
		})
	}
}