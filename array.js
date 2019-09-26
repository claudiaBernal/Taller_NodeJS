var express = require('express');
var app = express();
var data = []

var personas = {
 nombre : "",
 edad : 0
}

app.get('/:nombre' + '/edad', function (req, res){
	res.send("ddddd");


personas.nombre = req.params.nombre;
personas.edad = req.params.edad; 
console.log(data);

});

//Run server
app.listen(3000, () => {
	console.log("server is running...");
});