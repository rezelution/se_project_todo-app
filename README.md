# Simple Todo App

This is a Simple To Do Task application.

## Functionality

The Simple To Do Task application allows you to create tasks with the option of setting a deadline. It allows you to mark the task as completed via checkbox. The tasks can also be deleted at any time whether complete or not completed. There is no limit to how many tasks a user can create. The tasks have a maximum character limit of 40. This allows for quick visibility without expanding the window. The dates are automatically set once the user selects their dates based on a pop-up calendar.

## Technology

The general layout was created in HTML with styles done in CSS. The form is based on a template with Javascript filling in the user inputs. Javascript is also being used to validate all the fields.

#### The javascript is set-up in two classes.

#### To Do list class
- utilizing two arguments (data it grabs from the array and selector to pull the template elements)
- private event listeners for the delete button and checkbox
- public get View method which handles generating the markup from the template and adding data to the elements
- each task has a unique ID generated each time it's created

#### Form Validation Class
- Its constructor accepts two parameters: the first is a settings object that stores the necessary selectors and classes; the second takes a form element to be validated
- private methods for processing the form, which include: checking the field's validity, changing the state of the Submit button, and adding all the necessary handlers
- public method which enables validation
- public method to disable the submit button and reset the form fields

![To Do App](https://github.com/user-attachments/assets/a413b526-8193-49d3-ad2c-78ea311fa18a)

![Creating a new task](https://github.com/user-attachments/assets/85c8956b-4f6e-4a3e-9f34-c727d0e150af)

![Setting a date](https://github.com/user-attachments/assets/e3625b19-fc2e-41cf-9d74-611255f37c42)

![Example of tasks](https://github.com/user-attachments/assets/12346c30-5d6e-47a7-b517-f40e234860dc)


## Deployment

This project is deployed on GitHub Pages:

- [ToDo App Link](https://rezelution.github.io/se_project_todo-app/)
