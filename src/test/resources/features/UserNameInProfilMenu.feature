Feature: Username in Profile Menu

  Agile Story: All users can see their own usernames in profile menu, after successful login
  @smoke
#AC3
  Scenario Outline: Profile name should be able to seen.
    Given the user is on the login page
    When the user logins with username "<userName>" and password "<password>"
    Then the user see their own usernames "<profileName>" in profile menu

    Examples:
      | userName        | password    | profileName |
      | user10          | UserUser123 | John Doe    |
      | storemanager60  | UserUser123 | John Doe    |
      | salesmanager110 | UserUser123 | John Doe    |



