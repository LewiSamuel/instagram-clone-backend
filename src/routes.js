const express = require('express');
const multer = require('multer');
const routes = new express.Router();
const uploadConfig = require('./config/upload')

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const upload = multer(uploadConfig);

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);

routes.post('/posts/:id/like', LikeController.store);

routes.get('/', (req, res) => {
    return res.send("API REST - INSTA CLONE");
});


module.exports = routes;