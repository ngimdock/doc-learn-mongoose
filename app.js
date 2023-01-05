import mongoose from "mongoose";
import { Kitten } from "./schemas/kittens.js";

mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/nodejs-learn-mongoose");

  await runInstructions();
}

async function runInstructions() {
  const newKitten = new Kitten({ name: "miaou" });

  console.log({ newKitten });
}
