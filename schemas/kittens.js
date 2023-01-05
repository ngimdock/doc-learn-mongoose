import mongoose from "mongoose";
import { Kitten as KITTEN_TOKEN } from "../constants.js";

export const kittenSchema = new mongoose.Schema({
  name: String,
});

kittenSchema.methods.speak = function speak() {
  const greeting = this.name
    ? "My name is: " + this.name
    : "I don't have a name";

  return greeting;
};

export const Kitten = mongoose.model(KITTEN_TOKEN, kittenSchema);
