const {
  addProductUseCase,
  editProductUseCase,
  viewProductUseCase,
  viewAllProductUseCase,
  softDeleteProductUseCase
} = require("../../use-cases/product/index");

const addProductController = require("./add-product.controller");
const editProductController = require("./edit-product.controller");
const fetchAllProductsController = require("./get-all-products.controller");
const fetchProductDetailsController = require("./get-product-details.controller");
const deleteProductController = require("./soft-delete-product.controller");

const postProductController = addProductController({
  addProductUseCase
});
const putProductController = editProductController({
  editProductUseCase
});
const getAllProductController = fetchAllProductsController({
  viewAllProductUseCase
});
const getProductByIdController = fetchProductDetailsController({
  viewProductUseCase
});

const softDeleteProductController = deleteProductController({
  softDeleteProductUseCase
});

module.exports = Object.freeze({
  postProductController,
  putProductController,
  getAllProductController,
  getProductByIdController,
  softDeleteProductController
});
