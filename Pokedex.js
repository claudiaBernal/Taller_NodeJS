const express = require('express');
const app = express();
const pokedex = require('./pokedex.json');

// Handle resquests to http://127.0.0.1:3000/ 
app.get("/pokemon", (req, res) => {
	res.send("Bienvenido a la pokedex");
});

app.get("/pokemon/name/:name", (req, res) => {
	const name = req.params.name;
	const pokemon = pokedex.pokemon.filter((item)=>{
		return item.name == name 
	});
	res.json(pokemon);
});

app.get("/pokedex/id/:id", (req, res) => {
	const id = req.params.id-1;
	if (id >= 0 && id < 151) {
		res.json(pokedex.pokemon[id]);
	}else{
		res.send("No hay mas pokemons que los 151 de la primera generación.");
	}
});

app.get("/pokedex/random", (req, res) => {
	const num = Math.floor(Math.random()*(151-0)+0);
	res.json(pokedex.pokemon[num]);
});

app.get("/pokemon/image/:id", (req, res) => {
	var img = pokedex.pokemon[req.params.id-1].img;
	res.send("<img src='"+img+"'/>");
});



// Run server
app.listen(3000, () => {
  console.log("Server is running...");
});
