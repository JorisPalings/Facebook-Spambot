"use strict";

const fbId = "1117160298";
const message = "Your message here"
const noOfMessages = 3;

const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
const driver = new webdriver.Builder().forBrowser('firefox').build();
const credentials = require('./credentials.json');

driver.get("http://www.facebook.com/")
driver.sleep(1000);
driver.findElement(By.css("#email")).sendKeys(credentials.email);
driver.findElement(By.css("#pass")).sendKeys(credentials.password, webdriver.Key.ENTER);
driver.sleep(1000);
driver.get(`https://www.facebook.com/messages/t/${fbId}`);
driver.sleep(1000);
for(var i = 0; i < noOfMessages; i++) {
    driver.findElement(By.css("._1mf")).sendKeys(message, webdriver.Key.ENTER);
    driver.sleep(1000);
}
driver.quit();
