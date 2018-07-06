var express = require('express')
var app = express()
var path=require('path')
var bodyParser = require('body-parser');
var da1=require('./projectG.js')
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
/*app.use(User.urlencoded({ extended: false}));
app.use(User.json());*/
 

app.use(express.static(__dirname));
 app.get('/', function (req, res) {
     res.send('Hello World')
 })



 app.post('/authenticate', function (req, res) {
    da1.create({ 
        "Name": req.body.Name,
        "email": req.body.email,
        "Date": req.body.Date,
        "Comments": req.body.Comments
       
    },function(err,small){
        if(err)
            console.log(err);
        else{
            res.send("Success");
        }
    });
    
    
});

app.get('/chekps', function (req, res) {
    res.sendFile('projectG.html',{root:'./'});
});


console.log("Success")


 app.use('/routing', express.static(path.join(__dirname, 'routing')))
 app.use(express.static(__dirname));
console.log(__dirname)
app.listen(3000)
console.log("Server listening on localhost:3000");







