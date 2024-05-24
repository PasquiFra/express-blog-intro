// richiedo a express di settarmi il server e renderlo attivo alla porta 3000
const express = require("express");
const app = express();
const port = 3000;

// importo il controller del blog
const blog = require('./controller/blog.js');

// setto la cartella public per visualizzare i contenuti al suo interno 
app.use(express.static('public'));
// questo comando permette di ricevere chiamate in post/put e di leggerne il body
app.use(express.json());

app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
})