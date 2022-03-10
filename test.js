const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

// Create Scheama
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// Create A Photo
Photo.create({
  title: 'Photo Title 12',
  description: 'Photo Description 21 Lorem Ipsum',
});

// // Read A Photo
// Photo.find({}, (err, data) => {
//   console.log(data);
// });

// // Update Photo
// const id = "6225e1a8bb580b045be0b458";

// Photo.findByIdAndUpdate(
//     id, {
//         title: "Photo Title 111 Updated",
//         description: "Photo 111 Description Updated"
//     },
//     {
//         new: true
//     },
//     (err, data) => {
//         console.log(data);
//     }
// );

// // Delete A Photo 
// Photo.findByIdAndDelete(id, (err, data) => {
//     console.log("Photo is Removed");
// });