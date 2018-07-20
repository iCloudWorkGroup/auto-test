//文本格式(1:常规，2：文本，5：数字0.00，6：日期1999/01/01，11：百分比，12：货币$)
const position = require('../src/position.js')
const elements = require('../src/elements.js')
const click = require('../src/click.js')
const input = require('../src/input.js')
module.exports = function(coordinate) {
	this.useXpath()
	this.click('//*[@id="textFormatContainer"]/div/div') //点击文本格式
	this.click('//*[@id="homeTool"]/li[7]/span[1]/div[1]/div[2]/div/ul/li[' + coordinate.format + ']') //选择文本
	this.useCss()
	if (coordinate.format == 1) {
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
					this.assert.cssProperty(posiSelector, 'text-align', 'right') //判断文本格式是是否正确
					console.log('设置文本格式（常规）成功')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else if (coordinate.format == 2) {
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
					this.assert.cssProperty(posiSelector, 'text-align', 'left') //判断文本格式是是否正确
					console.log('设置文本格式（文本）成功')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else if (coordinate.format == 5) {
		click.call(this, {
			row: coordinate.row,
			col: coordinate.col
		}, function() {
			input.call(this, '77.7777')
			elements.call(this, {
				col: coordinate.col,
				row: coordinate.row
			}, function(posi) {
				let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
					';"][style*="left: ' + posi.left + ';"] .cell-content'
				this.assert.containsText(posiSelector, '77.78')
				console.log('设置文本格式（数字0.00）成功')
			})
		})
		click.call(this, {
			col: coordinate.col,
			row: coordinate.row
		}, function() {
			input.call(this, '77.4444')
			elements.call(this, {
				col: coordinate.col,
				row: coordinate.row
			}, function(posi) {
				let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
					';"][style*="left: ' + posi.left + ';"] .cell-content'
				this.assert.containsText(posiSelector, '77.44')
				console.log('设置文本格式（数字0.00）成功')
			})
		})
		click.call(this, {
			col: coordinate.col,
			row: coordinate.row
		}, function() {
			input.call(this, '77')
			elements.call(this, {
				col: coordinate.col,
				row: coordinate.row
			}, function(posi) {
				let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
					';"][style*="left: ' + posi.left + ';"] .cell-content'
				this.assert.containsText(posiSelector, '77.00')
				console.log('设置文本格式（数字0.00）成功')
			})
		})
	} else if (coordinate.format == 8) {
		click.call(this, {
			col: coordinate.col,
			row: coordinate.row
		}, function() {
			input.call(this, '1991年01月01日')
			elements.call(this, {
				col: coordinate.col,
				row: coordinate.row
			}, function(posi) {
				let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
					';"][style*="left: ' + posi.left + ';"] .cell-content'
				this.useCss()
				this.assert.containsText(posiSelector, '1991/01/01') //判断文本格式转换正确
				console.log('设置文本格式（日期格式：1991/01/01')
			})
		})
	} else if (coordinate.format == 10) {
		click.call(this, {
			col: coordinate.col,
			row: coordinate.row
		}, function() {
			input.call(this, '100')
			elements.call(this, {
				col: coordinate.col,
				row: coordinate.row
			}, function(posi) {
				let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
					';"][style*="left: ' + posi.left + ';"] .cell-content'
				this.useCss()
				this.assert.containsText(posiSelector, '10000.00%') //判断文本格式转换正确
				console.log('设置文本格式（百分比')
			})
		})
	} else if (coordinate.format == 11) {
		click.call(this, {
			col: coordinate.col,
			row: coordinate.row
		}, function() {
			input.call(this, '100')
			elements.call(this, {
				col: coordinate.col,
				row: coordinate.row
			}, function(posi) {
				let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
					';"][style*="left: ' + posi.left + ';"] .cell-content'
				this.useCss()
				this.assert.containsText(posiSelector, '$100.00') //判断文本格式转换正确
				console.log('设置文本格式（货币$）成功')
			})
		})
	}
}