const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const stripeRoute = require('./routes/stripe')
const cors = require('cors')

dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


app.get('/', (req, res) => {
    res.send('Node REST API is running... Feel free to launch the front end now!')
})



mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('connected to MongoDB');
    app.listen(process.env.PORT || 5000, () => {
        console.log('Node API app is running at http://localhost:5000/')
    })
}).catch((error) =>{
    console.log(error);
})