Feature: User should be able to login
  @wip
  Scenario Outline: Different user types
    Given the user logs in as "<userType>"
    When the user types username "<userName>" and password "<password>"
    And the user presses the "Submit" button
    Then the user should be able to see "Basepage"



    Examples:
    | userType       | userName        | password    |
    | Truck driver   | user10          | UserUser123 |
    | Store manager  | storemanager60  | UserUser123 |
    | Sales manager  | salesmanager110 | UserUser123 |
