// 选择字体格式（1：微软雅黑，2：宋体，3：黑体，4：Tahoma，5：Arial，6：楷体）
const position = require('../src/position.js')
const elements = require('../src/elements.js')
module.exports = function(coordinate) {
	this.useXpath()
	this.pause(1000)
	this.click('//*[@id="homeTool"]/li[3]/span[1]/div[1]/div[1]/div[1]/span[1]') //点击工具栏字体类型框
	this.pause(1000)
	this.click('//*[@id="homeTool"]/li[3]/span[1]/div[1]/div[3]/div/ul/li[' + coordinate.family + ']') //选择字体（1：微软雅黑
	this.pause(1000)
	if (coordinate.family === 1) {
		this.useCss()
		this.assert.containsText('.section', '微软雅黑') //判断工具栏显示是否转换为'微软雅黑'
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"] .cell-content'
			this.getCssProperty(posiSelector, 'font-family', function(ret) {
				if (ret.status == 0) {
					this.assert.cssProperty(posiSelector, 'font-family', "'microsoft Yahei'") //判断选择的字体属性是否为微软雅黑
					this.pause(1000)
					console.log('成功设置微软雅黑字体')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else if (coordinate.family === 2) {
		this.useCss()
		this.assert.containsText('.section', '宋体') //判断工具栏显示是否转换为'宋体'
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"] .cell-content'
			this.getCssProperty(posiSelector, 'font-family', function(ret) {
				if (ret.status == 0) {
					this.assert.cssProperty(posiSelector, 'font-family', 'SimSun') //判断选择的字体属性是否为宋体
					this.pause(1000)
					console.log('成功设置宋体字体')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else if (coordinate.family === 3) {
		this.useCss()
		this.assert.containsText('.section', '黑体') //判断工具栏显示是否转换为'黑体'
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"] .cell-content'
			this.getCssProperty(posiSelector, 'font-family', function(ret) {
				if (ret.status == 0) {
					this.assert.cssProperty(posiSelector, 'font-family', 'SimHei') //判断选择的字体属性是否为黑体
					this.pause(1000)
					console.log('成功设置黑体字体')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else if (coordinate.family === 4) {
		this.useCss()
		this.assert.containsText('.section', 'Tahoma') //判断工具栏显示是否转换为'Tahoma'
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"] .cell-content'
			this.getCssProperty(posiSelector, 'font-family', function(ret) {
				if (ret.status == 0) {
					this.assert.cssProperty(posiSelector, 'font-family', 'Tahoma') //判断选择的字体属性是否为Tahoma
					this.pause(1000)
					console.log('成功设置Tahoma字体')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else if (coordinate.family === 5) {
		this.useCss()
		this.assert.containsText('.section', 'Arial') //判断工具栏显示是否转换为'Arial'
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"] .cell-content'
			this.getCssProperty(posiSelector, 'font-family', function(ret) {
				if (ret.status == 0) {
					this.assert.cssProperty(posiSelector, 'font-family', 'Arial') //判断选择的字体属性是否为Arial
					this.pause(1000)
					console.log('成功设置Arial字体')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else if (coordinate.family === 6) {
		this.useCss()
		this.assert.containsText('.section', '楷体') //判断工具栏显示是否转换为'楷体'
		elements.call(this, {
			col: coordinate.col,
			row: coordinate.row,
			endCol: coordinate.endCol,
			endRow: coordinate.endRow
		}, function(posi) {
			let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
				';"][style*="left: ' + posi.left + ';"] .cell-content'
			this.getCssProperty(posiSelector, 'font-family', function(ret) {
				if (ret.status == 0) {
					this.assert.cssProperty(posiSelector, 'font-family', 'KaiTi') //判断选择的字体属性是否为楷体
					this.pause(1000)
					console.log('成功设置楷体字体')
				} else {
					console.log('对象不存在')
				}
			})
		})
	} else {
		return (0)
	}
}