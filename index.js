const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");

const app = express();

app.use(json());

app.use("/flight", routes);


const port = process.env.PORT || 3000;

// app.post('/flights', (req, res) => {
//   console.log(req, body, newFlight)
//   flights.push(req, body, newFlight);
//   console.log({flights});
//   return res.json({message: "new flight created"})

// })

app.get("/", (req, res) => {
  res.send("zuri training");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  
});
