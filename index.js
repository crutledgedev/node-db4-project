const express = require('express');

const server = express();

server.use(express.json());



server.get('/', (req, res) => {
    res.status(200).json({ message: "APi is online"})
})




const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    return console.log(`\n*** Server listening on port ${PORT} ***\n`)
})