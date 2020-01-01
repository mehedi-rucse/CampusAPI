const express = require("express");
const userController = require("./../controllers/note.controller.js");

const router = express.Router();

router
    .route("/")
    .get(userController.getAllUsers)
    .post(userController.createUser);

router
    .route("/:id")
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);
//export router
module.exports = router;