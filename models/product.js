module.exports = (mongoose) => {
    const Product = mongoose.model(
      'product',
      mongoose.Schema({
        productId: {
          type: Number
        },
        PLUcode: {
          type: Number
        },
        barcode: {
          type: Number
        },
        productName: {
          type: String
        },
        
        category: {
          type: String
        },
        packsize: {
            type: Number
        },
        quantity: {
            type: Number
        },
        unitPrice: {
            type: Number
        },
        sellingPrice: {
            type: Number
        }
      })
    );
    
    return Product;
  };