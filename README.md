# Project REST-Rant

REST-Rant is an app where users can review restaurants. Users can get, create, update, or delete restaurants and/or comments.

Checkout the live app here: https://rest-rant-project.herokuapp.com/

### How to use

Go to the add places tab to add a restaurant. Click on the places tab on the nav bar after adding a place to leave a comment or rant about the restaurant.
You can delete the comment or edit the place. You can also delete the place. Everything
will be saved on a database, so feel comfortable browsing freely!

Dependencies: bootstrap, express, mongoose, react, node and bootstrap.

You can fork the repo and clone the project to your local machine.
Open the project and install all the dependencies using npm install in your terminal.
To run the project use npm start command.

### Routes table

| Method | Path                             | Purpose                                   |
| ------ | -------------------------------- | ----------------------------------------- |
| GET    | `/`                              | Places home page                          |
| GET    | `/places`                        | Get all places                            |
| POST   | `/places`                        | Create new place                          |
| GET    | `/places/new`                    | Creating a new place form                 |
| GET    | `/places:id`                     | Get details about a particular place      |
| PUT    | `/places:id`                     | Update a particular place                 |
| GET    | `/places/:id/edit`               | Update a particular place                 |
| DELETE | `/places/:id`                    | Delete a particular place                 |
| POST   | `/places/:id/comment`            | Create comment about a particular place   |
| DELETE | `/places/:id/comment/:commentId` | Delete a comment about a particular place |

### Data structure

| Field Name | Data Type      |
| ---------- | -------------- |
| name       | string         |
| city       | string         |
| state      | string         |
| cuisines   | string         |
| pic        | string (a URL) |
| founded    | number         |

If you would like to contribute to the project, fork the repo, make a new branch and push the changes, afterwards make a pull request so they can be reviewed and accepted. 

### Changelog
Lasted changes to the oldest changes.

- reverted to original
- changed the navbar
- install react-bootstrap for styling
- default picture for when no url is given
- added procfile to redirect to web
- fixing server problems
- added goofy404 to routes
- fixed the image bug
- added 404 default for new places
- Merge branch 'master' of https://github.com/omarmoreta/REST-rant-project
- added seeder places and comments
- Update README.md
- added how to use to the README
- added node engine
- added npm start to package json for deployment
- Merge branch 'master' of https://github.com/omarmoreta/REST-rant-project
- made some changes to README
- fixed README
- Merge pull request #1 from omarmoreta/mongoose
- last finishing touches to the forms
- fixed edit route and form
- added comments delete button and route
- added comments, ratings and put controller

