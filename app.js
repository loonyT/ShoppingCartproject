const express = require('express');
const path = require('path'); 
const mongoose = require('mongoose');

// Connect to db 
    mongoose.connect('mongodb://localhost/cmscart', {useNewUrlParser: true});
    const db = mongoose.connection; 
    db.on('error', console.error.bind(console, 'connection error :'));
    db.once('open', function(){
   console.log('connected to MongoDB'); 
});


//init app 
    var app = express();

//view engine setup and set up folder

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs'); 

// set public folder

    app.use(express.static(path.join(__dirname, 'public')));
    app.get ("/",  function(req,res){
      res.send('working');  
    });


// Start the server

    var port = 3000;
    app.listen(port, function(){
    console.log('Server started on port' + port);   
    });



