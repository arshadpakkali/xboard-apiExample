const model = require("../../models/order");
const transactionModel = require("../../models/transactions");
const userModel = require("../../models/user");
const productModel = require("../../models/product");
const APIError = require("../../constants/APIError");
const AuthMiddleware = require("../../middlewares/auth/auth");
const bcrypt = require("bcrypt");
const authMiddleware = new AuthMiddleware();
class PaymentService {
  constructor() {}

  async create_order(request) {
    let order = {
      order_id: request.order_id,
      product_id: request.product_id,
      user_id: request.user_id,
      status: "CREATED",
    };

    let new_order = new model(order);
    let response = await new_order.save();
    console.log(response);

    return order;
  }
  async get_user_transactions(request) {
    let filter = { user_emailAddress: request.emailAddress };
    let response = await transactionModel.find(filter);
    return response;
  }
  async record_transaction_details(request) {
    let user_filter = { _id: request.user_id };
    let user = await userModel.findOne(user_filter);
    let product_filter = { _id: request.product_id };
    let product = await productModel.findOne(product_filter);
    let transaction_record = {
      user_firstName: user.firstName,
      user_lastName: user.lastName,
      user_emailAddress: user.emailAddress,
      user_address1: user.address1,
      user_address_city: user.address_city,
      user_address_state: user.address_state,
      user_address_pincode: user.address_pincode,
      user_mobile_number: user.mobileNumber,
      product_name: product.name,
      product_price: product.price,
      date_of_invoice: new Date(),
    };
    let count = await transactionModel.find({}).countDocuments();
    transaction_record = {
      ...{ invoice_number: count + 1 },
      ...transaction_record,
    };
    let transaction = new transactionModel(transaction_record);
    let response = await transaction.save();
    return response;
  }
  async change_order_status(request) {
    console.log("change order status function me hai!!!");
    console.log(request);
    console.log("login user service");
    console.log(request.user_id);
    let filter = { order_id: request.order_id };
    let update = { status: "VERIFIED" };
    let order = await model.findOneAndUpdate(filter, update, { new: true });
    return order;
  }
}

module.exports = PaymentService;

