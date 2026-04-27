**Functional Test Cases for DASHBOARD**

| ID | Title | Steps | Expected Result |
| --- | --- | --- | --- |
| 1.1 | Dashboard Navigation | 1. Log in to the application as an administrator. <br> 2. Click on the "Dashboard" link. | The dashboard page is displayed with all the necessary links and information. |
| 1.2 | View All Pending Requests | 1. Log in to the application as an administrator. <br> 2. Click on the "View All Pending Requests" link. | The pending requests page is displayed with all the pending requests. |
| 1.3 | View All Users | 1. Log in to the application as an administrator. <br> 2. Click on the "View All Users" link. | The users page is displayed with all the users. |
| 1.4 | View All Game | 1. Log in to the application as an administrator. <br> 2. Click on the "View All Game" link. | The game management page is displayed with all the games. |
| 1.5 | Toggle Navigation | 1. Log in to the application as an administrator. <br> 2. Click on the "Toggle navigation" link. | The navigation menu is toggled on and off. |

**UI Test Cases for DASHBOARD**

| ID | Title | Steps | Expected Result |
| --- | --- | --- | --- |
| 2.1 | Dashboard Layout | 1. Log in to the application as an administrator. <br> 2. Check the layout of the dashboard page. | The dashboard page has a consistent layout with all the necessary links and information. |
| 2.2 | Button Styles | 1. Log in to the application as an administrator. <br> 2. Check the styles of the buttons on the dashboard page. | The buttons on the dashboard page have a consistent style. |
| 2.3 | Link Text | 1. Log in to the application as an administrator. <br> 2. Check the text of the links on the dashboard page. | The text of the links on the dashboard page is consistent and accurate. |
| 2.4 | Input Field Placeholder | 1. Log in to the application as an administrator. <br> 2. Check the placeholder text of the input field on the dashboard page. | The placeholder text of the input field on the dashboard page is accurate and consistent. |

**Edge Cases for DASHBOARD**

| ID | Title | Steps | Expected Result |
| --- | --- | --- | --- |
| 3.1 | Large Number of Pending Requests | 1. Log in to the application as an administrator. <br> 2. Create a large number of pending requests. <br> 3. Click on the "View All Pending Requests" link. | The pending requests page is displayed with all the pending requests, and the application does not crash. |
| 3.2 | Large Number of Users | 1. Log in to the application as an administrator. <br> 2. Create a large number of users. <br> 3. Click on the "View All Users" link. | The users page is displayed with all the users, and the application does not crash. |
| 3.3 | Large Number of Games | 1. Log in to the application as an administrator. <br> 2. Create a large number of games. <br> 3. Click on the "View All Game" link. | The game management page is displayed with all the games, and the application does not crash. |

**Negative Test Cases for DASHBOARD**

| ID | Title | Steps | Expected Result |
| --- | --- | --- | --- |
| 4.1 | Invalid Login Credentials | 1. Log in to the application with invalid login credentials. <br> 2. Click on the "Dashboard" link. | An error message is displayed indicating that the login credentials are invalid. |
| 4.2 | Missing Required Fields | 1. Log in to the application as an administrator. <br> 2. Click on the "Dashboard" link. <br> 3. Try to submit the form without filling in the required fields. | An error message is displayed indicating that the required fields are missing. |
| 4.3 | Invalid Input | 1. Log in to the application as an administrator. <br> 2. Click on the "Dashboard" link. <br> 3. Try to submit the form with invalid input. | An error message is displayed indicating that the input is invalid. |