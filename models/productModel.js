const mongoose = require('mongoose')

// Create a Product Schema
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)

// Create a Product Model from Product Schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;