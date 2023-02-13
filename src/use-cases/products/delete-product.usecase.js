const softDelProduct = ({ productDB }) => {
  return async function deleteProduct(info) {
    const { id } = info;

    const result = await productDB.softDeleteProduct(id);
    return { message: "Product Deleted Successfully", data: result.rows };
  };
};

module.exports = softDelProduct;
