const viewProduct = ({ productDB }) => {
  return async function viewProduct(info) {
    const { id } = info;
    const result = await productDB.getProductById(id);
    return result.rows;
  };
};

module.exports = viewProduct;
