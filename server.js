// Import required modules
const express = require('express');
const app = express();
const hostname='0.0.0.0';
const port = 3000;

// Serve static images from the 'images' folder
app.use(express.static('images'));

// Define a route to get a random image
app.get('/getRandomImage', (req, res) => {
  // Random image selection logic
  const images = ['image1.png', 'image2.png', 'image3.png']; // List of image files
  const randomImage = images[Math.floor(Math.random() * images.length)];
  
  // Send the selected image as a response
  res.sendFile(`${__dirname}/images/${randomImage}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
