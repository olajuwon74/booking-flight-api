const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router
.get("/", controller.getFlights)
.post("/", controller.createFlight)
.get("/:id", controller.getFlight)
.put("/:id", controller.updateFlight);


module.exports = router;

