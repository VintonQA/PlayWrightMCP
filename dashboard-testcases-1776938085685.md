**Functional Test Cases for DASHBOARD**

| ID | Title | Steps | Expected Result |
| --- | --- | --- | --- |
| 1.1 | Dashboard Navigation | 1. Log in to the system as an administrator. 2. Click on the "Dashboard" link. | The dashboard page is displayed with all the necessary links and information. |
| 1.2 | View All Pending Requests | 1. Log in to the system as an administrator. 2. Click on the "View All Pending Requests" link. | The pending requests page is displayed with all the pending requests. |
| 1.3 | View All Users | 1. Log in to the system as an administrator. 2. Click on the "View All Users" link. | The players page is displayed with all the users. |
| 1.4 | View All Game | 1. Log in to the system as an administrator. 2. Click on the "View All Game" link. | The game management page is displayed with all the games. |
| 1.5 | Toggle Navigation | 1. Log in to the system as an administrator. 2. Click on the "Toggle navigation" link. | The navigation menu is toggled on and off. |
| 1.6 | View Player Information | 1. Log in to the system as an administrator. 2. Click on the "bolt" link to view a player's information. | The player's information page is displayed with all the necessary details. |

**UI Test Cases for DASHBOARD**

| ID | Title | Steps | Expected Result |
| --- | --- | --- | --- |
| 2.1 | Dashboard Layout | 1. Log in to the system as an administrator. 2. Check the layout of the dashboard page. | The dashboard page has a consistent layout with all the necessary links and information. |
| 2.2 | Button Text | 1. Log in to the system as an administrator. 2. Check the text on the buttons. | The buttons have the correct text. |
| 2.3 | Link Text | 1. Log in to the system as an administrator. 2. Check the text on the links. | The links have the correct text. |
| 2.4 | Input Field Placeholder | 1. Log in to the system as an administrator. 2. Check the placeholder text on the input field. | The input field has a placeholder text. |
| 2.5 | Error Messages | 1. Log in to the system as an administrator. 2. Try to submit a form with invalid data. | Error messages are displayed indicating the invalid data. |

**Edge Cases for DASHBOARD**

| ID | Title | Steps | Expected Result |
| --- | --- | --- | --- |
| 3.1 | Large Number of Pending Requests | 1. Log in to the system as an administrator. 2. Create a large number of pending requests. 3. Click on the "View All Pending Requests" link. | The pending requests page is displayed with all the pending requests, but it may take some time to load. |
| 3.2 | Large Number of Users | 1. Log in to the system as an administrator. 2. Create a large number of users. 3. Click on the "View All Users" link. | The players page is displayed with all the users, but it may take some time to load. |
| 3.3 | Large Number of Games | 1. Log in to the system as an administrator. 2. Create a large number of games. 3. Click on the "View All Game" link. | The game management page is displayed with all the games, but it may take some time to load. |
| 3.4 | No Pending Requests | 1. Log in to the system as an administrator. 2. Delete all pending requests. 3. Click on the "View All Pending Requests" link. | The pending requests page is displayed with a message indicating that there are no pending requests. |
| 3.5 | No Users | 1. Log in to the system as an administrator. 2. Delete all users. 3. Click on the "View All Users" link. | The players page is displayed with a message indicating that there are no users. |
| 3.6 | No Games | 1. Log in to the system as an administrator. 2. Delete all games. 3. Click on the "View All Game" link. | The game management page is displayed with a message indicating that there are no games. |

**Negative Test Cases for DASHBOARD**

| ID | Title | Steps | Expected Result |
| --- | --- | --- | --- |
| 4.1 | Invalid Login Credentials | 1. Try to log in with invalid login credentials. | An error message is displayed indicating that the login credentials are invalid. |
| 4.2 | Missing Required Fields | 1. Try to submit a form with missing required fields. | An error message is displayed indicating that the required fields are missing. |
| 4.3 | Invalid Data | 1. Try to submit a form with invalid data. | An error message is displayed indicating that the data is invalid. |
| 4.4 | Insufficient Permissions | 1. Try to access a page that requires higher permissions. | An error message is displayed indicating that the user does not have sufficient permissions. |
| 4.5 | Server Error | 1. Try to access a page that is not available due to a server error. | An error message is displayed indicating that the server is experiencing technical difficulties. |