const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/util/mongoose');
require('./db/models/User');

const User = mongoose.model('User');

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

app.listen(PORT, ()=>{
  console.log(`Express server started at port : ${PORT}`);
})