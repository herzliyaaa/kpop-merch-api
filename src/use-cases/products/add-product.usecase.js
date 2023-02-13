const addProduct = ({ productDB, productEntity }) => {
  return async function postProduct(info) {
    const result = productEntity(info);

    const data = await productDB.addProduct({
      printname: result.printname,
      barcode: result.barcode,
      unit: result.unit,
      qty: result.qty,
      qtybalance: result.qtybalance,
      cost: result.cost
    });

    return {
      msg: "Product Added Successfully",
      data: data.rows
    };

  };
};
module.exports = addProduct;
