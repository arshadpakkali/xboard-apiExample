const model = require("../../models/user");
const product_model = require("../../models/product");
const APIError = require("../../constants/APIError");
const AuthMiddleware = require("../../middlewares/auth/auth");
const bcrypt = require("bcrypt");
const authMiddleware = new AuthMiddleware();

class UserService {
  constructor() {
    this.getUserByToken = this.getUserByToken.bind(this);
  }

  async get_user(request) {
    let user = await model.findById(request, { password: 0 });
    return user;
  }
  async get_user_by_mobile(request) {
    let user = await model.findOne({ mobileNumber: request }, { password: 0 });
    return user;
  }

  async get_user_by_email_address(request) {
    let user = await model.findOne({ emailAddress: request }, { password: 0 });
    return user;
  }

  async give_user_trial(request) {
    let user = await model.findOne({ emailAddress: request });
    if (!user) {
      throw APIError.InvalidCredentials;
    }

    user.products = [];
    await user.save();
    let products_list = await product_model.find({});
    for (let product of products_list) {
      let obj = {
        product_id: product._id,
        expiry: product.expiry,
        user_id: user._id,
      };
      let abc = await this.set_products_for_user(obj);
    }
    user = await model.findOne({ emailAddress: request });
    let response = user;
    return response;
  }

  async login(request) {
    console.log("login user service");
    console.log(request.emailAddress);
    let emailAddress = request.emailAddress.trim().toUpperCase();
    let user;
    if (parseInt(request.emailAddress)) {
      user = await model.findOne({ mobileNumber: emailAddress });
      console.log("I was here");
    } else {
      user = await model.findOne({ emailAddress: emailAddress });
    }

    if (!user) {
      throw APIError.UserNotFound;
    }
    let valid_password = await bcrypt.compare(request.password, user.password);
    if (!valid_password) {
      throw APIError.InvalidCredentials;
    }
    let email = user.emailAddress;
    let token = await authMiddleware.createToken({ emailAddress: email });
    return token;
  }

  async register(request) {
    console.log("dhfgjhr");
    console.log(request);
    request.emailAddress = request.emailAddress.trim().toUpperCase();
    let user = await model.findOne({ emailAddress: request.emailAddress });
    if (user) {
      throw APIError.UserAlreadyExist;
    }
    console.log("request from user register");
    console.log(request);
    let count = await model.find({}).countDocuments();

    request.password = await bcrypt.hash(request.password, 8);
    request = { ...{ id: count + 1 }, ...request };
    let registeration = new model(request);
    let response = await registeration.save();
    console.log(response);
    let token = await authMiddleware.createToken({
      emailAddress: request.emailAddress,
    });
    console.log(token);
    return token;
  }

  async getUserByToken(token) {
    let id = await authMiddleware.parseToken(token);
    console.log("id is printed here");
    console.log(id);
    let user = await model.findOne(
      { emailAddress: id.emailAddress.trim().toUpperCase() },
      { password: 0 }
    );
    console.log(user);
    return user;
  }
  async set_products_for_user(request) {
    let product_id = request.product_id;
    //let expiry = new Date(new Date().getTime()+request.expiry*24*60*60*1000);
    // let obj = {
    //     product_id:product_id,
    //     expiry:expiry
    // }
    let user_id = request.user_id;
    let filter = { _id: user_id };

    let user = await model.findOne(filter);
    if (!user) {
      throw "User not found";
    } else {
      // user.products =  user.products.map((product)=>{
      //     if(String(product.product_id) === String(product_id)){
      //         if(product.expiry < Date.now()) {
      //             product
      //         }
      //         // return {product_id: product_id, expiry: product.expiry}
      //     }
      // })
      let user_product = user.products.findIndex((product) => {
        return String(product.product_id) === String(product_id);
      });
      if (user_product !== -1) {
        // if expiry date less than Date now
        if (
          new Date(user.products[user_product].expiry).valueOf() < Date.now()
        ) {
          user.products[user_product].expiry =
            Date.now() + request.expiry * 24 * 60 * 60 * 1000;
        }
        // if expiry date greater than equal to Date now
        else {
          user.products[user_product].expiry =
            new Date(user.products[user_product].expiry).valueOf() +
            request.expiry * 24 * 60 * 60 * 1000;
        }
      } else {
        let product = {
          product_id: request.product_id,
          expiry: Date.now() + request.expiry * 24 * 60 * 60 * 1000,
        };
        user.products.push(product);
      }
      let response = await user.save();
      return response;
    }
  }

  async resetPassword(request) {
    try {
      console.log("header token");
      console.log(request.headers["token"]);
      let user = await this.getUserByToken(request.headers["token"]);
      if (!user) {
        throw APIError.InvalidCredentials;
      }
      user.password = await bcrypt.hash(request.body.password, 8);
      let response = await user.save();
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async update_users() {
    let user = await model.find(
      { $or: [{ products: { $size: 1 } }, { products: { $size: 2 } }] },
      { password: 0 }
    );
    for (let i = 0; i < user.length; i++) {
      for (let j = 0; j < user[i]["products"].length; j++) {
        user[i]["products"][j]["expiry"] =
          new Date(
            2020,
            10,
            new Date(user[i]["products"][j]["expiry"]).getDate()
          ).valueOf() +
          4 * 24 * 60 * 60 * 1000;
        await user[i].save();
      }
    }
    console.log(user);

    return user;
  }
  async trim_users_emails() {
    let user = await model.find({});
    for (let i = 0; i < user.length; i++) {
      user[i]["emailAddress"] = user[i]["emailAddress"].trim().toUpperCase();
      user[i].save();
    }
    console.log(user);

    return user;
  }

  async update_product(request) {
    console.log(request.product_name);
    let product = await product_model.findOne({ name: request.product_name });
    if (!product) {
      throw APIError.MissingProduct;
    }
    let user = await model.findOne(
      { emailAddress: request.emailAddress.trim().toUpperCase() },
      { password: 0 }
    );
    if (!user) {
      throw APIError.UserNotFound;
    }
    if (product.name == "X-Straddle") {
      user.products.push({
        product_id: product._id,
        expiry:
          new Date("2020-11-15").valueOf() +
          product.subscriptionTime * 24 * 60 * 60 * 1000,
      });
      await user.save();
      return user;
    }
    let user_product = await model.findOne(
      {
        emailAddress: request.emailAddress.trim().toUpperCase(),
        "products.product_id": product._id,
      },
      { password: 0 }
    );
    if (user_product) {
      for (let i = 0; i < user_product.length; i++) {
        if (user_product.products[i]["product_id"] == product._id) {
          user_product.products[i]["expiry"] =
            new Date(request.subscriptionDay).valueOf() +
            product.subscriptionTime * 24 * 60 * 60 * 1000;
        }
      }
      await user_product.save();
      return user_product;
    } else {
      user.products.push({
        product_id: product._id,
        expiry:
          new Date(request.subscriptionDay).valueOf() +
          product.subscriptionTime * 24 * 60 * 60 * 1000,
      });
      await user.save();
      return user;
    }
  }

  async confirm_email(request) {
    let user = await this.getUserByToken(request);
    if (!user) {
      throw APIError.InvalidCredentials;
    }
    user.confirm_email = true;
    let response = await user.save();
    return response;
  }

  async getUserCount(request) {
    console.log("Request is", request);
    let product = await product_model.findOne({ name: request.name });
    console.log("Product is:", product);
    if (product) {
      let count = await model
        .find({ "products.product_id": product._id })
        .count();
      return { count: count };
    } else {
      throw APIError.EntityNotFound;
    }
  }

  async getUserByEmail(request) {
    console.log("This line is of staging");
    console.log("After merge");
    console.log("Changed something in feature branch");
    console.log(request);
    let user = await model.findOne({
      emailAddress: request.email.trim().toUpperCase(),
    });
    if (!user) {
      throw APIError.InvalidCredentials;
    } else {
      let token = await authMiddleware.createToken({
        emailAddress: request.email.trim().toUpperCase(),
      });
      return token;
    }
  }

  async getUserNotifications(request) {
    console.log(request);
    let notifications = [];
    let { products } = await model.findOne(
      {
        emailAddress: request.email.trim().toUpperCase(),
      },
      "products"
    );
    if (!products) {
      throw Error("error");
    }
    for (let obj of products) {
      let { name: productName } = await product_model.findById(obj.product_id);
      console.log(productName);
      notifications.push({
        productName: productName,
        expiry: obj.expiry,
      });
    }
    return notifications;
  }
}

module.exports = UserService;