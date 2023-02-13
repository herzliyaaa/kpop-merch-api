const viewAllProduct = ({ productDB }) => {
  return async function viewProducts() {
    const result = await productDB.getAllProducts();
    return result.rows;
  };
};

module.exports = viewAllProduct;
