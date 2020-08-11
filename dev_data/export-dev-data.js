const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Video = require('../models/Video');
const shortid = require('shortid');

 
 
mongoose
  .connect("mongodb+srv://dbuser1:Testing@cluster0.louud.mongodb.net/apiVibeArmy?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));
 
 
// READ FILE - products.json
var jsonPath = path.join(__dirname, '..', 'static', 'videos.json');
var jsonString = fs.readFileSync(jsonPath, 'utf8');
const videos = JSON.parse(jsonString);
 
// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Video.create(videos);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
 
//this makes it possible to run this command "node export-dev-data.js --import"
if (process.argv[2] === '--import') {
  importData();
}