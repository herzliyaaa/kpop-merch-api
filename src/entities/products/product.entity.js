const productEntity = (product) => {
  const { name, description } = product;

  if (!name) {
    throw new Error("Printname is required.");
  }
  if (!description) {
    throw new Error("Description is required.");
  }

  return Object.freeze({
    name,
    description,
  });
};

module.exports = productEntity;
