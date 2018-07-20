const position = require('../src/position.js')
module.exports = function() {
	position.call(this, {
		row: 2,
		col: 2
	}, function(posi) {
		let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
			';"][style*="left: ' + posi.left + ';"] .cell-content'
		let width
		let height
		this.getCssProperty(posiSelector, 'width', function(ret) {
			width = ret.value
			width = parseInt(width) / 2
			posi.left = parseInt(posi.left)
			width = posi.left + width
			return width
		})
		this.getCssProperty(posiSelector, 'height', function(ret) {
			height = ret.value
			height = parseInt(height) / 2
			posi.top = parseInt(posi.top)
			height = posi.top + height
			this.useCss()
			this.moveToElement('.edit-panel', width, height, function(argument) {
				this.mouseButtonClick(0).pause(2000)
				//this.assert.containsText(posiSelector, '123')
				this.keys([this.Keys.CONTROL, 'x'], function() {
					console.log('Ctrl+x')
				})
			})
		})
		// this.useXpath()
		// this.dblClick('//*[@id="table"]/tbody/tr[2]/td[2]/div/div/div[4]/div/div/div[1]')
		// this.useCss()
		// this.pause(3000)
		// this.clearValue('.edit-frame')
		// this.pause(3000)
		// this.setValue('.edit-frame', '123')
		// this.pause(3000)
		// this.click('.edit-panel')
		// this.pause(2000)
		// this.useCss()
		// position.call(this, {
		// 	row: 2,
		// 	col: 2
		// }, function(posi) {
		// 	let posiSelector = '.cell-group .cell[style*="top: ' + posi.top +
		// 		';"][style*="left: ' + posi.left + ';"] .cell-content'
		// 	let width
		// 	let height
		// 	this.getCssProperty(posiSelector, 'width', function(ret) {
		// 		width = ret.value
		// 		width = parseInt(width) / 2
		// 		posi.left = parseInt(posi.left)
		// 		width = posi.left + width
		// 		return width
		// 	})
		// 	this.getCssProperty(posiSelector, 'height', function(ret) {
		// 		height = ret.value
		// 		height = parseInt(height) / 2
		// 		posi.top = parseInt(posi.top)
		// 		height = posi.top + height
		// 		this.useCss()
		// 		this.moveToElement('.edit-panel', width, height, function(argument) {
		// 			this.mouseButtonClick(0).pause(2000)
		// 		})

		// 	})


		position.call(this, {
			row: 4,
			col: 4
		}, function(endposi) {
			let a
			let b
			a = endposi.left + 1
			b = endposi.top + 1
			this.moveToElement('.edit-panel', a, b, function(argument) {
				console.log(endposi)
				this.mouseButtonClick(0).pause(2000)
				this.keys(['v'], function() {
					console.log('Ctrl+v')
					this.pause(2000)
				})
			})
			position.call(this, {
				row: 4,
				col: 4
			}, function(posi) {
				let posiSelector1 = '.cell-group .cell[style*="top: ' + posi.top +
					';"][style*="left: ' + posi.left + ';"] .cell-content'
				this.useCss()
				this.assert.containsText(posiSelector1, '22222222')
			})
		}, false)
	})
}