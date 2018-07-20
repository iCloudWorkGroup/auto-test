const seleniumConfig = require('./build/selenium-conf')
const path = require('path')

module.exports = (function (settings) {

	settings.selenium.server_path = `${path.resolve()}/node_modules/selenium-standalone/.selenium/selenium-server/${seleniumConfig.selenium.version}-server.jar`

	settings.selenium.cli_args['webdriver.chrome.driver'] = `${path.resolve()}/node_modules/selenium-standalone/.selenium/chromedriver/${seleniumConfig.driver.chrome.version}-${seleniumConfig.driver.chrome.arch}-chromedriver`
      
    return settings;
})(require('./nightwatch.json'))

/*
 *  Nightwatch »á´Ó nightwatch.json ÖÐ¶ÁÈ¡ÅäÖÃ¡£
 *  ²»¹ýÈç¹û´æÔÚ nightwatch.conf.js£¬½«»á±äÎªÊ×ÏÈ´ÓºóÕßÖÐ¶ÁÈ¡ÅäÖÃ¡£
 *  nightwatch.conf.js ´æÔÚµÄÒâÒåÊÇÊ¹ÓÃ JavaScript ¶¯Ì¬Éú³ÉÅäÖÃÐÅÏ¢¡£
 *  Èç¹ûÅäÖÃÐÅÏ¢ÊÇ²»ÐèÒª´úÂëÐÞ¸ÄµÄ£¬Ö±½ÓÊ¹ÓÃ nightwatch.json ¾Í¿ÉÒÔÀ²¡£
 */