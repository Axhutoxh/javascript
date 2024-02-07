const express = require('express')


const {  AppStatus,
    addProduct,
    getProduct,
    getProducts,
    updateProduct,
    modifyProduct,
    deleteProduct,
    deleteAllProducts} = require('../controllers/product')

const router = express.Router()



//CRUD OPERATION

//GET OPERATION
router.get('/appStatus',AppStatus)
router.get('/products',getProducts)
router.get('/products/:productId',getProduct)

// POST OPERATION
router.post('/product',addProduct)

//PUT OPERATION
router.put('/products/:productId',updateProduct)

//PATCH OPERATION
router.patch('/products/:productId',modifyProduct)

//DELETE OPERATION
router.delete('/products/:productId',deleteProduct)
router.delete('/products',deleteAllProducts)



exports.router = router