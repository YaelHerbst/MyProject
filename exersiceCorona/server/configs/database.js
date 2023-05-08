const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/exersiceCorona", { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to the database');
    // Continue with your application logic
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });


