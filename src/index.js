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
      name: "React Js",
      ctype: "Front-end",
      videos: 73,
      author: "Thapa tech",
      active: true,
    })

    const nodePlaylist = new playList({
        name: "Node Js",
        ctype: "Backend",
        videos: 83,
        author: "Thapa tech",
        active: true,
      })

      const javascriptPlaylist = new playList({
        name: "Javascript",
        ctype: "front-end",
        videos: 100,
        author: "Thapa tech",
        active: true,
      })

    const result = await playList.insertMany([reactPlaylist, nodePlaylist, javascriptPlaylist]);
    console.log(result);
  } catch (err) {
    console.log(`Error in createDocument ---- ${err}`);
  }
};

// createDocument();

const getDocument = async () => {
  const result = await playList.find();
  console.log(result);
}

getDocument();