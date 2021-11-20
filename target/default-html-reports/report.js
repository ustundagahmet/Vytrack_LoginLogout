$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ForgotPassword.feature");
formatter.feature({
  "name": "Landing on \"Forgot Password\" page",
  "description": "  Agile Story: User land on the ‘Forgot Password’ page after clicking on the \"Forgot your password?\" link",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Landing on \"Forgot Password\" page after clicking the link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Forgot your password? link",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ForgotPassword.the_user_clicks_the_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should be navigated to the password page from the login page.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ForgotPassword.the_user_should_be_navigated_to_the_password_page_from_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "User should be able to login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Different user types \"\u003cuserType\u003e\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user logins with username \"\u003cuserName\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the \"\u003cuserType\u003e\" should be able to see \"\u003cpageTitle\u003e\" page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userType",
        "userName",
        "password",
        "pageTitle"
      ]
    },
    {
      "cells": [
        "Truck driver",
        "user10",
        "UserUser123",
        "Quick Launchpad"
      ]
    },
    {
      "cells": [
        "Store manager",
        "storemanager60",
        "UserUser123",
        "Dashboard"
      ]
    },
    {
      "cells": [
        "Sales manager",
        "salesmanager110",
        "UserUser123",
        "Dashboard"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Different user types \"Truck driver\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"user10\" and password \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Truck driver\" should be able to see \"Quick Launchpad\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_should_be_able_to_see_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Different user types \"Store manager\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"storemanager60\" and password \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Store manager\" should be able to see \"Dashboard\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_should_be_able_to_see_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Different user types \"Sales manager\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"salesmanager110\" and password \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Sales manager\" should be able to see \"Dashboard\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_should_be_able_to_see_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login functions with invalid info for different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user logins with username \"\u003cuserName\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the following \"\u003cmessage\u003e\" should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "message"
      ]
    },
    {
      "cells": [
        "user",
        "wrong",
        "Invalid user name or password."
      ]
    },
    {
      "cells": [
        "user1",
        "123",
        "Invalid user name or password."
      ]
    },
    {
      "cells": [
        "user",
        "UserUser123",
        "Invalid user name or password."
      ]
    },
    {
      "cells": [
        "",
        "",
        "Please fill out this field."
      ]
    },
    {
      "cells": [
        "",
        "UserUser123",
        "Please fill out this field."
      ]
    },
    {
      "cells": [
        "user1",
        "",
        "Please fill out this field."
      ]
    },
    {
      "cells": [
        "salesmanager101",
        "123",
        "Invalid user name or password."
      ]
    },
    {
      "cells": [
        "user",
        "UserUser123",
        "Invalid user name or password."
      ]
    },
    {
      "cells": [
        "",
        "UserUser123",
        "Please fill out this field."
      ]
    },
    {
      "cells": [
        "salesmanager101",
        "",
        "Please fill out this field."
      ]
    },
    {
      "cells": [
        "storemanager51",
        "123",
        "Invalid user name or password."
      ]
    },
    {
      "cells": [
        "user",
        "UserUser123",
        "Invalid user name or password."
      ]
    },
    {
      "cells": [
        "",
        "UserUser123",
        "Please fill out this field."
      ]
    },
    {
      "cells": [
        "storemanager51",
        "",
        "Please fill out this field."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login functions with invalid info for different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"user\" and password \"wrong\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the following \"Invalid user name or password.\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_following_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login functions with invalid info for different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"user1\" and password \"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the following \"Invalid user name or password.\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_following_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login functions with invalid info for different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"user\" and password \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the following \"Invalid user name or password.\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_following_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login functions with invalid info for different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"\" and password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the following \"Please fill out this field.\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_following_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login functions with invalid info for different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"\" and password \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the following \"Please fill out this field.\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_following_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login functions with invalid info for different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"user1\" and password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the following \"Please fill out this field.\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_following_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login functions with invalid info for different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"salesmanager101\" and password \"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the following \"Invalid user name or password.\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_following_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login functions with invalid info for different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"user\" and password \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the following \"Invalid user name or password.\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_following_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login functions with invalid info for different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"\" and password \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the following \"Please fill out this field.\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_following_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login functions with invalid info for different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"salesmanager101\" and password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the following \"Please fill out this field.\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_following_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login functions with invalid info for different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"storemanager51\" and password \"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the following \"Invalid user name or password.\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_following_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded14.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login functions with invalid info for different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"user\" and password \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the following \"Invalid user name or password.\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_following_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded15.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login functions with invalid info for different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"\" and password \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the following \"Please fill out this field.\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_following_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded16.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login functions with invalid info for different users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"storemanager51\" and password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the following \"Please fill out this field.\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_following_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded17.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Password.feature");
formatter.feature({
  "name": "The password in bullet signs by default",
  "description": "  Agile Story: User should see the password in bullet signs by default",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "the password in bullet signs by default",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user types \"password\" in Password Input",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.PasswordBulletSign.the_user_types_in_Password_Input(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should able to see the password as bullet signs",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.PasswordBulletSign.the_user_should_able_to_see_the_password_as_bullet_signs()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded18.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/PasteUrl.feature");
formatter.feature({
  "name": "The system shouldn\u0027t allow users to login to application without providing valid credentials",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "copy the url after log in, then log out, paste the same url to browser and try to skip authentication step",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login Base Page successfully",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.login_Base_Page_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs out Base Page",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logs_out_Base_Page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d95.0.4638.69)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-9EUP64B\u0027, ip: \u0027192.168.2.130\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.69, chrome: {chromedriverVersion: 95.0.4638.69 (6a1600ed572fe..., userDataDir: C:\\Users\\neust\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56997}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ab910a45172908e948007c9d60bd362c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.GeneratedMethodAccessor4.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.vytrack.step_definitions.LoginStepsDefs.the_user_logs_out_Base_Page(LoginStepsDefs.java:126)\r\n\tat ✽.the user logs out Base Page(file:///C:/Users/neust/IdeaProjects/Vytrack_LoginLogout/src/test/resources/features/PasteUrl.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user pastes the copied Url to browser",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_pastes_the_copied_Url_to_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user must stay on login pages",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_must_stay_on_login_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded19.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/UserNameInProfilMenu.feature");
formatter.feature({
  "name": "Username in Profile Menu",
  "description": "  Agile Story: All users can see their own usernames in profile menu, after successful login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Profile name should be able to seen.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user logins with username \"\u003cuserName\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user see their own usernames \"\u003cprofileName\u003e\" in profile menu",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "profileName"
      ]
    },
    {
      "cells": [
        "user10",
        "UserUser123",
        "John Doe"
      ]
    },
    {
      "cells": [
        "storemanager60",
        "UserUser123",
        "John Doe"
      ]
    },
    {
      "cells": [
        "salesmanager110",
        "UserUser123",
        "John Doe"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Profile name should be able to seen.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"user10\" and password \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user see their own usernames \"John Doe\" in profile menu",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ProfileNameStepsDefs.the_user_see_their_own_usernames_in_profile_menu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded20.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Profile name should be able to seen.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"storemanager60\" and password \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user see their own usernames \"John Doe\" in profile menu",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ProfileNameStepsDefs.the_user_see_their_own_usernames_in_profile_menu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded21.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Profile name should be able to seen.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logins with username \"salesmanager110\" and password \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_logins_with_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user see their own usernames \"John Doe\" in profile menu",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ProfileNameStepsDefs.the_user_see_their_own_usernames_in_profile_menu(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Not matching expected:\u003c[]\u003e but was:\u003c[John Doe]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat com.vytrack.step_definitions.ProfileNameStepsDefs.the_user_see_their_own_usernames_in_profile_menu(ProfileNameStepsDefs.java:20)\r\n\tat ✽.the user see their own usernames \"John Doe\" in profile menu(file:///C:/Users/neust/IdeaProjects/Vytrack_LoginLogout/src/test/resources/features/UserNameInProfilMenu.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded22.png", "screenshot");
formatter.after({
  "status": "passed"
});
});