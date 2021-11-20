package com.vytrack.step_definitions;

import com.vytrack.pages.Dashboard;
import com.vytrack.pages.LoginPage;
import com.vytrack.pages.QuickLaunchpadPage;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class ProfileNameStepsDefs {

    LoginPage loginPage = new LoginPage();
    Dashboard dashboard = new Dashboard();
    QuickLaunchpadPage quickLaunchpadPage = new QuickLaunchpadPage();

    @Then("the user see their own usernames {string} in profile menu")
    public void the_user_see_their_own_usernames_in_profile_menu(String expectedName) {

        String actualName = dashboard.profilName.getText();

        Assert.assertEquals("Not matching", actualName, expectedName);

    }
}


