package com.vytrack.step_definitions;

import com.vytrack.pages.BasePage;
import com.vytrack.pages.Dashboard;
import com.vytrack.pages.LoginPage;
import com.vytrack.pages.QuickLaunchpadPage;
import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.ConfigurationReader;
import com.vytrack.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.jsoup.Connection;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class LoginStepsDefs {

    LoginPage loginPage = new LoginPage();
    Dashboard dashboard = new Dashboard();
    QuickLaunchpadPage quickLaunchpadPage = new QuickLaunchpadPage();

    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {

        Driver.get().get(ConfigurationReader.get("url"));

    }

    @When("the user logins with username {string} and password {string}")
    public void the_user_logins_with_username_and_password(String userName, String password) {

        loginPage.login(userName, password);


    }

    @Then("the {string} should be able to see {string} page")
    public void the_should_be_able_to_see_page(String userType, String expectedPageSubTitle) {

        BrowserUtils.waitFor(3);

        if(userType.equals("Truck driver")){

            String actualpageSubTitle = quickLaunchpadPage.pageSubTitle.getText();

            Assert.assertEquals("Title is not matching", actualpageSubTitle, expectedPageSubTitle);

        } else if(userType.equals("Store manager") || userType.equals("Store manager")){

            String actualpageSubTitle = dashboard.pageSubTitle.getText();

            Assert.assertEquals("Title is not matching", actualpageSubTitle, expectedPageSubTitle);

        }

    }

    @Then("the following {string} should be displayed")
    public void the_following_should_be_displayed(String message) {

    String insideUsernameBox = loginPage.usernameBox.getAttribute("value");
    String insidepasswordBox = loginPage.passwordBox.getAttribute("value");


   if (insideUsernameBox.isEmpty() & insidepasswordBox.isEmpty()){

        String actualMessage1 = loginPage.usernameBox.getAttribute("validationMessage");

        Assert.assertEquals("UsernameBox and passwordBox are not empty", message, actualMessage1);

    }else if(insideUsernameBox.isEmpty()){

        String actualMessage1 = loginPage.usernameBox.getAttribute("validationMessage");

        Assert.assertEquals("UsernameBox is not empty", message, actualMessage1);

    }else if (insidepasswordBox == null){

       if(loginPage.invalidMessage.isEnabled()) {

           String actualMessage = loginPage.invalidMessage.getText();

           Assert.assertEquals("Message is not matching", actualMessage, message);

       }else {

           String actualMessage2 = loginPage.passwordBox.getAttribute("validationMessage");

           Assert.assertEquals("Password is not empty", message, actualMessage2);
       }
    }

    }


    @Then("User should be able to see Remember me on this computer link")
    public void user_should_be_able_to_see_Remember_me_on_this_computer_link() {

        Assert.assertTrue(loginPage.rememberCheckbox.isEnabled());
    }

    @Then("User should be able to click this link")
    public void user_should_be_able_to_click_this_link() {

        loginPage.clickBox.click();

        Assert.assertTrue(loginPage.rememberCheckbox.isSelected());

    }


    //AC2

    @When("Login Base Page successfully")
    public void login_Base_Page_successfully() {

        loginPage.login("user10", "UserUser123");
    }


    @When("the user logs out Base Page")
    public void the_user_logs_out_Base_Page() {
        quickLaunchpadPage.dropDownMenu.click();
        quickLaunchpadPage.logOut.click();
    }

    @When("the user pastes the copied Url to browser")
    public void the_user_pastes_the_copied_Url_to_browser() {

        Driver.get().get(ConfigurationReader.get("basePageUrl"));
    }

    @Then("the user must stay on login pages")
    public void the_user_must_stay_on_login_pages() {

        Assert.assertEquals("https://qa.translantik.com/user/login", Driver.get().getCurrentUrl());
    }





}

