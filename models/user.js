module.exports = (mongoose) => {
    const userSchema = mongoose.Schema({
      userId: {
        type: Number
      },
      username: {
        type: String
      },
      firstname: {
        type: String
      },
      lastname: {
        type: String
      },
      password: {
        type: String
      },
     
      email: {
        type: String
      },
      phone: {
        type: String
      },
      designation: {
        type: String
     }
      
    });
    return mongoose.model('user', userSchema);
  };