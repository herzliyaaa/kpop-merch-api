const addProduct = ({ productDB, productEntity }) => {
  return async function postProduct(info) {
    const result = productEntity(info);

    const data = await productDB.addProduct({
      name: result.name,
      description: result.description,
   
    });

    return {
      msg: "Product Added Successfully",
      product: data
    };

  };
};
module.exports = addProduct;
