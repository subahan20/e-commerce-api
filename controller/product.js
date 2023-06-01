const ProductModel = require("../models/product");
const { resp } = require("../utility/response");

exports.addProduct = async (req, res) => {
  try {
    let product = await ProductModel.findOne({ name: req.body.name });

    if (product) {
      return resp.taken(res);
    }
    // console.log("admin email: ", req.adminData.email);
    product = await ProductModel.create(req.body);

    return resp.success(res, product);
  } catch (error) {
    return resp.fail(res);
  }
};

exports.getProduct = async (req, res) => {
  try {
    let product = await ProductModel.find({});

    if (!product) {
      return resp.notFound(res, "No Product Available in DataBase!");
    }

    return resp.success(res, product);
  } catch (error) {
    console.log(error);
    return resp.fail(res);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    // console.log("id: ", req.params.id);
    let product = await ProductModel.findById(req.params.id);
    // console.log(product);
    if (!product) {
      return resp.notFound(res, "No Product Available in DataBase!");
    }

    product = await ProductModel.findByIdAndUpdate(
      req.params.id,
      {
        $inc: {
          quantity: req.query.number,
        },
      },
      {
        new: true,
      }
    );

    await product.save();

    // console.log("updated product: ", product);
    return resp.success(res, "Updated Successfully!", product);
  } catch (error) {
    console.log(error);
    return resp.fail(res);
  }
};

exports.deletProduct = async (req, res) => {
  try {
    let deleteProduct = await ProductModel.findById(req.params.id);

    if (!deleteProduct) {
      return resp.notFound(res, "No Product Available in DataBase!");
    }

    // deleteProduct = await ProductModel.findByIdAndDelete(req.params.id);
    deleteProduct = deleteProduct.deleteOne();
    console.log(deleteProduct);

    return resp.success(res, "Product Deleted!", deleteProduct);
  } catch (error) {
    console.log(error);
    return resp.fail(res);
  }
};
