const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/util/mongoose');
require('./db/models/User');
require('./db/models/Expense');

const User = mongoose.model('User');
const Expense = mongoose.model('Expense');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.get('/', (req,res)=>{
  console.log('Called GET / ');
  res.status(200).send('Welcome!!');
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

app.listen(PORT, ()=>{
  console.log(`Express server started at port : ${PORT}`);
})