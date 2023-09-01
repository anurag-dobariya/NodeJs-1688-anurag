const {product} = require("../models");

const createProduct = async(reqBody)=>{
    return product.create(reqBody);
};

const getProductList = async(req,res) =>{
    return product.find();
};

const deleteProduct = async(productId) =>{
    return product.findByIdAndDelete(productId);
};

// Get product details by id
const getProductById = async (productId) =>{
    return product.findById(productId);
  };

  // update product details by id
  const productUpdate = async (productId , updateBody) =>{
    return product.findByIdAndUpdate(productId , {$set : updateBody});
  };

module.exports = {
    createProduct,
    getProductList,
    deleteProduct,
    getProductById,
    productUpdate
}
