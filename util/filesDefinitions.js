const multer = require("multer");
const path = require("path");

exports.fileStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join("public", "images"))
    },

    filename: (req, file, callback) => {
        callback(null, new Date().toISOString() + file.originalname)
    }
})

exports.fileFilter = (req, file, callback) => {
    const conditionals = [
        file.mimetype === "image/png",
        file.mimetype === "image/jpg",
        file.mimetype === "image/jpeg"
    ]

    return conditionals.includes(true) ? callback(null, true) : callback(null, false);
}