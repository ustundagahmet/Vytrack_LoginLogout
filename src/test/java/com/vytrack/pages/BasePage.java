package com.vytrack.pages;

import com.vytrack.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public abstract class BasePage {

    public BasePage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(css = "h1[class='oro-subtitle']")
    public WebElement pageSubTitle;

    @FindBy(xpath = "//a[@class='dropdown-toggle']")
    public WebElement profilName;

    @FindBy(linkText = "Logout")
    public WebElement logOut;

    @FindBy(className = "dropdown-toggle")
    public WebElement dropDownMenu;

    public String basePageUrl = Driver.get().getCurrentUrl();



}
