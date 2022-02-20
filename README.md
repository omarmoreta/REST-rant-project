# Project REST-Rant

REST-Rant is an app where users can review restaurants.
checkout the live app here: https://rest-rant-project.herokuapp.com/

### How to use

Go to the add places tab to add a place. Click on the place link after adding a place to leave a comment.
You can delete the comment or edit the place. You can also delete the place. Everything
will be saved on a MongoDB database, so feel comfortable browsing freely!

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
