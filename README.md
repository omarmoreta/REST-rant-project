# Project REST-Rant

<<<<<<< Updated upstream
REST-Rant is an app where users can review restaurants.

### Routes table

| Method | Path                       | Purpose                                          |
| ------ | -------------------------- | ------------------------------------------------ |
| GET    | `/`                        | Home page                                        |
| GET    | `/places`                  | Places index page                                |
| POST   | `/places`                  | Create new place                                 |
| GET    | `/places/new`              | Form page for creating a new place               |
| GET    | `/places:id`               | Details about a particular place                 |
| PUT    | `/places:id`               | Update a particular place                        |
| GET    | `/places/:id/edit`         | Form page for editing an existing place          |
| DELETE | `/places/:id`              | Delete a particular place                        |
| POST   | `/places/:id/rant`         | Create a rant (comment) about a particular place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant (comment) about a particular place |
| GET    | `\*`                       | 404 page (matches any route not defined above)   |
=======
REST-Rant is an app where users can view restaurants and their comments and reviews ratings.

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
>>>>>>> Stashed changes

### Data structure

| Field Name | Data Type      |
| ---------- | -------------- |
| name       | string         |
| city       | string         |
| state      | string         |
| cuisines   | string         |
| pic        | string (a URL) |
<<<<<<< Updated upstream
=======
| founded    | number         |
>>>>>>> Stashed changes
