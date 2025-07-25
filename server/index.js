import express from 'express'  // Import Express

const app = express()          // Initialize Express app

// Define a GET route at "/"
app.get('/', (req, res) => {
  res.send('Hello World')      // Send response
})

// Start server on port 3000
app.listen(3000, () => {
  console.log("Listening to port no 3000!");
})
