import multer from "multer";

// Configure Multer storage
const storage = multer.diskStorage({});

// Filter to accept only PDF files
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(new Error(".pdf files are allowed!"), false); // Reject file
  } else {
    cb(null, true);
  }
};

// Initialize multer
const upload = multer({ storage, fileFilter });

export default upload;
