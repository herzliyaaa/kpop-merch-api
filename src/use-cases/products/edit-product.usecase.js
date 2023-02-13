const editProduct = ({ productDB, productEntity }) => {
  return async function putProduct({ id, ...productInfo }) {
    const result = productEntity(productInfo);

    const data = await productDB.editProduct({
      id: id,
      printname: result.printname,
      barcode: result.barcode,
      unit: result.unit,
      qty: result.qty,
      cost: result.cost
    });

    return {
      msg: "Product Updated Successfully",
      data: data.rows
    };
  };
};
module.exports = editProduct;
