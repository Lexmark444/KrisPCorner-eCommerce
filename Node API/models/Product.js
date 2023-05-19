const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: [true, "Please enter a product name"], unique: true},
        desc: { type: String, required: false },
        img: { type: String, required: false },
        categories: {type: Array},
        price: { type: Number, required: true, default: 1.00 },
        inStock: {type:Boolean, default:true }, 
    },
    { timestamps: true } 

)

module.exports = mongoose.model('Product', ProductSchema);

