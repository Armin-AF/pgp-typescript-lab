# TypesScript with React AddOn

## Task
The task is to create a basic React application for random users. You'll be working towards the `https://randomuser.me/api/` api that will return a random user (you can fetch directly from your frontend this time).

- The UI should display at least the users `address`, `age` and `name`.
- It should also be possible to change the name through a form input (but you don't have to make a post request, just simply update the name in the UI.)
  - in other words, make it possible to change the state of the name field.
- For each new load of the application, a new user should appear.

## UserInfo

A simple React component that displays a user's information and allows the user to edit their name.

## Installation

To install the dependencies for this project, run the following command:

npm install

## Usage

To use the UserInfo component in your project, import it and render it in your JSX code:
import UserInfo from './UserInfo';

// ...

<UserInfo />
The UserInfo component fetches a random user's information from the Random User Generator API and displays their name, age, email, and address. The user can click the "Edit Name" button to enter edit mode, where they can change their first and last name. The user can click the "Cancel" button to exit edit mode.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

