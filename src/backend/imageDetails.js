const mongoose = require('mongoose');

const ImageDetailSchema = new mongoose.Schema(
  {
    image: String
  }
  ,
  {
    collection: "ImageInfo"
  }
);

// const ImageInfo = mongoose.model("ImageInfo", ImageDetailSchema);

// module.exports = ImageInfo;
module.exports=mongoose.model("ImageInfo",ImageDetailSchema)