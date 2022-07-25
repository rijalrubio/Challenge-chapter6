const express = require("express");
const userController = require("./user.controller");
const userService = require("./user.service");
const userRouter = express.Router();

//  API to get all users
userRouter.get("/users", userController.getAllUsers);

// API to create new users
userRouter.post("/users", userController.createNewUser);

// API to update users (change password)
userRouter.put("/users/", userController.updateUser);

// API to delete users
userRouter.delete("/users/:id", userController.deleteUser);

module.exports = userRouter;