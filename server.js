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
                  'image11.png', 'image12.png', 'image13.png', 'image14.png', 'image15.png', 'image16.png', 'image17.png', 'image18.png', 'image19.png', 'image20.png', 'image21.png', 'image22.png', 'image23.png', 'image24.png', 'image25.png',
                 'image26.png', 'image27.png', 'image28.png', 'image29.png', 'image30.png', 'image31.png', 'image32.png', 'image33.png', 'image34.png', 'image35.png', 
                  'image36.png', 'image37.png', 'image38.png', 'image39.png', 'image40.png', 'image41.png', 'image42.png', 'image43.png', 'image44.png', 'image45.png', 'image46.png', 'image47.png', 'image48.png', 'image49.png', 'image50.png',
                 'image51.png', 'image52.png', 'image53.png', 'image54.png', 'image55.png', 'image56.png', 'image57.png', 'image58.png', 'image59.png', 'image60.png', 'image61.png', 'image62.png', 'image63.png', 'image64.png', 'image65.png',
                 'image66.png', 'image67.png', 'image68.png', 'image69.png', 'image70.png', 'image71.png', 'image72.png', 'image73.png', 'image74.png', 'image75.png', 'image76.png', 'image77.png', 'image78.png', 'image79.png', 'image80.png',
                 'image81.png', 'image82.png', 'image83.png', 'image84.png', 'image85.png', 'image86.png', 'image87.png', 'image88.png', 'image89.png', 'image90.png', 'image91.png', 'image92.png', 'image93.png', 'image94.png', 'image95.png',
                 'image96.png', 'image97.png', 'image98.png', 'image99.png', 'image100.png']; // List of image files
  const randomImage = images[Math.floor(Math.random() * images.length)];
  
  // Send the selected image as a response
  res.sendFile(`${__dirname}/images/${randomImage}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
