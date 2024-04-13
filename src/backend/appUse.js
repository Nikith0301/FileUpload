const things=require('./routes/things')
var cors = require('cors')
const express=require('express');

let app=express();

app.use(cors())
var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(urlencodedParser)
app.use(express.json())

app.use("/things", things);
//use the things.js file to handle
//endpoints that start with /things


app.route("/api")

.all((req,res,next)=>{
    console.log("THis is Kris request ->"+req.method)
    res.send(req.method)
})

app.get('/api/:id', function (req, res) {
    console.log(`i have some data${id}`);
    res.end();
 });


//  app.use(express.text())


  


app.listen(3001, function(err){
    if (err) console.log(err)
    console.log("Server listening on PORT", 3001);
 });