const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        book_name: {
            type: String,
            trim: true,
        },
        book_disc: {
            type: String,
            trim: true,
        },
        book_author: {
            type: String,
            trim: true
        },
        book_price: {
            type: Number,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const book = mongoose.model("book", bookSchema);
module.exports = book;