//Inbuild module of node.js
const http = require('http');

//creating server routing logics
const server = http.createServer((req,res)=>{

    //Base URL
    if(req.url === '/'){
        console.log("req.url"); //sending JSON, text. errors, xml from server to client
        res.write("hello its the basic home url .") 
        res.end(); //is used to close the port if any open.
    }

    //Get request from a particular Url
    else if(req.url === '/api'){
        res.send(JSON.stringify([1,2,3,4,5,6,7]));
        res.end();
    }

    //validation for request method and login URL.
    else if(req.method === 'GET' && req.url === '/first') {
        res.write(JSON.stringify(['this is the data of the' , 'First Page']));
        res.end();
    }

    //post endpoint for send
    else if(req.method === 'POST' && req.url === '/first') {
       var raw_data;
       req.on('data' , (data_chunk)=>{
        raw_data = data_chunk;
        console.log(raw_data);
        console.log(raw_data.toString("utf8"));
       });

    }



})

server.listen(3001);
console.log("listening on port 3000");