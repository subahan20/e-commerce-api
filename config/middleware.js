const jwt = require("jsonwebtoken");
const AdminModel = require("../models/admin");
const { resp } = require("../utility/response");

exports.verifyToken = (req, res, next) => {
  const token = req.header("access_token");

  if (!token) {
    return resp.unknown(res, "token not available!");
  }

  jwt.verify(token, "supersecret", async (err, decode) => {
    if (err) {
      return resp.fail(res, "Invalid Token!");
    }

    let admin = await AdminModel.findOne({ access_token: token });
    // console.log("admin: ", admin);

    req.access_token = token;
    next();
  });
};
