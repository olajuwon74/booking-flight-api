const {Flights} = require("../models/Flight");

// get all flight
exports.getFlights = async (req, res) => {
    try {
        const flights = Flights;
        res.status(200).json({
            message: "All flights",
            flights: flights
        });
    } catch (err) {
        res.status(500).json({message:err});
        
    }
}

// get single flight

// update flight

// add/book flight
exports.createFlight = async (req, res) => {
    try {
        const flight = await req.body;
        Flights.push(flight)
        res.status(201).json({
            message: "Flight Created",
            flight
        });
    } catch (err) {
        res.status(500).json({message:err})
    }
}

// delete flight


