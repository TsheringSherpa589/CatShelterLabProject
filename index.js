const http = require('http');
const port = 4007; 
const handlers = require('./handlers');

http.createServer((req, res ) => {
    
    for(let handler of handlers){
        if(!handler(req,res)){
            break;
        }
    }
    // res.writeHead(200, {
    //     'Content-Type' : 'text/plain'
    // });

    // res.write('Hello JS world!');
    // res.end();
}).listen(port)