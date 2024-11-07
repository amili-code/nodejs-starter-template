const express = require("express");
const router = express.Router();
const multer = require('multer');




const picStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/pic");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})


const picUpload = multer({ storage: picStorage });

const apiController = require("app/api");

//router.post('/example', picUpload.single("pic") , apiController.example.bind(apiController))


module.exports = router;
