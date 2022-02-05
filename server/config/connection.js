const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/FurrEE-Fam-adoptions',
  { 
    useCreateIndex: true, 
    useFindAndModify: false, 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  }
);

module.exports = mongoose.connection;
