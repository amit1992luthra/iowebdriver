//const video = require('wdio-video-reporter');
const allureReporter = require('@wdio/allure-reporter').default;
let argv = require('optimist').argv;
require("../../Utilities/log4js.js");
const log4js = require("log4js");
const logger = log4js.getLogger("univar");
let commonConfig = require('./Common_conf.js');
let fs = require('fs-extra');
exports.config = {
    runner: 'local',

    maxInstances: 1,
    capabilities: [
        commonConfig.Regression_Capabilities,
    ],


    specFileRetries: 0,

    logLevel: 'silent',

    bail: 0,

    screenshotPath: 'reports/Screenshots/',

    baseUrl: 'http://localhost',

    waitforTimeout: 10000,

    connectionRetryTimeout: 90000,

    connectionRetryCount: 5,
    services: [ ['selenium-standalone', commonConfig.browserVersionOptions]
    ],
    port: 4440,
    seleniumArgs: {
        seleniumArgs: ["-port", "4440"],
    },

    framework: 'mocha',
    reporters: [

        // [video, {
        //     saveAllVideos: false,       // If true, also saves videos for successful test cases
        //     videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
        //     videoRenderTimeout: 30,
        // }],
        ['allure', {
            outputDir: 'reports',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
            disableMochaHooks: false
        }]
    ],
    mochaOpts: {
        // ui: 'bdd',
        timeout: 1800000
    },
    //
    // =====
    // Hooks
    // =====

    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: function (config, capabilities) {
        if (capabilities[0].browserName == "chrome") {
            const findChromeVersion = require("find-chrome-version");
            try {
                (async () => {
                    const chromeVersion = await findChromeVersion();
                    console.log(`Your Chrome version is ${chromeVersion}`);
                    allureReporter.addEnvironment("Chrome Browser Version", chromeVersion);
                })();
            } catch (e) {
                if (e.name !== null) {
                    console.log(`Unable to find Chrome version - ` + e);
                }
            }
        }
    },

    beforeSuite: function (suite) {
        logger.info("------------------------------------------------------------------------------------------------------------------------------\n" + suite.title);
        logger.info("--------------------------------"+"Environment Name: "+argv.environmentName+"-------------------------------------------------\n");
        logger.info("--------------------------------"+"Browser Name: "+browser.capabilities.browserName+"-----------------------------------------\n");
    },
    beforeTest: function (test, context) {
        const log4js = require("log4js");
        const logger = log4js.getLogger('univar');

        function osInfo() {
            let os = require('os');
            let memoryFree = os.freemem();
            let memoryTotal = os.totalmem();
            let osPlatform = os.platform();
            let osType = os.type();
            let cpu = os.cpus();
            let sysUsername = os.userInfo().username;
            allureReporter.addEnvironment("Total / Free Memory (GB)", memoryTotal / 1024 / 1024 / 1024 + " / " + memoryFree / 1024 / 1024 / 1024);
            allureReporter.addEnvironment("CPU Info", JSON.stringify(cpu[1]));
            allureReporter.addEnvironment("System Username", sysUsername);
            logger.info("Total / Free Memory (GB) :"+memoryTotal / 1024 / 1024 / 1024 + " / " + memoryFree / 1024 / 1024 / 1024);
            logger.info("CPU Info: "+JSON.stringify(cpu[1]));
            logger.info("System Username: "+sysUsername);
        }

        osInfo();

        function systemInfo() {
            const si = require('systeminformation');
            si.osInfo()
                .then(function (data) {
                    console.log(data.distro);
                    allureReporter.addEnvironment("OS", data.distro);
                })
                .catch(error => console.error(error));
        }

        systemInfo();
        let executionBrowserName = browser.capabilities.browserName;
        let chromeDriverVersion = browser.capabilities.chrome.chromedriverVersion;
        allureReporter.addEnvironment("Browser Name", executionBrowserName);
        allureReporter.addEnvironment("Chromedriver Version", chromeDriverVersion);
        logger.info("Browser Name: "+executionBrowserName);
        logger.info("Chromedriver Version: "+chromeDriverVersion);
    },
    /**
     * Function to be executed after a Desktop (in Mocha/Jasmine) or a step (in Cucumber) ends.
     * @param {Object} Desktop Desktop details
     */
    afterTest: function (test, context, {error, result, duration, passed, retries}) {
        const logFilePath = "../../reports/logs/"+test.title+".log";
        // const logFile = fs.readFileSync(logFilePath);
        // allureReporter.addAttachment("Logs", logFile, 'text/plain');

        if (passed === true) {
            console.log('\t', '**********PASSED**********');
        } else {
            console.log('\t', '##########FAILED##########');
            fs.ensureDirSync('./FailedScreenShots');
            browser.saveScreenshot('./FailedScreenShots/' + test.title + duration + '.png');
            const file = './FailedScreenShots/' + test.title + duration + '.png';
            const data = fs.readFileSync(file);
            allureReporter.addAttachment("FailedScreenShot", data, 'image/png');
        }
    },



    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    /**
     * Gets executed when a refresh happens.
     * @param {String} oldSessionId session ID of the old session
     * @param {String} newSessionId session ID of the new session
     */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
