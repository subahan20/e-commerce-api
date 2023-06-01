const AdminModel = require("../models/admin");
const { resp } = require("../utility/response");
const jwt = require("jsonwebtoken");
const md5 = require("md5");

exports.login = async (req, res) => {
  try {
    req.body.access_token = jwt.sign(
      {
        email: req.body.email,
      },
      "supersecret",
      {
        expiresIn: "1h",
      }
    );

    let isAdmin = await AdminModel.findOne({ email: req.body.email });
    if (!isAdmin || isAdmin.password != md5(req.body.password)) {
      return resp.notFound(res, "Invalid Credentials!");
    }

    isAdmin = await AdminModel.findOneAndUpdate(
      { email: req.body.email },
      {
        $set: {
          access_token: req.body.access_token,
        },
      },
      {
        new: true,
      }
    );

    return resp.success(res, isAdmin);
  } catch (e) {
    console.log(e);
    return resp.fail(res);
  }
};
