module.exports = (mongoose) => {
    const userSchema = mongoose.Schema({
      username: {
        type: String
      },
      password: {
        type: String
      },
      displayName: {
        type: String
      },
      email: {
        type: String
      },
      phoneNumber: {
        type: String
      },
      designation: {
        type: String
     }
      
    });
  
    return mongoose.model('user', userSchema);
  };