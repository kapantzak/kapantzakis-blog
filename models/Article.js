import mongoose, { Schema } from "mongoose";

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please provide a title for the article"],
    maxLength: [200, "Title cannot be more than 200 characters"],
  },
  body: {
    type: String,
    required: [true, "Please provide a body for the article"],
  },
});

export default mongoose.models.Article ||
  mongoose.model("Article", ArticleSchema);
