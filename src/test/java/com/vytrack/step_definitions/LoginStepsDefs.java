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
}
