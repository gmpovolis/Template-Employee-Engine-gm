# Unit 10 OOP Homework: Template Engine - Employee Summary

## Description

The application is a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user.

### User Story
```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

## Usage
Note there is a `package.json`, which contains inquirer and jest so make sure to `npm install` to properly use the application's dependencies.

The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.

🎗 Remember, you can run the tests at any time with `npm run test`, and you can run the application with node app.js


### Classes
The project has these classes: `Employee`, `Manager`, `Engineer`,
`Intern`. The tests for these classes in the `tests` show that all classes are working as intended.

The first class is an `Employee` parent class with the following properties and
methods:

  * name
  * id
  * email
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'

The other three classes will extend `Employee`. 

In addition to `Employee`'s properties and methods, `Manager` will also have:

  * officeNumber

  * getRole() // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` will also have:

  * github  // GitHub username

  * getGithub()

  * getRole() // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` will also have:

  * school 

  * getSchool()

  * getRole() // Overridden to return 'Intern'

### User input

The application prompts the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

### Roster output

The application generates a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

  * Name

  * Role

  * ID

  * Role-specific property (School, link to GitHub profile, or office number)

## Bonus Info/Resources
The link below shows a basic showing of the applications functionality,
The video begins with the testing of the class javascript files,
Then the creation of a basic team consisting of one manager, one intern, and one engineer.
All writen into a team.html file based on user inputs.
https://drive.google.com/file/d/1MSUwcQXDkgSsZBMl6dGjIhq7YeHTjoh-/view