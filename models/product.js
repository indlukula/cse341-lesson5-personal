module.exports = (mongoose) => {
    const Product = mongoose.model(
      'product',
      mongoose.Schema({
        productName: {
          type: String
        },
        PLUcode: {
          type: Number
        },
        barcode: {
          type: Number
        },
        description: {
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