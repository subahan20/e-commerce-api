const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin");
const { Joi, celebrate } = require("celebrate");

router.post(
  "/login",
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().lowercase().required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9!@#$%^&*]{6,16}$"))
        .required()
        .min(8),
    }),
  }),
  adminController.login
);

module.exports = router;
