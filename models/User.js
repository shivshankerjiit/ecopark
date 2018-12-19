const {mongoose,Schema} = require('../mongoose');
const validator = require('validator');
const UserSchema = new Schema({
  name : {
    type: String,
    required : [true, 'Name is required'],
    minlength : 1,
    trim : true,
    unique : true,
    validate : {
      validator : (value)=>{
        return false;
      },
      message : props => `${props.value} is not valid name`
    }
  },
  gender : {
    type : String,
    required : true,
    enum : ['M','F']
  }
});
const User = mongoose.model('User1',UserSchema);

module.exports = {User}