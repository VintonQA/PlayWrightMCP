**Functional Test Cases for DASHBOARD**

| ID | Title | Steps | Expected Result |
| --- | --- | --- | --- |
| 1.1 | Dashboard Navigation | 1. Log in to the application as an admin user. 2. Click on the "Dashboard" link. | The dashboard page is displayed with all the necessary links and information. |
| 1.2 | View All Approved Players | 1. Log in to the application as an admin user. 2. Click on the "TOTAL NUMBERS OF APPROVED PLAYERS" link. | The "View All Approved Players" page is displayed with a list of all approved players. |
| 1.3 | View All Pending Requests | 1. Log in to the application as an admin user. 2. Click on the "View All Pending Requests" link. | The "View All Pending Requests" page is displayed with a list of all pending requests. |
| 1.4 | View Player Profile | 1. Log in to the application as an admin user. 2. Click on the "bolt" link to view a player's profile. | The player's profile page is displayed with their information and details. |
| 1.5 | View All Users | 1. Log in to the application as an admin user. 2. Click on the "View All Users" link. | The "View All Users" page is displayed with a list of all users. |
| 1.6 | View All Games | 1. Log in to the application as an admin user. 2. Click on the "View All Game" link. | The "View All Games" page is displayed with a list of all games. |

**UI Test Cases for DASHBOARD**

| ID | Title | Steps | Expected Result |
| --- | --- | --- | --- |
| 2.1 | Dashboard Layout | 1. Log in to the application as an admin user. 2. Check the layout of the dashboard page. | The dashboard page has a consistent layout with all the necessary links and information. |
| 2.2 | Link Navigation | 1. Log in to the application as an admin user. 2. Click on a link to navigate to a different page. 3. Check if the link is working correctly. | The link navigates to the correct page and displays the expected information. |
| 2.3 | Button Functionality | 1. Log in to the application as an admin user. 2. Click on a button to perform an action. 3. Check if the button is working correctly. | The button performs the expected action and displays the expected result. |
| 2.4 | Input Field Validation | 1. Log in to the application as an admin user. 2. Enter invalid data in an input field. 3. Check if the input field is validated correctly. | The input field is validated correctly and displays an error message. |

**Edge Cases for DASHBOARD**

| ID | Title | Steps | Expected Result |
| --- | --- | --- | --- |
| 3.1 | Large Number of Approved Players | 1. Log in to the application as an admin user. 2. Create a large number of approved players. 3. Check if the "TOTAL NUMBERS OF APPROVED PLAYERS" link is working correctly. | The "TOTAL NUMBERS OF APPROVED PLAYERS" link displays the correct number of approved players. |
| 3.2 | Large Number of Pending Requests | 1. Log in to the application as an admin user. 2. Create a large number of pending requests. 3. Check if the "View All Pending Requests" link is working correctly. | The "View All Pending Requests" link displays the correct number of pending requests. |
| 3.3 | Large Number of Users | 1. Log in to the application as an admin user. 2. Create a large number of users. 3. Check if the "View All Users" link is working correctly. | The "View All Users" link displays the correct number of users. |
| 3.4 | Large Number of Games | 1. Log in to the application as an admin user. 2. Create a large number of games. 3. Check if the "View All Games" link is working correctly. | The "View All Games" link displays the correct number of games. |

**Negative Test Cases for DASHBOARD**

| ID | Title | Steps | Expected Result |
| --- | --- | --- | --- |
| 4.1 | Invalid Login Credentials | 1. Log in to the application with invalid login credentials. 2. Check if the login is rejected correctly. | The login is rejected and an error message is displayed. |
| 4.2 | Missing Required Fields | 1. Log in to the application as an admin user. 2. Click on a link to navigate to a different page. 3. Check if the link is working correctly. | The link is not working correctly and an error message is displayed. |
| 4.3 | Invalid Data Entry | 1. Log in to the application as an admin user. 2. Enter invalid data in an input field. 3. Check if the input field is validated correctly. | The input field is not validated correctly and an error message is not displayed. |
| 4.4 | Insufficient Permissions | 1. Log in to the application as a user with insufficient permissions. 2. Check if the user can access certain links or perform certain actions. | The user cannot access certain links or perform certain actions and an error message is displayed. |