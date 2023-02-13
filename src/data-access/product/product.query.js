const productData = ({ dbs }) => {
    return Object.freeze({
      getAllProducts,
      getProductById,
      addProduct,
      editProduct,
      softDeleteProduct
    });
  
    async function getAllProducts() {
      try {
       
      } catch (error) {
        console.log(error);
      }
    }
  
    async function getProductById(id) {
      try {
    
      
      } catch (error) {
        console.log(error);
      }
    }
  
    async function addProduct(product) {
      try {
       
      } catch (error) {
        console.log(error);
      }
    }
  
    async function editProduct(product) {
      try {
     
      } catch (error) {
        console.log(error);
      }
    }
  
    async function softDeleteProduct(id) {
      try {
      
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  module.exports = productData;
  