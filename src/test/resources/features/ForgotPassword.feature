Feature: Landing on "Forgot Password" page

  Agile Story: User land on the ‘Forgot Password’ page after clicking on the "Forgot your password?" link

  @smoke
  #AC6
  Scenario: Landing on "Forgot Password" page after clicking the link
    Given the user is on the login page
    When the user clicks the Forgot your password? link
    Then The user should be navigated to the password page from the login page.