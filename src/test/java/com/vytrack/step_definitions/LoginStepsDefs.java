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

public class LoginStepsDefs {

    LoginPage loginPage = new LoginPage();
    BasePage basePage = new BasePage();


    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {

        Driver.get().get(ConfigurationReader.get("url"));

    }

    @When("the user types username {string} and password {string}")
    public void the_user_types_username_and_password(String userName, String password) {

        loginPage.login(userName, password);
    }

    @Then("the user should be able to see {string} page")
    public void the_user_should_be_able_to_see_page(String pageTitle) {
        BrowserUtils.waitFor(5);

        String actualpageSubTitle = basePage.pageSubTitle.getText();

        Assert.assertEquals("Title is not matching", actualpageSubTitle, pageTitle);


    }




}
