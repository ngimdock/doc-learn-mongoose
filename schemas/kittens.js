import mongoose from "mongoose";
import { Kitten as KITTEN_TOKEN } from "../constants.js";

export const kittenSchema = new mongoose.Schema({
  name: String,
});

export const Kitten = mongoose.model(KITTEN_TOKEN, kittenSchema);
