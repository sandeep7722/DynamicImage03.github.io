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
  const images = ['image1.png', 'image2.png', 'image3.png', 'image4.png', 'image5.png', 'image6.png', 'image7.png', 'image8.png', 'image9.png', 'image10.png', 
                  'image11.png', 'image12.png', 'image13.png', 'image14.png', 'image15.png', 'image16.png', 'image17.png', 'image18.png', 'image19.png', 'image20.png', 'image21.png', 'image22.png', 'image23.png', 'image24.png', 'image25.png']; // List of image files
  const randomImage = images[Math.floor(Math.random() * images.length)];
  
  // Send the selected image as a response
  res.sendFile(`${__dirname}/images/${randomImage}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
