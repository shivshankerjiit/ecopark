const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.Promise = global.Promise;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/EcoPark';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
module.exports = {mongoose,Schema}