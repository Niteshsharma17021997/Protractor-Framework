let home = require('../pages/home');

describe('Demo Calc tests', function () {

    it('addition test', function () {

        home.get('https://juliemr.github.io/protractor-demo/');

        home.enterFirstNum('12');

        home.enterSecondNum('3');

        home.clickGo();

        home.verifyResult('15');

        browser.sleep(2000);
    });

    

});