const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    access_token: {
      type: String,
      require: true, 
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    mobile_number: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    verification_code: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", adminSchema);

Admin.findOne({}).then((res) => {
  if (!res)
    Admin.create({
      mobile_number: "1234567890",
      name: "Admin",
      email: "admin@gmail.com",
      password: "4de93544234adffbb681ed60ffcfb941", //Admin@1234
    });
});
// console.log(val);

exports.AdminModel = Admin;
const AdminModel = mongoose.model("admin", adminSchema);
module.exports = AdminModel;
