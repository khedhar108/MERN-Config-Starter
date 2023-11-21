import multer from "multer";

const storageOption = multer.diskStorage({
    //! never use arrow function here - this context create conflicts - only usev traditional function
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage: storageOption,
});
