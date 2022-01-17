const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // industry practice to call this constant “app”
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000; // pick a random port

app.get("/", function(req, res) { 
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/", function(req, res) {

    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var sum = weight/(height*height);

    res.send("Your BMI is " + sum.toFixed(2));
})

app.listen(port);