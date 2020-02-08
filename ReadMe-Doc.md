ROUTES

/employees will return a full list of employees

/employees/:id will return a single employee at the given employee number

/employees/first_name/:first_name will return all employees with the given first name up to 1000

/employees/last_name/:last_name will return all employees with the given last name, up to 1000

SALARIES

/salaries/:id will return the employee with their current salary at the given employee number

/salaries/:id/history will return the requested employee's salary history, given the employee's number

  **OPTIONAL QUERY** API returns result from present to past by default. add a query of "?order=asc" to reverse the order of chronology.

TITLES:

/titles returns a list of all unique titles at the company

/titles/:title returns a list of all employees with the given request paramater "title" this accepts spaces, so for senior developer, send your request to "/titles/senior developer"

This route includes the employee's department name as well. to exclude this info, include a query of "?include_dept=false".

