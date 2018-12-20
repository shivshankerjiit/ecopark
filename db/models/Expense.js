const {mongoose,Schema} = require('../util/mongoose');
const validator = require('validator');
const ExpenseSchema = new Schema({
  spender : {
    type: String,
    required : [true, 'Spender Name is required'],
    minlength : 1,
    trim : true,
  }, 
  item : {  
    type: String,    
    minlength : 1,
    trim : true,
  }, 
  amount : {
    type : Number,
    required : [true, 'Amount is required']
  },
  time : {
    type: Number    
  },  
  sharedBy : [
    {
      name : {
        type : String
      }
    }
  ]
});
const Expense = mongoose.model('Expense',ExpenseSchema);

module.exports = {Expense}