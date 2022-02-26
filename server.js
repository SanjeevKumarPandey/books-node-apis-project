const http = require('http');
const app = require('./app');
const port = process.env.port || 3000;
const server = http.createServer(app);

server.listen(port,(error)=>{
    if(error) return console.log(`Error : ${error}`);
    console.log(`Sucess : Server are listing on Port ${port}`);
})