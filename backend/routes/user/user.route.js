const express = require("express");
const multer = require("multer");
const router = express.Router();
const UserController = require("../../controllers/user/user.controller");
let upload = multer();
const userController = new UserController();

router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post("/register", userController.register);
router.post("/forgot_password", userController.forgot);
router.get("/get-user-by-token", userController.getUserByToken);
router.post("/reset", upload.fields([]), userController.resetPassword);
router.get("/count", userController.getUserCount);
router.get("/get_user_by_mobile", userController.get_user_by_mobile);
router.get(
  "/get_user_by_email_address",
  userController.get_user_by_email_address
);
router.post("/give_user_trial", userController.give_user_trial);
router.post("/update_users", userController.update_users);
router.post("/trim_emails", userController.trim_user_emails);
router.get("/notifications", userController.notifications);
router.post("/update_product", userController.update_product);
module.exports = router;