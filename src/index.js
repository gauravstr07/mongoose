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
    });

    const nodePlaylist = new playList({
      name: "Node Js",
      ctype: "Backend",
      videos: 83,
      author: "Thapa tech",
      active: true,
    });

    const javascriptPlaylist = new playList({
      name: "Javascript",
      ctype: "front-end",
      videos: 100,
      author: "Thapa tech",
      active: true,
    });

    const javaPlaylist = new playList({
      name: "java",
      ctype: "backend",
      videos: 113,
      author: "Code With Harry",
      active: true,
    });

    const result = await playList.insertMany([
      reactPlaylist,
      nodePlaylist,
      javascriptPlaylist,
      javaPlaylist,
    ]);
    console.log(result);
  } catch (err) {
    console.log(`Error in createDocument ---- ${err}`);
  }
};
//createDocument();

const getDocument = async () => {
  const result = await playList
    .find({
      $or: [{ ctype: "backend" }, { author: "Thapa tech" }],
    })
    .select({ name: 1 })
    .sort({ name: 1 });
  console.log(result);
};
//getDocument();

const updateDocument = async (_id) => {
  try {
    const result = await playList.findByIdAndUpdate(
      { _id },
      {
        $set: {
          name: "Core-Java",
          ctype: "core-java",
        },
      }
    );
    console.log(result);
  } catch (err) {
    console.log(`Error in updateDocument ---------- ${err}`);
  }
};
//updateDocument("63357e079d2b858b12b853c1");

const deleteDocument = async (_id) => {
  try {
    const result = await playList.findByIdAndDelete({ _id });
    console.log(result);
  } catch (error) {
    console.log(`Error in deleteDocument ---- ${error}`);
  }
};

deleteDocument("633547fc0ff32b035e45e23e");
