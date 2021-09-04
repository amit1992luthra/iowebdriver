//let credentials = require("../Locator_Common/Credentials.json")
let argv = require('optimist').argv
function getUrl(url) {
    let lastIndexSlash = url.lastIndexOf("/");
    let lastString = url.substring(lastIndexSlash);
    if (lastString == "/")
        url = url;
    else
        url = url + "/";
    return url;
}
module.exports = {
    "app_URL":  getUrl(argv.appUrl)

}