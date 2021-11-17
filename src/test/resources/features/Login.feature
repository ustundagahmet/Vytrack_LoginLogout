Feature: User should be able to login
  @wip
  Scenario Outline: Different user types
    Given the user is on the login page
    When the user types username "<userName>" and password "<password>"
    Then the user should be able to see "<pageTitle>" page



    Examples:
    | pageTitle        | userName        | password    |
    | Quick Launchpad | user10          | UserUser123 |
    | Dashboard       | storemanager60  | UserUser123 |
    | Dashboard       | salesmanager110 | UserUser123 |
