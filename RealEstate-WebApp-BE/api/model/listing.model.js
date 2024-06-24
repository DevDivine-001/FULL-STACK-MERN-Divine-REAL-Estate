import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true

        },
        description: {
            type: String,
            require: true,

        },
        address: {
            type: String,
            require: true,

        },
        regularPrice: {
            type: Number,
            require: true,

        },
        discountPrice: {
            type: Number,
            require: true,

        },
        bathrooms: {
            type: Number,
            require: true,

        },
        bedrooms: {
            type: Number,
            required: true,
        },
        furnished: {
            type: Boolean,
            require: true,

        },
        parKing: {
            type: Boolean,
            require: true,

        },
        type: {
            type: String,
            require: true,

        },
        offer: {
            type: Boolean,
            require: true,

        },
        imageUrls: {
            type: Array,
            require: true,

        },
        userRef: {
            type: String,
            require: true,

        },

    }, { timestamps: true }
)

const Listing = mongoose.model('Listing', listingSchema)


export default Listing