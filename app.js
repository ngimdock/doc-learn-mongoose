import mongoose from "mongoose";

mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/nodejs-learn-mongoose");

  await runInstructions();
}

async function runInstructions() {
  console.log("salut les gens");
}
