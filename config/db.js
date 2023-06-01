const mongoose = require("mongoose");

// h2yvSqsrrYLC4d7c
mongoose
  .connect(
    'mongodb+srv://shaiksubahan20:h2yvSqsrrYLC4d7c@cluster0.rwnxjlu.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log("db connected!");
  })
  .catch((e) => {
    console.log("db not connect: ", e);
  });


  // https://api.postman.com/collections/27744838-4ce24b6a-7317-4616-850c-5e4926dcf6dd?access_key=PMAT-01H1V53W6XABER6WA1M909Q9QF
  // ye link upload kr dena or gihub ka link dal dena ek video bna k dal dena ho jayega pass