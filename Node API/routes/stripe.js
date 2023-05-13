const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_KEY_TEST)

router.post("/payment", (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    }, ( stripeErr, stripeRes ) => {
        if(stripeErr){
            res.status(500).json(stripeErr)
        } else {
            res.status(200).json(stripeRes)
        }
    })
})


// const items = req.body // => [{ _id: '001', quantity: 3 }, ...]
// const itemIds = items.map(item => item._id);
// const foundProducts = await Product.find({ _id: { $in: itemIds } }) // => [{ _id, name, imageURL, price }, ...]

// const total = items.reduce((runningTotal, item) => {
//   const { price } = foundProducts.find(prod => prod._id === item._id)
//   const totalItemPrice = price * item.quantity;
//   return runningTotal + totalItemPrice 
// }, 0)

module.exports = router;