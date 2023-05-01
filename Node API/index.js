const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')

dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})



mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('connected to MongoDB');
    app.listen(process.env.PORT || 3000, () => {
        console.log('Node API app is running at http://localhost:3000/')
    })
}).catch((error) =>{
    console.log(error);
})