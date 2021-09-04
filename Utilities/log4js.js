const log4js = require('log4js');
log4js.configure({
    appenders: { univar: { type: "file", filename: "reports/logs/Log4j.log" },console: { type: 'console' } },
    categories: { default: { appenders: ["univar", 'console'], level: "trace" } }
});

/*const logger = log4js.getLogger("cheese");
logger.trace("Entering cheese testing");
logger.debug("Got cheese.");
logger.info("Cheese is Comté.");
logger.warn("Cheese is quite smelly.");
logger.error("Cheese is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");
 */