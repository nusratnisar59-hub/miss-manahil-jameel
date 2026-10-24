const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Welcome to the Home Page!');


    } else if (req.url === '/about') {
        res.end('Welcome to the About Page!');


    } else {
        res.end('Page not found!');
    }
    
});
server.listen(7000, () => {
    console.log('Server is running now on port 7000');
});