import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/Auth.js";
import productRouter from './routes/Products.js'
const app = express();
const PORT = 3001;

const username = "muhammed-swalih";
const password = "swalihpalakad";

const dbConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb://muhammed-swalih:swalihpalakkad@ac-kmusqgi-shard-00-00.huecgac.mongodb.net:27017,ac-kmusqgi-shard-00-01.huecgac.mongodb.net:27017,ac-kmusqgi-shard-00-02.huecgac.mongodb.net:27017/?ssl=true&replicaSet=atlas-js9f1s-shard-0&authSource=admin&retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit the process if unable to connect to MongoDf
  }
};

//middlewares
app.use(express.json());
app.use("/auth", authRoute);
app.use("/products", productRouter)
app.use((err,req,res,next)=>{
  const errorMessage = err.message;
  const errorStatus = err.errorStatus;

  res.status(errorStatus).json({
    status : "failed",
    message : errorMessage,
    status : errorStatus,
    stack : err.stack
  })
})

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  dbConnection();
});
