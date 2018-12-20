const {mongoose} = require('../../db/util/mongoose');
require('../../db/models/User');
require('../../db/models/Expense');

const User = mongoose.model('User');
const Expense = mongoose.model('Expense');

module.exports = (app)=>{
   app.get('/', (req,res)=>{
     console.log('!Called GET / ');
     res.status(200).send('Welcome!!!');
   });

  app.post('/user', (req,res)=>{
    console.log('called POST /user');
    console.log(JSON.stringify(req.body,undefined,2));
    const user = new User(req.body);
    user.save(user).then(
      (data)=>{
        console.log(`Saved to DB : ${data}`);
      }, 
      (err)=>{
        console.log(`Error while saving user : ${err}`);
      }
    )
    res.status(200).send(req.body);
  });

  app.post('/expense', (req,res)=>{
    console.log(JSON.stringify(req.body,undefined,2));
    const expense = new Expense(req.body);
    expense.save().then(
      (data)=>{
        console.log(`Saved to DB : ${data}`);
      },
      (err) =>{
        console.log(`Error while saving expense : ${err}`);
      }
    );
    res.status(200).send(res.body);
  });

  app.get('/users',(req,res)=>{
    console.log('Called GET /users');
    User.find({})
              .then(
                (users)=>{
                  if(!users){
                  }
                  console.log(JSON.stringify(users,undefined,2));
                  res.status(200).send(JSON.stringify(users,undefined,2));
                },
                (err)=>{
                  res.status(404).send(err);
                } 
              );    
  });

  app.get('/user/:name',(req,res)=>{
    console.log('Called GET /user/${req.params.name}');
    console.log(req.params.name);
    Expense.find({spender : req.params.name})
              .then(
                (expenses)=>{
                  if(!expenses){
                  }
                  console.log(JSON.stringify(expenses,undefined,2));
                  res.status(200).send(JSON.stringify(expenses,undefined,2));
                },
                (err)=>{
                  res.status(404).send(err);
                }
              );    
  });

  app.get('/expenses',(req,res)=>{
    console.log('Called GET /expenses');
    Expense.find({})
              .then(
                (expenses)=>{
                  if(!expenses){
                  }
                  console.log(JSON.stringify(expenses,undefined,2));
                  res.status(200).send(JSON.stringify(expenses,undefined,2));
                },
                (err)=>{
                  res.status(404).send(err);
                } 
              );    
  });

}