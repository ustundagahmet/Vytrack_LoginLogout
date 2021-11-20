package com.vytrack.step_definitions;

import com.vytrack.pages.LoginPage;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class PasswordBulletSign {

    LoginPage loginPage = new LoginPage();

    @When("the user types {string} in Password Input")
    public void the_user_types_in_Password_Input(String password) {

        loginPage.login( "user", password);

    }

    @Then("the user should able to see the password as bullet signs")
    public void the_user_should_able_to_see_the_password_as_bullet_signs() {

    String actualType = loginPage.passwordBox.getAttribute("type");

    Assert.assertEquals("Type not matching", "password" , actualType);

    }

}
