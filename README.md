README.md
User Registration Form

This project is a simple User Registration Form built using HTML, CSS, and JavaScript. It validates user input and sends form data to the GoRest public API using the Fetch API.

Features
Form validation
Required field error messages
API integration using Fetch API
Handles duplicate email errors
Gender selection
User status handling
Prevents page refresh on form submit
Technologies Used
HTML
CSS
JavaScript
Form Fields

The form checks:

Name should not be empty
Email should not be empty
Displays custom error messages
API Used

How It Works:

User enters details in the form
JavaScript validates the input
Data is converted into JSON format
Fetch API sends POST request
API response is handled
Error shown if email already exists
Project Structure
project-folder/
│
├── index.html
├── style.css
└── script.js

