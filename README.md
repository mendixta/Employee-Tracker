# Employee Tracker 

# Summary: 
For this assignment, we were asked to create a command-line application from scratch to manage a company's employee database using: Node.js, Inquirer and MySQL. When the command-line application loads, the user is presented with the following options to choose from:

- View All Departments: A formatted table shows all department names and department ID's

- View All Roles: Shows a job title, role ID, the department the role belongs to, and the salary for that role

- View All Employees: A formatted table shows employee data including employee IDs, first names, last names, job titles, departments, 
salaries, and managers that the employees report to.

- Add a Department: A prompt shows up where a user must add the name of the department, and that department is added to the database.

- Add a Role: A prompt shows up where a user must add the name, salary, and department, that role is then added to the database

- Add an Employee: A promt shows up to add the employees first name, last name, role, and manager, that employee is then added to the database.

- Update an Employee: A prompt shows up to give the user a list of employees to chose from, when a selected employee is selected, then that information is added to the database.

# Installation: 
Git Clone the Employee Tracker on your command line using the command "git clone {SSH URL or HTTPs URL}" in a place of your choosing. After the app's files are onto your computer, you want to navigate to where the Employee Tracker is on the command line and intall the following packages:

- MySQL2: Command to install - npm i mysql2 
- Inquirer: Command to install: npm i inquirer
- Console Table: Command to install: npm i console.table

After this is done, you can start the app by using the command "node index.js" or "npm start" on the command line, a menu of options should appear

# Issues:
* Connection Error: Whenever the app would be started using the command "node index.js", you would be presented with the menu with the options but there would be a connection error that went along with it.

After a couple of runs and tests, instead of using the "mysql2" package, I decided to use the "mysql" package instead and the app started working but displayed errors when a menu option was selected.

* Adding Employee: Whenever an employee is added, there is no console log of it being successfully added, but when the option "View Employees" is selected, new employee is seen

# Walk Through Video:
https://vimeo.com/682420208