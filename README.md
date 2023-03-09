# Invitation Generator for The Church of Jesus Christ of Latter-day Saints Speeches

This project aims to create a tool for generating invitations for speeches of The Church of Jesus Christ of Latter-day Saints. It includes a login page for two types of users (Bishopric and Secretary), a dashboard with options for managing invitations, searching previous invitations, managing speakers, and managing users (for administrators only). The project uses HTML, CSS, JavaScript, Bootstrap, Angular, Node.js, and MongoDB.

## Disclaimer:

This project is created solely for the purpose of practicing development skills and for friendly use. The creator of this project is not an employee of The Church of Jesus Christ of Latter-day Saints and has no contract or affiliation with the organization. This project is not intended for commercial use or profit.

## Features

### Sprint 1
- Login page for Bishopric and Secretary users
- Bishopric users can manage other users
- Secretary users can manage invitations

### Sprint 2
- Dashboard with options for managing invitations, speakers, users, and searching previous invitations
- CRUD operations for managing users and speakers
- CRUD operations for managing invitations and a search option by speaker

### Sprint 3
- Creation of a new invitation with fields for speaker, topic, time, reference, and date
- Generation of an A4-sized PDF with the information entered and a standard text for the invitation, including some recommendations and citations, and a field for the Bishopric member's signature
- Ability for the Administrator user to edit the standard text

## Installation

To run this project, you need to have Node.js and MongoDB installed on your machine.

1. Clone the repository: `git clone https://github.com/felipesud/latter-day-talks.git`
2. Navigate to the project directory: `cd latter-day-talks`
3. Install the dependencies: `npm install`
4. Run the project: `npm start`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/felipesud/latter-day-talks/blob/master/LICENSE) file for details.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
