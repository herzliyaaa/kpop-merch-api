const editProduct = ({ productDB, productEntity }) => {
  return async function putProduct({ id, ...productInfo }) {
    const result = productEntity(productInfo);

    const data = await productDB.editProduct({
      id: id,
      name: result.name,
      description: result.description,
    });

    console.log(data)
    return {
      msg: "Product Updated Successfully",
      data: data,
    };
  };
};
module.exports = editProduct;
