const express = require('express');
const post = require("./date/post.js");
const app = express();
const port = 5500;

app.use(express.static('public'));


//Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
app.get('/', (req, res) => {
    res.send("Server del mio blog");
})

//Creiamo poi una rotta / bacheca che restituisca un oggetto json con la lista dei post.
app.get('/bacheca', (req, res) => {
    res.send(post);
})

//Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
app.listen(port, () => {
    console.log('Example app listening on port' + port)
});