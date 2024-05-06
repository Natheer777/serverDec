const express = require('express')
const UserController = require("../Controllers/Usecontroller")
const route = require('express').Router()

route.get("/allusers" ,UserController.getallusers)
// Route.post("/adduser" ,UserController.adduser)
// Route.post("/delete" ,UserController.deleteuser)
// Route.post("/edite" ,UserController.editeuser)


module.exports=route;

