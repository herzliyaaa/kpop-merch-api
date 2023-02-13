const viewProduct = ({ productDB }) => {
  return async function viewProduct(info) {
    const { id } = info;
    const result = await productDB.getProductById(id);
    return result;
  };
};

module.exports = viewProduct;
