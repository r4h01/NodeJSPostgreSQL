const http = require('http');

// let's define a port and a host name for the server:

const hostname = 'localhost';
const port = 3000;

// create the server that takes one argument which is a callback function
// allow us to specify different option for the server:

const server = http.createServer((req, res)=> {
    //for access to the url data in the request 
    //we can use {url} = req that is a ES6 syntax
    const {url} = req;
    if(url === '/translations'){
        const translations = {1:'one', 2:'two', 3:'three'}

        //for getting a Json response we need to set the header
        //A header identifies to the browser what kind of data we're sending back.

        res.setHeader('Content-type', 'application/json');

        //method writes some data to the stream, and calls the
        //supplied callback once the data has been fully handled
        res.write(JSON.stringify(translations));
        res.end()
    }

    // res.end('welcome to Node');
    
});

server.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}:${port}`)
});

