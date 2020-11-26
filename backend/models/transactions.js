const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    user_firstName: {
        type: String,
        required: true
    },

    user_lastName: {
        type: String,
        required: true
    },
    user_emailAddress: {
        type: String,
        required: true
    },
    user_address1: {
        type: String
    },
    user_address_city: {
        type: String
    },
    user_address_state: {
        type: String
    },
    user_address_pincode: {
        type: String
    },
    user_mobile_number:{
        type:Number
    },
    product_name:{
        type:String
    },
    product_price:{
        type:Number
    },
    invoice_number:{
        type:String
    },
    date_of_invoice:{
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Transactions', TransactionSchema);