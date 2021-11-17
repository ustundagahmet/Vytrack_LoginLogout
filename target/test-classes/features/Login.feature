Feature: User should be able to login
  @wip
  Scenario Outline: Different user types "<userType>"
    Given the user is on the login page
    When the user logins with username "<userName>" and password "<password>"
    Then the "<userType>" should be able to see "<pageTitle>" page



    Examples:
    | userType        | userName        | password     | pageTitle        |
    | Truck driver    | user10          | UserUser123  | Quick Launchpad  |
    | Store manager   | storemanager60  | UserUser123  | Dashboard        |
    | Sales manager   | salesmanager110 | UserUser123  | Dashboard        |
