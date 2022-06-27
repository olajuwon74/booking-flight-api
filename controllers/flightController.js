const Flights = require("../models/Flight");

// get all flight
exports.getFlights = async (req, res) => {
    try {
        const flights = Flights;
        res.status(200).json(flights);
    } catch (error) {
        res.status(500).json({message:error});
        
    }
}

// get single flight

// update flight

// add/book flight

// delete flight


