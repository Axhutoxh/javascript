import express from 'express';

const port = 8080;

const app = express();

app.use((req,res,next)=>{
    console.log('I am a middleware',req.method)
    // res.status(200).send('so')
    next()
})

app.get('/', (req, res) => {

    res.send('Home page')
})

app.post('/', (req, res) => {
    res.send('Home page Post')
})

app.post('/:id', (req, res) => {
    console.log(req.params)
    res.send('Home page Post')
})

app.put('/', (req, res) => {
    console.log(req.params)
    res.send('Home page Put')
})

app.delete('/', (req, res) => {
    res.send('Home page delete')
})

app.patch('/', (req, res) => {
    res.send('Home page patch')
})

app.get('/cookie', (req, res) => {
    console.log(req.headers.cookie)
    res.send('cokkie page')
})

app.get('*', (req, res) => {
    res.send('Page Not Found')
})


app.listen(port,()=>{
    console.log('listening on port',port)
});