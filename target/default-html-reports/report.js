$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
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
      "name": "@wip"
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
      "name": "@wip"
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
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Different user types \"Store manager\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
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
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Different user types \"Sales manager\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
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
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
});