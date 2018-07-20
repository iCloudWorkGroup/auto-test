const position = require('../src/position.js')
module.exports = function() {
	position.call(this, {
		row: 2,
		col: 2
	}, function(posi) {
		let posiSelector = '.content-list .item[style*="top: ' + posi.top + ';"][style*="left: ' + posi.left + ';"] .bg'
		this.click(posiSelector)
		this.pause(2000)
		this.useXpath()
		this.mouseButtonDown(0)
		this.mouseButtonUp(0)
		this.dblClick('//*[@id="tableContainer"]/tbody/tr[2]/td[3]/div/div/div[3]/div/div[2]')
		this.useCss()
		this.pause(2000)
		this.clearValue('.edit-frame')
		this.setValue('.edit-frame', 'abc')
		this.pause(2000)
		this.click('.cells-container')
		this.pause(2000)
		this.useCss()
		this.assert.containsText(posiSelector, 'abc')
		this.click(posiSelector)
		this.keys([this.Keys.CONTROL, 'c'], function() {
			console.log('Ctrl+c')
		})
		position.call(this, {
			row: 8,
			col: 9
		}, function(endposi) {
			let a
			let b
			a = endposi.left + 1
			b = endposi.top + 1
			this.moveToElement('.cells-container', a, b, function(argument) {
				console.log(endposi)
				this.pause(3000)
				this.mouseButtonDown()
				this.mouseButtonUp()
			})
		}, false)
		this.keys(['v'], function() {
			console.log('Ctrl+v')
		})
		this.pause(2000)
		position.call(this, {
			row: 8,
			col: 9
		}, function(posi) {
			let posiSelector1 = '.content-list .item[style*="top: ' + posi.top + ';"][style*="left: ' + posi.left + ';"] .bg'
			this.useCss()
			this.assert.containsText(posiSelector1, 'abc')
		})
		this.pause(2000)
		this.click('.cells-container')
		this.pause(2000)
	})
}