//选择字体大小(1：8号，2：9号，3：10号，4：11号，5：12号，6：14号，
//7：16号，8：18号，9:20号，10：24号，11：26号，12：28号，13：36号)
const position = require('../src/position.js')
const elements = require('../src/elements.js')
module.exports = function(coordinate) {
	this.useXpath()
	this.pause(1000)
	this.click('//*[@id="homeTool"]/li[3]/span[1]/div[1]/div[1]/div[1]/span[2]') //点击工具栏字体大小框
	this.pause(1000)
	this.click('//*[@id="fontSize"]/li[' + coordinate.size + ']') //选择字体
	this.pause(1000)
	if (coordinate.size == 1) {
		this.useCss()
		this.assert.containsText('.fui-cf-fontsize', '8') //判断工具栏显示是否转换为'8
		// this.assert.cssProperty(posiSelector, 'font-size', '8pt') //判断选择的字体属性是否为微软雅黑
		// 	this.pause(1000)
	} else if (coordinate.size === 2) {
		this.useCss()
		this.assert.containsText('.fui-cf-fontsize', '9') //判断工具栏显示是否转换为'9
		//.assert.cssProperty('.content-list .item .bg', 'font-size', '9pt') //判断被选择字体大小属性是否为'9pt
	} else if (coordinate.size === 3) {
		this.useCss()
		this.assert.containsText('.fui-cf-fontsize', '10') //判断工具栏显示是否转换为'10
		//.assert.cssProperty('.content-list .item .bg', 'font-size', '10pt') //判断被选择字体大小属性是否为'10pt
	} else if (coordinate.size === 4) {
		this.useCss()
		this.assert.containsText('.fui-cf-fontsize', '11') //判断工具栏显示是否转换为'11
		//.assert.cssProperty('.content-list .item .bg', 'font-size', '11pt') //判断被选择字体大小属性是否为'11pt
	} else if (coordinate.size === 5) {
		this.useCss()
		this.assert.containsText('.fui-cf-fontsize', '12') //判断工具栏显示是否转换为'12
		//.assert.cssProperty('.content-list .item .bg', 'font-size', '12pt') //判断被选择字体大小属性是否为'12pt
	} else if (coordinate.size === 6) {
		this.useCss()
		this.assert.containsText('.fui-cf-fontsize', '14') //判断工具栏显示是否转换为'14
		//assert.cssProperty('.content-list .item .bg', 'font-size', '14pt') //判断被选择字体大小属性是否为'14pt
	} else if (coordinate.size === 7) {
		this.useCss()
		this.assert.containsText('.fui-cf-fontsize', '16') //判断工具栏显示是否转换为'16
		//.assert.cssProperty('.content-list .item .bg', 'font-size', '16pt') //判断被选择字体大小属性是否为'16pt
	} else if (coordinate.size === 8) {
		this.useCss()
		this.assert.containsText('.fui-cf-fontsize', '18') //判断工具栏显示是否转换为'18
		//.assert.cssProperty('.content-list .item .bg', 'font-size', '18pt') //判断被选择字体大小属性是否为'18pt
	} else if (coordinate.size === 9) {
		this.useCss()
		this.assert.containsText('.fui-cf-fontsize', '20') //判断工具栏显示是否转换为'20
		//.assert.cssProperty('.content-list .item .bg', 'font-size', '20pt') //判断被选择字体大小属性是否为'8pt
	} else if (coordinate.size === 10) {
		this.useCss()
		this.assert.containsText('.fui-cf-fontsize', '24') //判断工具栏显示是否转换为'24
		//.assert.cssProperty('.content-list .item .bg', 'font-size', '24pt') //判断被选择字体大小属性是否为'24pt
	} else if (coordinate.size === 11) {

		this.useCss()
		this.assert.containsText('.fui-cf-fontsize', '26') //判断工具栏显示是否转换为'26
		//this.assert.cssProperty('.content-list .item .bg', 'font-size', '26pt') //判断被选择字体大小属性是否为'26pt

	} else if (coordinate.size === 12) {
		this.useCss()
		this.assert.containsText('.fui-cf-fontsize', '28') //判断工具栏显示是否转换为'28
		//.assert.cssProperty('.content-list .item .bg', 'font-size', '28pt') //判断被选择字体大小属性是否为'28pt
	} else if (coordinate.size === 13) {
		this.useCss()
		this.assert.containsText('.fui-cf-fontsize', '36') //判断工具栏显示是否转换为'36
		//this.assert.cssProperty('.content-list .item .bg', 'font-size', '20pt') //判断被选择字体大小属性是否为'36pt
	} else {
		return (0)
	}
}