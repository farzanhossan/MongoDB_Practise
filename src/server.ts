import app from './app';

const port: any = process.env.PORT || 3000;

const mongoose = require('mongoose');
mongoose.connect(process.env.mongo_db ,{ useNewUrlParser: true, useUnifiedTopology: true },(error: any)=>{
  if(!error){
    console.log("Database Connected");
  }else{
    console.log('Database Not Connected', error);
  }
});

new app().start(port)
  .then(port => console.log(`Server running on port ${port}`))
  .catch(error => {
    console.log(error)
    process.exit(1);
  });