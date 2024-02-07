const express = require("express");
const app = express();
const PORT= 8080

const productRouter = require("./routes/productRoutes");

app.use(express.json());

app.use("/", productRouter.router);

app.listen(PORT, ()=>{
    console.log('listening on port',PORT)
})