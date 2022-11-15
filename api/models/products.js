const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const productsSchema = new mongoose.Schema(
    {
        barcode:{
            type: String
        },
        sku:{
            type: String
        },
        name:{
            type: String
        },
        shortDescription:{
            type: String
        },
        longDescription:{
            type: String
        },
        price:{
            type: Number
        },
        cost:{
            type: Number
        },
        category:{
            type: String
        },
        stock:{
            type: Number
        },
        productImage:{
            type: String
        }
    },
    {   
        timestamps: true,
        versionKey: false
    }
)

productsSchema.plugin(mongooseDelete, {overrideMethods:"all"})
module.exports = mongoose.model("products", productsSchema)