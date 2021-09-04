"use strict";
//require("./log4js");
require("../Utilities/log4js.js");
// var randomstring = require("randomstring");
var expect = require("chai").expect;
let assert = require("assert");
const log4js = require("log4js");
const randomstring = require("randomstring");
const logger = log4js.getLogger("univar");


class commonActions {
    //Changes focus to iFrame

    safeFrameSwitch(id_,friendlyNameOfElement) {
            this.domStatus();
            try{
                if(typeof id_ =='number'){
                    browser.switchToFrame(id_)
                    logger.info("")
                }
                else if(id_.includes('//')){
                    let frameId = browser.$(id_)
                    browser.switchToFrame(frameId )
                    logger.info("")
                }
                else {
                    let frameId=browser.$("//iframe[@id='"+id_+"']");
                    browser.switchToFrame(frameId )
                    logger.info("")
                }
            }
            catch(e){
                logger.error("Failed to switch to frame '" + friendlyNameOfElement + "' - " + e);
                assert.fail("Failed to switch to frame '" + friendlyNameOfElement + "' \n" + e);
            }
    }


    //get the Text from the given locator
    safeGetText(locator_, time_, friendlyNameOfElement) {
        try {
            this.waitForVisible(locator_, time_, friendlyNameOfElement);
            let text;
            this.scrollTo(locator_, friendlyNameOfElement);
            text = $(locator_).getText();
            logger.info("Fetching text- " + text + " for Element " + friendlyNameOfElement);
            if (!text) {
                text = "";
            }
            logger.info("Fetched text with scroll of - " + friendlyNameOfElement + " as - " + text);
            return text;
        } catch (e) {
            if (e.name !== null) {
                logger.error("Failed to fetch text with scroll of - " + friendlyNameOfElement + " - " + e);
                assert.fail("Failed to fetch text with scroll of - " + friendlyNameOfElement + "\n" + e);
            }
        }
    }


    // returns the current browser name
    getBrowserName() {
        return browser.capabilities.browserName;
    }

    //Navigates to given URL
    navigate(destUrl_) {
        try {
            if (browser.isMobile == false) {
                browser.maximizeWindow();
            }
            browser.url(destUrl_);
            logger.info("Navigated to " + destUrl_);
            return this;
        } catch (e) {
            if (e.name !== null) {
                logger.error(destUrl_ + " is not valid - " + e);
                assert.fail("Failed to navigate to '" + destUrl_ + "'\n" + e);
            }
        }
    }

    //Navigates to given URL
    navigateToNewWindow(destUrl_) {
        try {
            browser.newWindow(destUrl_);
            logger.info("Opened in New Tab and Navigated to " + destUrl_);
        } catch (e) {
            if (e.name !== null) {
                logger.error(destUrl_ + " is not valid - " + e);
                assert.fail("Failed to Switch New Window and navigate to '" + destUrl_ + "'\n" + e);
            }
        }
    }
    //Wait For visible
    waitForVisible(locator_, time_, friendlyNameOfElement) {
        try {
            const elem = $(locator_);
            let options= 3000;
            if (typeof time_=="undefined"){
                logger.info("Using default timeout of 3000ms");
            }
            else {
                options=time_;
            }
            const waitForDisplayed = elem.waitForDisplayed(options);
            if (time_ !== "") {
                logger.info("Waited " + time_ + "ms for " + friendlyNameOfElement + " to be displayed");
            }
            return waitForDisplayed;
        } catch (e) {
            if (e.name !== null) {
                logger.error(friendlyNameOfElement + " is not displayed - " + e);
                assert.fail("'" + friendlyNameOfElement + "' is not displayed \n" + e);
            }
        }
    }
    //Wait untill element is clickable
    waitForClickable(locator_, time_, friendlyNameOfElement) {
        try {
            const elem = $(locator_);
            let options= {timeout:3000};
            if (typeof time_=="undefined"){
                logger.info("Using default timeout of 3000ms");
            }
            else {
                options.timeout=time_;
            }
            const waitForClickable = elem.waitForClickable(options);
            if (time_ !== "") {
                logger.info("Waited " + time_ + "ms for " + friendlyNameOfElement + " to be clickable");
            }
            return waitForClickable;
        } catch (e) {
            if (e.name !== null) {
                logger.error(friendlyNameOfElement + " is not clickable - " + e);
                assert.fail("'" + friendlyNameOfElement + "' is not clickable \n" + e);
            }
        }
    }
    //Clicks on the element using Java Script executor
    safeJavaScriptClick(locator_, friendlyNameOfElement) {
        try {
            const ele = $(locator_);
            logger.info("Clicking on the element " + friendlyNameOfElement);
            browser.execute("arguments[0].click();", ele);
            logger.info("Clicked on the element " + friendlyNameOfElement);
        }
        catch (e) {
            if (e.name !== null) {
                logger.error(friendlyNameOfElement + " was not found - " + e);
                assert.fail("Failed to click '" + friendlyNameOfElement + "'\n" + e);
            }
        }
    }
    // safe asserts for validation
    safeAsserts(verification, actual, friendlyText, expected) {
        switch (verification) {

            case 'equal':
                expect(expected, friendlyText).to.equal(actual);
                break;
            case 'contains':
                expect(actual, friendlyText).to.contains(expected);
                break;
            case 'true':
                expect(actual, friendlyText).to.be.true;
                break;
            case 'false':
                expect(actual, friendlyText).to.be.false;
                break;
            case 'deepEqual':
                expect(actual, friendlyText).to.deep.equal(expected);
                break;
            case 'notNull':
                expect(actual,friendlyText).to.not.be.null;
                break;
        }
    }
    domStatus() {
        browser.waitUntil(
            function () {
                const state = browser.execute(function () {
                    return document.readyState;
                });
                return state === 'complete';
            },{timeout:180000,timeoutMsg:'Page is not completely loaded in 180 seconds'}
        );
    }
    //Get current Url
    getUrl() {
        try {
            this.domStatus();
            let currentUrl = browser.getUrl();
            logger.info("Current url ",currentUrl);
            return currentUrl;
        } catch (e) {
                logger.error("Not able to fetch current url"+ e);
                assert.fail("Unable to get the current url" + e);
        }
    }
    //Check if element is visible
    safeIsVisible(locator,friendlyName){
        try{
            this.domStatus();
        const ele = $(locator);
        const isDisplayed = ele.isDisplayed();
        if(isDisplayed)
            logger.info(friendlyName+" is visible");
        else
            logger.info(friendlyName+" is not visible");
        return isDisplayed
        }
        catch (e){
            logger.error(friendlyName+" was not visible in DOM "+e);
            assert.fail(friendlyName + "' was not found in DOM " + e);
        }
    }
    safeVisibleClick(locator_, time_, friendlyNameOfElement) {
        try {
            const ele = $(locator_);
            this.waitForVisible(locator_, time_, friendlyNameOfElement);
            ele.click();
            logger.info("Clicked on " +friendlyNameOfElement+ " with locator " +locator_);
            return this;
        } catch (e) {
            if (e.name !== null) {
                logger.error(friendlyNameOfElement + " was not found - " + e);
                assert.fail("Failed to click '" + friendlyNameOfElement + "'\n" + e);
            }
        }
    }

    //Sets an element to a given value
    setValue(locator_, text_, friendlyNameOfElement) {
        try {
            const ele = $(locator_);
            this.waitForVisible(locator_, 200, friendlyNameOfElement);
            ele.setValue(text_);
            logger.info("Entered text in " + friendlyNameOfElement + " as " + text_);
            return this;
        } catch (e) {
            if (e.name !== null) {
                logger.error(friendlyNameOfElement + " was not found - " + e);
                assert.fail("Failed to enter text in '" + friendlyNameOfElement + "' \n " + e);
            }
        }
    }
   //Select by value
    selectByValue(locator_, value_, friendlyNameOfElement) {
        this.domStatus();
        try {
            if (value_) {
                $(locator_).selectByAttribute("value", value_);
                logger.info("selected" + value_ + " for " + friendlyNameOfElement);
            }
            return this;
        } catch (e) {
            if (e.name !== null) {
                logger.error(friendlyNameOfElement + " was not found - " + e);
                assert.fail("Failed to select value for '" + friendlyNameOfElement + "' \n" + e);
            }
        }
    }

    //Select option by text
    selectByIndex(locator_, value_, friendlyNameOfElement) {
        this.domStatus();
        try {
            $(locator_).selectByIndex(value_);
            logger.info("selected" + value_ + " for " + friendlyNameOfElement);
            return this;
        } catch (e) {
            if (e.name !== null) {
                logger.error(friendlyNameOfElement + " was not found - " + e);
                assert.fail("Failed to select value for '" + friendlyNameOfElement + "'\n" + e);
            }
        }
    }

    //Select By Text
    selectByText(locator_, text_, friendlyNameOfElement) {
        this.domStatus();
        try {
            if (text_) {
                $(locator_).selectByVisibleText(text_);
                logger.info("selected " + text_ + " by text for " + friendlyNameOfElement);
            }
            return this;
        } catch (e) {
            if (e.name !== null) {
                logger.error(friendlyNameOfElement + " was not found - " + e);
                assert.fail("Failed to select value for '" + friendlyNameOfElement + "'\n" + e);
            }
        }
    }
    //Generates Random Number
    getRandomNumber(number) {
        let randomData = randomstring.generate({
            length: number,
            charset: 'numeric',
        });
        return randomData;
    }
    //Generate random string
    getRandomString(number){
        let randomString = randomstring.generate({
            length: number,
            charset:'alphabetic'
        });
        return randomString;
    }
    /**
     * @param locator_
     * @returns {WebDriver}
     * Scrolls to given locator by taking x and y coordinates
     */
    scrollTo(locator_, friendlyNameOfElement) {
        try {
            $(locator_).scrollIntoView();
            logger.info("scrolled " + friendlyNameOfElement + " into view");
            return this;
        } catch (e) {
            if (e.name !== null) {
                logger.error("Failed to scroll " + friendlyNameOfElement + " into view - " + e);
                assert.fail("Failed to scroll " + friendlyNameOfElement + " into view \n" + e);
            }
        }
    }

    dynamicLocator(locator,value){
        let locator1 = locator.replace('%s',value);
        logger.info("Dynamic locator is ",locator1)
        return locator1;
    }
    //Gets elements from a locator and returns an array of WebElement JSON objects
    getElements(locatorXpath_, friendlyNameOfElement) {
        try {
            var elementsArray = browser.findElements("xpath", locatorXpath_);
            logger.info("Elements in " + friendlyNameOfElement + " are - " + elementsArray);
            return elementsArray;

        } catch (e) {
            if (e.name !== null) {
                logger.error(friendlyNameOfElement + " was not found - " + e);
                assert.fail("'" + friendlyNameOfElement + "' was not found \n" + e);
            }
        }
    }
    browserkeys(value_, friendlyNameOfKey) {
        try {
            browser.keys(value_);
            logger.info(friendlyNameOfKey + " key has been clicked");
            return this;
        } catch (e) {
            if (e.name !== null) {
                logger.error("Failed to click " + friendlyNameOfKey + " key - " + e);
                assert.fail("Failed to click " + friendlyNameOfKey + " key  \n" + e);
            }
        }
    }
    //get attribute of element
    getAttribute(locator_,attribute,friendlyNameOfElement) {
        try {
            let  elements = $(locator_);
            logger.info("Elements in " + friendlyNameOfElement + " are - " + elements);
            this.waitForVisible(elements,200,friendlyNameOfElement);
            let attributeValue = elements.getAttribute(attribute);
            logger.info("Attribute value of "+friendlyNameOfElement+" is "+attributeValue)
            return attributeValue;

        } catch (e) {
            if (e.name !== null) {
                logger.error(attribute+" is not found for "+friendlyNameOfElement + " was not found - " + e);
                assert.fail("'"+ attribute+" is not found for "+ friendlyNameOfElement + "' was not found \n" + e);
            }
        }
    }
    //Switch window
    switchWindow(title,friendlyNameOfElement) {
        try {
            browser.switchWindow(title);
            logger.info("Switched to "+friendlyNameOfElement+" Window")
        } catch (e) {
            if (e.name !== null) {
                logger.error("Unable to Switch to "+friendlyNameOfElement + " Window- " + e);
                assert.fail("Unable to Switch to "+friendlyNameOfElement + " Window- " + e);
            }
        }
    }

}
module.exports = new commonActions();
//$(selector).getAttribute(attributeName)