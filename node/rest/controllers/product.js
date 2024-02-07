const fs = require('fs')
const data = JSON.parse(fs.readFileSync('data.json'))

const products= data.products

//CALBACK FUCTION

const AppStatus = (_,res)=>{
    res.send('App is running')
}

const getProducts = (_,res) => {
    res.send(products)
}

const getProduct = (req,res) => {
    const productId = Number(req.params.productId)
    const product = products.find(product=>product.id === productId)||{}
    if(product.id){
        res.send(product)
    }
    else{
    res.status(404).send('Product not found')
    }
}

const addProduct =(req,res)=>{
    // products.push({id:products.length+1,...req.body})
    products.push(req.body)
    res.status(201).send('Product added successfully')
}

const updateProduct = (req,res) => {
    const productId = Number(req.params.productId)
    const productIdx  =products.findIndex(product=>product.id === productId)
    products.splice(productIdx,1,{id:productId,...req.body})
    res.status(202).send('Product updated successfully')

}

const modifyProduct = (req,res) => {
    const productId = Number(req.params.productId)
    const productIdx  =products.findIndex(product=>product.id === productId)
    const product = products[productIdx]
    products.splice(productIdx,1,{...product,...req.body})
    res.status(202).send('Product updated successfully')

}

const deleteProduct = (req,res) => {
    const productId = Number(req.params.productId)
    const productIdx  =products.findIndex(product=>product.id === productId)
    const product = products[productIdx]
    products.splice(productIdx,1)
    res.status(202).send(product)

}

const deleteAllProducts = (req,res) => {
    products.splice+(0,products.length)
    res.status(202).send("Deleted all product")

}

module.exports = {
    AppStatus,
    addProduct,
    getProduct,
    getProducts,
    updateProduct,
    modifyProduct,
    deleteProduct,
    deleteAllProducts
}