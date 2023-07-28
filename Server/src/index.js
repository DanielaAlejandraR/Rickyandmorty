const http = require ("http");
const {getCharById} = require("./controllers/getCharById");

http
.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');//Da permisos a Front-end de hacer peticiones 

    if(req.url.includes("/rickandmorty/character")){
        const id = req.url.split("/").at(-1);

        getCharById(res, +id);
    }
    })
    .listen(3001, "localhost")