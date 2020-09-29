const express = require("express");
const routes = express.Router()

const controller = require('../controllers/trends.controllers')

routes.get("/", controller.fetchTrends)

module.exports = routes;