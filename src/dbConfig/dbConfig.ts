import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongodv connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "mongodb connection error. please make sure mongo db is running. " +
          err,
      );
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong");
    console.log(error);
  }
}
