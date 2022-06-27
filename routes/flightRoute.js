const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get("/", controller.getFlights)
router.post("/", controller.createFlight)

module.exports = router;

