# Simple Todo App

This is a Simple To Do Task application.

## Functionality

The Simple To Do Task application allows you to create tasks with the option of setting a deadline. It allows you to mark the task as completed via checkbox. The tasks can also be deleted at any time whether complete or not completed. There is no limit to how many tasks a user can create. The tasks have a maximum character limit of 40. This allows for quick visibility without expanding the window. The dates are automatically set once the user selects their dates based on a pop-up calendar.

## Technology

The general layout was created in HTML with styles done in CSS. The form is based on a template with Javascript filling in the user inputs. Javascript is also being used to validate all the fields.

The javascript is set-up in two classes.

To Do list class
• utilizing two arguments (data it grabs from the array and selector to pull the template elements)
• private event listeners for the delete button and checkbox
• public get View method which handles generating the markup from the template and adding data to the elements
• each task has a unique ID generated each time it's created

Form Validation Class
• Its constructor accepts two parameters: the first is a settings object that stores the necessary selectors and classes; the second takes a form element to be validated
• private methods for processing the form, which include: checking the field's validity, changing the state of the Submit button, and adding all the necessary handlers
• public method which enables validation
• public method to disable the submit button and reset the form fields



## Deployment

This project is deployed on GitHub Pages:

- ADD LINK HERE
