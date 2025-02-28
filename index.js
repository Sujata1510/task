


import express from "express";
import mongoose from "mongoose";
import studentRoutes from "./routes/studentRoutes.js";



const app = express();
mongoose.connect('mongodb+srv://sujakutuwa2:Happysoul@cluster0.cxvs4.mongodb.net/Students').then(() => {
  console.log('successfully connected');
}).catch(() => {
  console.log('sth');
})
app.use(express.json());
app.get("/", (req, res) => {

  return res.status(200).json({
    message: "Hello World"
  });

})
app.get("/students", (req, res) => {
  console.log(req.query);
  return res.status(200).json([

    {
      id: 1,
      name: "Sujata Kutuwa",
      email: "sujatakutuwa@gmail.com",
      Age: 23,
      "Course Enrolled": "MERN",


    },
    {
      id: 2,
      name: "Suja Kutuwa",
      email: "sujatakutuwa2@gmail.com",
      Age: 24,
      "Course Enrolled": "MERN"
    }

  ])

});
// app.use((req, res, next) => {
//   const { id } = req.query;
//   if ([1, 2, 3].includes(Number(id))) {
//     return next();
//   }
// })
// app.get("/students/:id", (req, res) => {
//   return res.status(200).json([
//     {

//     },
//   ])

// })

app.use("/api/students", studentRoutes)


app.listen(5000, () => {
  console.log("Server is running on port 5000");
})