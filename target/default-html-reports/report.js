$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "User should be able to login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Different user types",
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
  "name": "the user types username \"\u003cuserName\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user should be able to see \"\u003cpageTitle\u003e\" page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "pageTitle",
        "userName",
        "password"
      ]
    },
    {
      "cells": [
        "Quick Launchpad",
        "user10",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "Dashboard",
        "storemanager60",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "Dashboard",
        "salesmanager110",
        "UserUser123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Different user types",
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
  "name": "the user types username \"user10\" and password \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_types_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see \"Quick Launchpad\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_should_be_able_to_see_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Different user types",
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
  "name": "the user types username \"storemanager60\" and password \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_types_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see \"Dashboard\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_should_be_able_to_see_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Different user types",
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
  "name": "the user types username \"salesmanager110\" and password \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_types_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see \"Dashboard\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepsDefs.the_user_should_be_able_to_see_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
});