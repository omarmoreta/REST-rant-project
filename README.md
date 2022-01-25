# Project REST-Rant

REST-Rant is an app where users can review restaurants.

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
