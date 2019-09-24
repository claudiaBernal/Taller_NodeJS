// consolo.log("hola");

const express = require('express');
const app = express();

//handele requests to htpp://127.0.0.1:3000/
app.get("/", (req, res) => {
	console.log(req);
	res.send("Hola mundo");
	
});


//Run server
app.listen(3000, () => {
	console.log("server is running...");
});