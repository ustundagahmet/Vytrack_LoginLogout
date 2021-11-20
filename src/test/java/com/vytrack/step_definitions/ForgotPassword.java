package com.vytrack.step_definitions;

import com.vytrack.pages.LoginPage;
import com.vytrack.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class ForgotPassword {

    LoginPage loginPage = new LoginPage();

    @When("the user clicks the Forgot your password? link")
    public void the_user_clicks_the_link() {

        loginPage.forgotPasswordLink.click();

    }

    @Then("The user should be navigated to the password page from the login page.")
    public void the_user_should_be_navigated_to_the_password_page_from_the_login_page() {

    String actualUrl = Driver.get().getCurrentUrl();

        Assert.assertEquals("https://qa.translantik.com/user/reset-request", actualUrl);

    }
}
