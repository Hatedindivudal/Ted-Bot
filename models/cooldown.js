const profileSchema1 = new mongoose.Schema({
    userID: { type: String, require: true, unique: true },
  });
  
  const model = mongoose.model("ProfileModels1", profileSchema1);
  
  module.exports = model;