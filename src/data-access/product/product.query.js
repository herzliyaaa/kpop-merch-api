const { where } = require("sequelize");

const productData = ({ model }) => {
  return Object.freeze({
    getAllProducts,
    getProductById,
    addProduct,
    editProduct,
    softDeleteProduct,
  });

  async function getAllProducts() {
    try {
      const Product = model.productDataModel;
      const response = await Product.findAll({
        order: [["name", "DESC"]],
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function getProductById(id) {
    try {
      const Product = model.productDataModel;
      const response = await Product.findByPk(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function addProduct(product) {
    try {
      const { name, description } = product;
      const Product = model.productDataModel;
      const response = await Product.create({
        name: name,
        description: description,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function editProduct(product) {
    try {
      const { name, description, id } = product;
      const Product = model.productDataModel;
      const response = await Product.update({name: name, description: description}, {
        where: { id: id },
      });
      console.log(response)
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function softDeleteProduct(id) {
    try {
      const { name, description, id } = product;
      const Product = model.productDataModel;
      const response = await Product.update({name: name, description: description}, {
        where: { id: id },
      });
      console.log(response)
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = productData;
