//let credentials = require("../Locator_Common/Credentials.json")
let argv = require('optimist').argv
let userName = "univar"
let password = "Gorilla2020"
function getUrl(url) {
    let lastIndexSlash = url.lastIndexOf("/");
    let lastString = url.substring(lastIndexSlash);
    if (lastString == "/")
        url = url;
    else
        url = url + "/";
    let url1 = url.split("://")
    url = url1[0]+"://"+userName+":"+password+"@"+url1[1]
    return url;
}
module.exports = {
    "app_URL":  getUrl(argv.appUrl)

}