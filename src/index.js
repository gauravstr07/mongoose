const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/thapatech", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successfull to mongoDB😍");
  })
  .catch((err) => {
    console.log(`Something went wrong in DB 😪 --------- ${err}`);
  });

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

const playList = new mongoose.model("Playlist", playlistSchema);

const createDocument = async () => {
  try {
    const reactPlaylist = new playList({
      name: "Node Js",
      ctype: "Backend",
      videos: 83,
      author: "Thapa tech",
      active: true,
    });

    const result = await reactPlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(`Error in createDocument ---- ${err}`);
  }
};

createDocument();
