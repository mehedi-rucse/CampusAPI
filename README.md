FORMAT: 1A
HOST: 127.0.0.1:3000

# Campus API

A Node.js web application “Campus” where i will be building a Node.js RESTful API for creating, updating, retrieving or deleting users information.

## Users [/campus/user]

### List All Users [GET]

This action will show this list of the users that the database contains.

+ Response 200 (application/json)

        [
            {
                "status": "success",
                "result": 2,
                "data": {
                    "users": [
                        {
                            "_id": "5e0c7abdbeae0b2f386e206d",
                            "Name": "MD. Mehedi Hasan",
                            "Roll": "1810976114",
                            "Session": "2017-18",
                            "__v": 0
                        },
                        {
                            "_id": "5e0c7b04beae0b2f386e206e",
                            "Name": "Syed RAfiul Kabir",
                            "Roll": "1810976101",
                            "Session": "2017-18",
                            "__v": 0
                        }
                    ]
                }
            }
        ]

### Entering data of new User [POST]

You may enter new user using this action. It takes a JSON
object containing the followings:
    1. Name
    2. Roll
    3. Session

+ Request (application/json)
    
        {
            "Name": "Syed RAfiul Kabir",
            "Roll": "1810976101",
            "Session": "2017-18"
        }

+ Response 201 (application/json)

    + Headers

            Location: 127.0.0.1:3000/campus/user

    + Body

            {
                "status": "success",
                "data": {
                    "newUser": {
                        "_id": "5e0c7cbbbeae0b2f386e206f",
                        "Name": "Syed RAfiul Kabir",
                        "Roll": "1810976101",
                        "Session": "2017-18",
                        "__v": 0
                    }
                }
            }
            
### Update an Existing User [PATCH]

The upadate of an existing user information can be done through this action. As the
patch function is implemented for this action, the whole information of that
product will be changed and this will be done using the id of that user.

Using the id: 5e0c7b04beae0b2f386e206e

+ Request (application/json)

        {
            "Name": "Syed Rafiul Kabir",
            "Roll": "1810976101",
            "Session": "2017-18"
        }

+ Response 200 (application/json)

    + Headers

            Location: 127.0.0.1:3000/campus/user/5e0c7b04beae0b2f386e206e

    + Body

            {
                "status": "success",
                "data": {
                    "newUser": {
                        "_id": "5e0c7b04beae0b2f386e206e",
                        "Name": "Syed Rafiul Kabir",
                        "Roll": "1810976101",
                        "Session": "2017-18",
                        "__v": 0
                    }
                }
            }
            
### Delete an Existing User [DELETE]

Any existing user can be deleted through this action using the id of 
the user. If this action is made then the whole information of that
user will be deleted.

Using the id: 5e0c7b04beae0b2f386e206e

+ Request (application/json)

        {
            "Name": "Syed Rafiul Kabir",
            "Roll": "1810976101",
            "Session": "2017-18"
        }


+ Response 200 (application/json)

    + Headers

            Location: 127.0.0.1:3000/campus/user/5e0c7b04beae0b2f386e206e

    + Body

            {
                "message": "204 No content"
            }
