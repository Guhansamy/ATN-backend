const {
    userController,
    loginpage,
    particularData,
} = require("../Controller/userController");
const {
    requestController,
    requestOutput,
    getRequest,
} = require("../Controller/requestController");
const express = require("express");
const { getUserDetails } = require("../Controller/loraController");

const controllerApp = express.Router();

// User routes
controllerApp.post("/detail", userController);
controllerApp.post("/login", loginpage);
controllerApp.post("/allUsers", particularData);

// Request Routes
controllerApp.post("/newRequesting", requestController);
controllerApp.get("/allRequests", requestOutput);
controllerApp.post("", getRequest);

// LoRa Routes
controllerApp.post("/getUserDetails", getUserDetails);

module.exports = { controllerApp };
