package com.vytrack.pages;

import com.vytrack.utilities.Driver;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id = "prependedInput")
    public WebElement usernameBox;

    @FindBy(id = "prependedInput2")
    public WebElement passwordBox;

    @FindBy(id = "_submit")
    public WebElement loginButton;

    @FindBy(xpath = "//div[@class='alert alert-error']/div")
    public WebElement invalidMessage;

    @FindBy(id = "remember_me")
    public WebElement rememberCheckbox;

    @FindBy(className = "custom-checkbox__icon")
    public WebElement clickBox;

    @FindBy(linkText = "Forgot your password?")
    public WebElement forgotPasswordLink;

    public String loginPageUrl = Driver.get().getCurrentUrl();

    public void login(String userName, String password){
        usernameBox.sendKeys(userName);
        passwordBox.sendKeys(password);
        loginButton.click();
    }

    public void loginWithEnter(String userName, String password){
        usernameBox.sendKeys(userName + Keys.ENTER);
        passwordBox.sendKeys(password + Keys.ENTER);
        //loginButton.click();
    }
}
