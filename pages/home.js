let home= function(){

    let input1 = element(by.model('first'));
    
    let input2 = element(by.model('second'));

    let button = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url)
    {
        browser.get(url);
    }

    this.enterFirstNum = function(firstNum)
    {
        input1.sendKeys(firstNum);
    }

    this.enterSecondNum = function(secondNum)
    {
        input2.sendKeys(secondNum);
    }

    this.clickGo = function()
    {
        button.click();
    }

    this.verifyResult = function(result)
    {
        let output = element(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toEqual(result);
    }
};
module.exports = new home();