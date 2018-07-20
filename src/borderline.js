//选择边框线
const position = require('../src/position.js')
const elements = require('../src/elements.js')
module.exports = function(coordinate) {
	this.pause(1000)
	this.useXpath()
	this.click('//*[@id="homeTool"]/li[3]/span[1]/div[1]/div[1]/div[2]/span[4]') //点击工具栏边框按钮
	this.pause(1000)
	this.click('//*[@id="funcBorder"]/li[' + coordinate.boundary + ']') //选择边框
	this.pause(1000)
	this.useCss()
	if (coordinate.boundary === 1) {
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"]'
			this.getCssProperty(posiSelector, 'border-bottom-color', function(ret) {
				if (ret.status == 0) {
					this.assert.cssProperty(posiSelector, 'border-bottom-color', 'rgba(0, 0, 0, 1)') //判断单元格是否是下边框
					console.log('下边框设置成功')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else if (coordinate.boundary === 2) {
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"]'
			this.getCssProperty(posiSelector, 'border-bottom-color', function(ret) {
				if (ret.status == 0) {
					this.assert.cssProperty(posiSelector, 'border-top-color', 'rgba(0, 0, 0, 1)') //判断单元格是否是下边框
					console.log('上边框设置成功')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else if (coordinate.boundary === 3) {
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"]'
			this.getCssProperty(posiSelector, 'border-bottom-color', function(ret) {
				if (ret.status == 0) {
					this.assert.cssProperty(posiSelector, 'border-left-color', 'rgba(0, 0, 0, 1)')
					console.log('左边框设置成功')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else if (coordinate.boundary === 4) {
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"]'
			this.getCssProperty(posiSelector, 'border-bottom-color', function(ret) {
				if (ret.status == 0) {
					this.assert.cssProperty(posiSelector, 'border-right-color', 'rgba(0, 0, 0, 1)')
					console.log('右边框设置成功')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else if (coordinate.boundary === 5) {
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"]'
			this.getCssProperty(posiSelector, 'border-bottom-color', function(ret) {
				if (ret.status == 0) {
					this.assert.cssProperty(posiSelector, 'border-color', 'rgba(0, 0, 0, 0)')
					this.assert.cssProperty(posiSelector, 'border-top-color', 'rgba(0, 0, 0, 0)')
					this.assert.cssProperty(posiSelector, 'border-right-color', 'rgba(0, 0, 0, 0)')
					this.assert.cssProperty(posiSelector, 'border-bottom-color', 'rgba(0, 0, 0, 0)') //判断单元格是否是下边框
					this.assert.cssProperty(posiSelector, 'border-left-color', 'rgba(0, 0, 0, 0)')
					console.log('无边框设置成功')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else if (coordinate.boundary === 6) {
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"]'
			this.getCssProperty(posiSelector, 'border-bottom-color', function(ret) {
				if (ret.status == 0) {
					this.assert.cssProperty(posiSelector, 'border-color', 'rgb(0, 0, 0)')
					this.assert.cssProperty(posiSelector, 'border-top-color', 'rgba(0, 0, 0, 1)')
					this.assert.cssProperty(posiSelector, 'border-right-color', 'rgba(0, 0, 0, 1)')
					this.assert.cssProperty(posiSelector, 'border-bottom-color', 'rgba(0, 0, 0, 1)') //判断单元格是否是下边框
					this.assert.cssProperty(posiSelector, 'border-left-color', 'rgba(0, 0, 0, 1)')
					console.log('所有边框设置成功')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else if (coordinate.boundary === 7) {
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"]'
			this.getCssProperty(posiSelector, 'border-bottom-color', function(ret) {
				if (ret.status == 0) {
					let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
						';"][style*="left: ' + posi.left + ';"]'
					this.assert.cssProperty(posiSelector, 'border-color', 'rgb(0, 0, 0)')
					this.assert.cssProperty(posiSelector, 'border-top-color', 'rgba(0, 0, 0, 1)')
					this.assert.cssProperty(posiSelector, 'border-right-color', 'rgba(0, 0, 0, 1)')
					this.assert.cssProperty(posiSelector, 'border-bottom-color', 'rgba(0, 0, 0, 1)') //判断单元格是否是下边框
					this.assert.cssProperty(posiSelector, 'border-left-color', 'rgba(0, 0, 0, 1)')
					console.log('外侧边框设置成功')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else if (coordinate.boundary === 8) {
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"]'
			this.getCssProperty(posiSelector, 'border-bottom-width', function(ret) {
				if (ret.status == 0) {
					let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
						';"][style*="left: ' + posi.left + ';"]'
					this.assert.cssProperty(posiSelector, 'border-bottom-width', '3px')
					console.log('粗下边框设置成功')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else if (coordinate.boundary === 9) {
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			posi.top = parseInt(posi.top) - 1
			posi.top = posi.top + 'px'
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"]'
			console.log(posi)
			this.getCssProperty(posiSelector, 'border-top-width', function(ret) {
				if (ret.status == 0) {
					this.assert.cssProperty(posiSelector, 'border-top-width', '3px')
					console.log('粗上边框设置成功')
				} else {
					console.log('对象不存在')
				}
			})
			this.useXpath()
			this.click('//*[@id="homeTool"]/li[3]/span[1]/div[1]/div[1]/div[2]/span[4]') //点击工具栏边框按钮
			this.click('//*[@id="funcBorder"]/li[5]') //选择边框
			console.log('由于粗上比边框影响行高，所以修改为默认边框')
			this.useCss()
		})
	} else if (coordinate.boundary === 10) {
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			posi.left = parseInt(posi.left) - 1
			posi.left = posi.left + 'px'
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"]'
			this.getCssProperty(posiSelector, 'border-left-width', function(ret) {
				if (ret.status == 0) {
					this.assert.cssProperty(posiSelector, 'border-left-width', '3px')
					console.log('粗左边框设置成功')
				} else {
					console.log('对象不存在')
				}
			})
			this.useXpath()
			this.click('//*[@id="homeTool"]/li[3]/span[1]/div[1]/div[1]/div[2]/span[4]') //点击工具栏边框按钮
			this.click('//*[@id="funcBorder"]/li[5]') //选择边框
			this.useCss()
		})
	} else {
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"]'
			this.getCssProperty(posiSelector, 'border-right-width', function(ret) {
				if (ret.status == 0) {
					this.assert.cssProperty(posiSelector, 'border-right-width', '3px')
					console.log('粗右边框设置成功')
				} else {
					console.log('对象不存在')
				}
			})
		})
	}
}