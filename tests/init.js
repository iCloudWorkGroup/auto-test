const position = require('../src/position.js')
const fontfamily = require('../src/fontfamily.js')
const fontsize = require('../src/fontsize.js')
const borderline = require('../src/borderline.js')
const italic = require('../src/italic.js')
const underline = require('../src/underline.js')
const bgcolor = require('../src/bgcolor.js')
const fontcolor = require('../src/fontcolor.js')
const longitudinallayout = require('../src/longitudinallayout.js')
const horizontallayout = require('../src/horizontallayout.js')
const hide = require('../src/hide.js')
const nohide = require('../src/nohide.js')
const textformat = require('../src/textformat.js')
const withdraw = require('../src/withdraw.js')
const forward = require('../src/forward.js')
const thickening = require('../src/thickening.js')
const mergecell = require('../src/mergecell.js')
const splitcell = require('../src/splitcell.js')
const automatictransfer = require('../src/automatictransfer.js')
const frozen = require('../src/frozen.js')
const unfreeze = require('../src/unfreeze.js')
const insertrow = require('../src/insertrow.js')
const insertcolumn = require('../src/insertcolumn.js')
const deleteline = require('../src/deleteline.js')
const deletecolumn = require('../src/deletecolumn.js')
const copypaste = require('../src/copypaste.js')
const cutpaste = require('../src/cutpaste.js')
const row = require('../src/row.js')
const col = require('../src/col.js')
const click = require('../src/click.js')
const input = require('../src/input.js')
const moveto = require('../src/moveto.js')
const property = require('../src/property.js')
const splitcellfzu = require('../src/splitcellfzu.js')
const Toindex = require('../src/Toindex.js')
module.exports = {
	'test1.': function(browser) {
		//启动浏览器并打开 http://192.168.1.241:8088/spreadsheet/
		browser.url('http://excel-inc.acmr.com.cn/main/1fbbdfc8-94d9-4470-a851-2afd82f19345') //.maximizeWindow()
		browser.waitForElementVisible('.menu-container', 100000)
		browser.pause(1000)

		//输入标题
		click.call(browser, {
			col: 'c',
			row: 3
		}, function(posi) {
			input.call(browser, '标题')
		})


		//输入GDP
		click.call(browser, {
			col: 'd',
			row: 4
		}, function(posi) {
			input.call(browser, 'GDP')
		})

		//输入第一产业
		click.call(browser, {
			col: 'd',
			row: 5
		}, function(posi) {
			input.call(browser, '第一产业')
		})

		//输入第二产业
		click.call(browser, {
			col: 'e',
			row: 5
		}, function(posi) {
			input.call(browser, '第二产业')
		})

		//输入第三产业
		click.call(browser, {
			col: 'f',
			row: 5
		}, function(posi) {
			input.call(browser, '第三产业')
		})

		//输入北京
		click.call(browser, {
			col: 'c',
			row: 6
		}, function(posi) {
			input.call(browser, '北京')
		})

		//输入天津
		click.call(browser, {
			col: 'c',
			row: 7
		}, function(posi) {
			input.call(browser, '天津')
		})

		//输入上海
		click.call(browser, {
			col: 'c',
			row: 8
		}, function(posi) {
			input.call(browser, '上海')
		})

		moveto.call(browser, {
			col: 'c',
			row: 3,
			endCol: 'f',
			endRow: 3
		}, function() {
			mergecell.call(browser, {
				col: 'c',
				row: 3,
				endCol: 'f',
				endRow: 3
			})
		})

		//合并GDP
		moveto.call(browser, {
			col: 'd',
			row: 4,
			endCol: 'f',
			endRow: 4
		}, function(cord) {
			mergecell.call(browser, {
				col: 'd',
				row: 4,
				endCol: 'f',
				endRow: 4
			})
		})
		//合并单元格
		moveto.call(browser, {
			col: 'c',
			row: 4,
			endCol: 'c',
			endRow: 5
		}, function(cord) {
			mergecell.call(browser, {
				col: 'c',
				row: 4,
				endCol: 'c',
				endRow: 5
			})
		})

		//设置标题
		click.call(browser, {
			col: 'c',
			row: 3
		}, function(posi) {
			//设置标题上边框
			borderline.call(this, {
				col: 'c',
				row: 3,
				boundary: 1
			})
			//设置标题下边框
			borderline.call(this, {
				col: 'c',
				row: 3,
				boundary: 2
			})
			//设置字体格式
			fontfamily.call(browser, {
				col: 'c',
				row: 3,
				family: 6
			})
			//横向布局(1:居左，2：居中，3：局右)
			horizontallayout.call(browser, {
				col: 'c',
				row: 3,
				layout: 2
			})
			//设置背景颜色
			bgcolor.call(browser, {
				col: 'c',
				row: 3
			})
			//设置粗体
			thickening.call(browser, {
				col: 'c',
				row: 3
			})
		})

		//设置主栏
		moveto.call(browser, {
			col: 'd',
			row: 4,
			endCol: 'f',
			endRow: 5
		}, function() {
			//设置字体格式
			fontfamily.call(browser, {
				col: 'd',
				row: 4,
				endCol: 'f',
				endRow: 5,
				family: 6
			})
			//横向布局(1:居左，2：居中，3：局右)
			horizontallayout.call(browser, {
				col: 'd',
				row: 4,
				endCol: 'f',
				endRow: 5,
				layout: 2
			})
			//设置背景颜色
			bgcolor.call(browser, {
				col: 'd',
				row: 4,
				endCol: 'f',
				endRow: 5
			})
			//设置粗体
			thickening.call(browser, {
				col: 'd',
				row: 4,
				endCol: 'f',
				endRow: 5
			})
		})

		//设置宾栏
		moveto.call(browser, {
			col: 'c',
			row: 6,
			endCol: 'c',
			endRow: 8
		}, function() {
			//设置背景颜色
			bgcolor.call(browser, {
				col: 'c',
				row: 6,
				endCol: 'c',
				endRow: 8
			})
			//设置字体格式
			fontfamily.call(browser, {
				col: 'c',
				row: 6,
				endCol: 'c',
				endRow: 8,
				family: 6
			})
			//横向布局(1:居左，2：居中，3：局右)
			horizontallayout.call(browser, {
				col: 'c',
				row: 6,
				endCol: 'c',
				endRow: 8,
				layout: 2
			})
		})

		//设置输入区域文本格式
		moveto.call(browser, {
			col: 'd',
			row: 6,
			endCol: 'f',
			endRow: 8
		}, function() {
			//设置文本格式
			textformat.call(browser, {
				col: 'd',
				row: 6,
				endCol: 'f',
				endRow: 8,
				format: 11
			})
		})

		//设置标题边框（上下边框）
		click.call(browser, {
			col: 'd',
			row: 4
		}, function() {
			//设置标题上边框
			borderline.call(this, {
				col: 'd',
				row: 4,
				boundary: 1
			})
			//设置标题下边框
			borderline.call(this, {
				col: 'd',
				row: 4,
				boundary: 2
			})
		})
		moveto.call(browser, {
			col: 'c',
			row: 6,
			endCol: 'f',
			endRow: 6
		}, function() {
			//设置标题上边框
			borderline.call(this, {
				col: 'c',
				row: 6,
				endCol: 'f',
				endRow: 6,
				boundary: 1
			})
			//设置标题下边框
			borderline.call(this, {
				col: 'c',
				row: 6,
				endCol: 'f',
				endRow: 6,
				boundary: 2
			})
		})
		moveto.call(browser, {
			col: 'c',
			row: 8,
			endCol: 'f',
			endRow: 8
		}, function() {
			//设置标题上边框	
			borderline.call(this, {
				col: 'c',
				row: 8,
				endCol: 'f',
				endRow: 8,
				boundary: 1
			})
			//设置标题下边框
			borderline.call(this, {
				col: 'c',
				row: 8,
				endCol: 'f',
				endRow: 8,
				boundary: 2
			})
		})

		//设置左右边界
		click.call(browser, {
			col: 'c',
			row: 4
		}, function() {
			//设置右边框
			borderline.call(this, {
				col: 'c',
				row: 4,
				boundary: 4
			})
		})
		moveto.call(browser, {
			col: 'd',
			row: 5,
			endCol: 'd',
			endRow: 8
		}, function() {
			//设置右边框
			borderline.call(this, {
				col: 'd',
				row: 5,
				endCol: 'd',
				endRow: 8,
				boundary: 4
			})
			//设置左边框
			borderline.call(this, {
				col: 'd',
				row: 5,
				endCol: 'd',
				endRow: 8,
				boundary: 3
			})
		})
		moveto.call(browser, {
			col: 'f',
			row: 5,
			endCol: 'f',
			endRow: 8
		}, function() {
			//设置左边框
			borderline.call(this, {
				col: 'f',
				row: 5,
				endCol: 'f',
				endRow: 8,
				boundary: 3
			})
		})

		//隐藏行
		click.call(browser, {
			col: 'b',
			row: 1
		}, function() {
			hide.call(browser, 1)
		})
		//隐藏列
		click.call(browser, {
			col: 'a',
			row: 2
		}, function() {
			hide.call(browser, 2)
		})



		browser.end()
	}
}