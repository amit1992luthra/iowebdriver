//let credentials = require("../Locator_Common/Credentials.json")
let argv = require('optimist').argv
function getUrl(url) {
    return url;
}
module.exports = {
    "app_URL":  getUrl(argv.appUrl)

}