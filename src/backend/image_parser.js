const express = require("express");
const compress_images = require("compress-images");
const app = express();
const mongoose = require("mongoose");

const ImageInfo = require("./imageDetails"); //import as it in xported



app.use(express.json());

const cors = require("cors");
app.use(cors());

//mongodb connection
const mongoUrl = "mongodb://localhost:27017/Testdb";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

//importing schema
// require("./imageDetails");
// const Images = mongoose.model("ImageDetails");

app.get("/", async (req, res) => {
  res.send("Success!!!!!!");
});

app.post("/fire", async (req, res) => {
  try {
    res.json(req.body.image);
  } catch (error) {
    res.json({ status: error.message });
  }
});

let INPUT_path_to_your_images =
  "/src/uploads/dice_png.{jpg,JPG,jpeg,JPEG,png,svg,gif}";
  let OUTPUT_path = "../uploads";

app.post("/compressImage", async (req, res) => {
  compress_images(
    INPUT_path_to_your_images,
    OUTPUT_path,
    { compress_force: false, statistic: true, autoupdate: true },
    false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
    { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    {
      gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] },
    },
    function (error, completed, statistic) {
      console.log(req.body.image.type);
      console.log(req.body.image);
      console.log("-------------");
      console.log(error);
      console.log(completed);
      console.log(statistic);
      console.log("-------------");
    }
  );
});

app.post("/upload", async (req, res) => {
  // console.log(req.body)
  // const imageName=req.file.filename;
  const imageName = req.body.image;
  try {
    ImageInfo.create({ image: imageName });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server Started on port 5000");
});
