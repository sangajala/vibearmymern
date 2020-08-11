const mongoose = require('mongoose');

const { ObjectId, Number } = mongoose.Schema.Types

const CartSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "User"
    },

    videos: [
        {
            quantity: {
               type: Number,
               default: 1
            },
            video: {
                type: ObjectId,
                ref: "Video"
            }
        }
    ]
})


module.exports = mongoose.models.Cart|| mongoose.model("Cart",CartSchema)