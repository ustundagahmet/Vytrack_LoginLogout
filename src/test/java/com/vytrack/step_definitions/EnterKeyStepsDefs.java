package com.vytrack.step_definitions;

import com.vytrack.pages.LoginPage;
import com.vytrack.pages.QuickLaunchpadPage;
import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;

public class EnterKeyStepsDefs {

    LoginPage loginPage = new LoginPage();
    QuickLaunchpadPage quickLaunchpadPage = new QuickLaunchpadPage();

    @When("the user click on Username input box")
    public void the_user_click_on_Username_input_box() {

        loginPage.usernameBox.click();

    }

    @When("hit Enter button")
    public void hit_Enter_button() {

        loginPage.usernameBox.sendKeys( Keys.ENTER);

    }

    @Then("the cursor appears on Password input box")
    public void the_cursor_appears_on_input_box() {

        Assert.assertTrue(loginPage.passwordBox.equals(Driver.get().switchTo().activeElement()));


        //loginPage.passwordBox.equals(Driver.get().switchTo().activeElement());

    }

    @And("the user types username in Username input box")
    public void theUserTypesUsernameInUsernameInputBox() {

        loginPage.usernameBox.sendKeys("user10");
    }

    @When("the user types password in Password Input box")
    public void theUserTypesPasswordInPasswordInputBox() {

        loginPage.passwordBox.sendKeys("UserUser123");
    }

    @Then("Login Button should be clicked")
    public void loginButtonShouldBeClicked() {

        BrowserUtils.waitFor(3);

        String actualpageSubTitle = quickLaunchpadPage.pageSubTitle.getText();

        Assert.assertEquals("Title is not matching", actualpageSubTitle, "Quick Launchpad");

    }
}
