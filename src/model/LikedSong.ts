
import mongoose from "mongoose";

const { Schema } = mongoose;

const likedSongSchema = new Schema(
  {
    title:{
        type:String,
        required:true,
      },
    userMail:{
        type:String,
        required:true,
      },
      id:{
        type:String,
        required:true,
      },
      imgUrl:{
        type:String
      },
      artist:{
        type:String,
        required:true,
      },
      songUrl:{
        type:String
      },
      createdAt:{
         type:Date,
         default:new Date()
      },
  },
);

export default mongoose.models.LikedSong || mongoose.model("LikedSong", likedSongSchema);