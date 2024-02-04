const express = require('express')
const fs = require('fs')

const app = express()

const PORT = 8080

const data = JSON.parse(fs.readFileSync('data.json'))

const products= data.products

//MIDDLE WARE

app.use(express.json())

//GET OPERATION
app.get('/appStatus',(_,res) => {
    res.send('App is running')
})

app.get('/products',(_,res) => {
    res.send(products)
})

app.get('/products/:productId',(req,res) => {
    const productId = Number(req.params.productId)
    const product = products.find(product=>product.id === productId)||{}
    if(product.id){
        res.send(product)
    }
    else{
    res.status(404).send('Product not found')
    }
})

// POST OPERATION
app.post('/product',(req,res)=>{
    // products.push({id:products.length+1,...req.body})
    products.push(req.body)
    res.status(201).send('Product added successfully')
})

//PUT OPERATION
app.put('/products/:productId',(req,res) => {
    const productId = Number(req.params.productId)
    const productIdx  =products.findIndex(product=>product.id === productId)
    products.splice(productIdx,1,{id:productId,...req.body})
    res.status(202).send('Product updated successfully')

})

//PUT OPERATION
app.patch('/products/:productId',(req,res) => {
    const productId = Number(req.params.productId)
    const productIdx  =products.findIndex(product=>product.id === productId)
    const product = products[productIdx]
    products.splice(productIdx,1,{...product,...req.body})
    res.status(202).send('Product updated successfully')

})

//DELETE OPERATION
app.delete('/products/:productId',(req,res) => {
    const productId = Number(req.params.productId)
    const productIdx  =products.findIndex(product=>product.id === productId)
    const product = products[productIdx]
    products.splice(productIdx,1)
    res.status(202).send(product)

})

app.delete('/products',(req,res) => {
    products.splice+(0,products.length)
    res.status(202).send("Deleted all product")

})

app.listen(PORT, ()=>{
    console.log('listening on port',PORT)
})