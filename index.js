const express = require('express');
const post = require("/post.js");
const app = express();
const port = 5500;

app.use(express.static('public'));

//Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
app.get('/', (req, resp) => {
    rend.send("Server del mio blog");
})

//Creiamo poi una rotta / bacheca che restituisca un oggetto json con la lista dei post.
app.get('/bacheca', (req, res) => {
    rend.send(post);
})