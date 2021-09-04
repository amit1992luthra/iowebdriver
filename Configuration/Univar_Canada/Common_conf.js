let browserVersionOptions = {
	installArgs: {
		drivers: {
			//chrome: { version: '90.0.4430.24' },
			// chrome: { version: '88.0.4324.96' }
			chrome: { version: '92.0.4515.107' },
		}
	},
	args: {
		drivers: {
			// chrome: { version: '90.0.4430.24' },
			// chrome: { version: '88.0.4324.96' }
			chrome: { version: '92.0.4515.107' },

		}
	},
};
let Critical_Capabilities = {

	browserName: 'chrome',
	acceptInsecureCerts: true,
	maxInstances: 0,
	specs: [
		'./UnivarUI/TestSuite/PageActions/*.js',
	],
	'goog:chromeOptions': {
		args: [
			'--headless',
			'--disable-gpu', '--window-size=1280,800',
			'disable-infobars', 'disable-popup-blocking',
			'disable-notifications',]

	},
};

let Smoke_Capabilities = {

	browserName: 'chrome',
	acceptInsecureCerts: true,
	maxInstances: 0,
	specs: [
		
		'./UnivarUI/TestSuite/*.js',


	],
	exclude:[
		 './UnivarUI/TestSuite/TS002*.js',
	],
	'goog:chromeOptions': {
		args: [
			//'--headless',
			'--disable-gpu',
            '--window-size=1280,800',
			'disable-infobars', 'disable-popup-blocking',
			'disable-notifications',]

	},
};

let Regression_Capabilities = {

	browserName: 'chrome',
	acceptInsecureCerts: true,
	maxInstances: 0,
	specs: [
		'./UnivarUI/TestSuite/TS015*.js',
		'./UnivarUI/TestSuite/TS014*.js'
		// './UnivarUI/TestSuite/TS002*.js',


	],
	'goog:chromeOptions': {
		args: [
			//'--headless',
            '--disable-gpu', 
            '--window-size=1280,800',
			'disable-infobars', 'disable-popup-blocking',
			'disable-notifications',]

	},
};

exports.browserVersionOptions = browserVersionOptions;
exports.Critical_Capabilities = Critical_Capabilities;
exports.Smoke_Capabilities = Smoke_Capabilities;
exports.Regression_Capabilities = Regression_Capabilities;