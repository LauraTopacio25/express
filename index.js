const express = require('express');
const server=express();

server.set('view engine', 'ejs');

server.get('/', (req, res) =>{
	res.render('index');
});
server.get('/about', (req, res) =>{
	res.send('About...');
});

server.listen(4242, () =>{
	console.log('Express Server is running');
});
