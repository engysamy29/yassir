Feature: Automation Test

    Scenario: E2E Checkout with multiple Items

        Given User is on Home Page
        When user login with username "standard_user" and password "secret_sauce"
        Then Verify user is loggedin
        And Verify twitter Logo
        When user add "Bolt T-Shirt,Bike Light" into cart
        And user click on cart button
        Then Verify "2" items added correctly
        When user click checkout button
        Then Verify that Checkout form appears
        When user firstname "Engy", "Samy" lastname, and "67663" zipCode
        Then Verify that "Bolt T-Shirt" displayed in cart
        Then Verify that "Bike Light" displayed in cart
        When user click finish button
        Then Verify Order placed succefully


    Scenario: E2E Checkout with single Item

        Given User is on Home Page
        When user login with username "standard_user" and password "secret_sauce"
        Then Verify user is loggedin
        And Verify twitter Logo
        When user add "Bolt T-Shirt" into cart
        And user click on cart button
        Then Verify "1" items added correctly
        When user click checkout button
        Then Verify that Checkout form appears
        When user firstname "Engy", "Samy" lastname, and "67663" zipCode
        Then Verify that "Bolt T-Shirt" displayed in cart
        When user click finish button
        Then Verify Order placed succefully
