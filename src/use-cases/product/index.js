const productDB = require("../../data-access/product/index");
const productEntity = require("../../entities/product/index");

const addProduct = require("./add-product.usecase");
const editProduct = require("./edit-product.usecase");
const viewProduct = require("./view-product.usecase");
const viewAllProduct = require("./view-all-product.usecase");
const softDelProduct = require("./delete-product.usecase");

const addProductUseCase = addProduct({
  productDB,
  productEntity
});
const editProductUseCase = editProduct({
  productDB,
  productEntity
});
const viewProductUseCase = viewProduct({ productDB });
const viewAllProductUseCase = viewAllProduct({ productDB });
const softDeleteProductUseCase = softDelProduct({ productDB });

module.exports = {
  addProductUseCase,
  editProductUseCase,
  viewProductUseCase,
  viewAllProductUseCase,
  softDeleteProductUseCase
};
