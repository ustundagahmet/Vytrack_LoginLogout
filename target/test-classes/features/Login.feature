Feature: User should be able to login
  @smoke
  #AC1
  Scenario Outline: Different user types "<userType>"
    Given the user is on the login page
    When the user logins with username "<userName>" and password "<password>"
    Then the "<userType>" should be able to see "<pageTitle>" page



    Examples:
    | userType        | userName        | password     | pageTitle        |
    | Truck driver    | user10          | UserUser123  | Quick Launchpad  |
    | Store manager   | storemanager60  | UserUser123  | Dashboard        |
    | Sales manager   | salesmanager110 | UserUser123  | Dashboard        |

  @smoke

  #AC2-4
  Scenario Outline: Login functions with invalid info for different users
    Given the user is on the login page
    When the user logins with username "<userName>" and password "<password>"
    Then the following "<message>" should be displayed
    Examples:
      | userName        | password    | message                        |
      | user            | wrong       | Invalid user name or password. |
      | user1           | 123         | Invalid user name or password. |
      | user            | UserUser123 | Invalid user name or password. |
      |                 |             | Please fill out this field.    |
      |                 | UserUser123 | Please fill out this field.    |
      | user1           |             | Please fill out this field.    |
      | salesmanager101 | 123         | Invalid user name or password. |
      | user            | UserUser123 | Invalid user name or password. |
      |                 | UserUser123 | Please fill out this field.    |
      | salesmanager101 |             | Please fill out this field.    |
      | storemanager51  | 123         | Invalid user name or password. |
      | user            | UserUser123 | Invalid user name or password. |
      |                 | UserUser123 | Please fill out this field.    |
      | storemanager51  |             | Please fill out this field.    |


    #AC7
    Scenario: "Remember me on this computer" link on the login page and it should be clickable
      Given the user is on the login page
      Then User should be able to see Remember me on this computer link
      And User should be able to click this link


