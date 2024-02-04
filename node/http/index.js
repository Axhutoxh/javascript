const http = require('https');


const host = 'localhost';
const port = 8080;


const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<Html><heead><title>hW</title></heead>`)
    res.write(`<h1>Hello, world!</h1></Html>`)

    res.end()
})

server.listen(port,host,()=>{
    console.log(`listening on ${host}:${port}`)
});