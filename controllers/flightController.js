const {Flights} = require("../models/Flight");
const {v4: uuid} = require("uuid");

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
exports.getFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => user.id === id);
            res.status(200).json({
                message: "Flight details found",
                flight,
            });
    } catch (err) {}
}

// update flight

exports.updateFlight = async (req, res) =>{
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => user.id === id);
        const {title, time, price, date} = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;
        res.status(200).json({
            message: "Flight updated",
            flight,
        })
    } catch (err) {
        
    }
}
// add/book flight
exports.createFlight = async (req, res) => {
    try {
        // const flight = await req.body;
        // user.id = uuid;
        const {title, time, price, date} = await req.body;
        const newFlight = {
            id: uuid(),
            title,
            time,
            price,
            date,
        };
        Flights.push(newFlight)
        res.status(201).json({
            message: "Flight Created",
            newFlight,
        });
    } catch (err) {
        res.status(500).json({message:err})
    }
}

// delete flight


