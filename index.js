const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

const videos = [
    "ZUwdVCCyeqI",
    "yZ59x8Adf4A",
    "rsLU9kCvkD8",
    "84Q6rovAxg4",
    "50kJeC3MT1w"
]

app.get('/api/videos', (req, res) => {
    res.send(videos)
})

if (process.env.NODE_ENV != 'development') {
    app.use(express.static(path.join(__dirname, 'front/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'front/build/index.html', function (error) {
            if (error) {
                res.status(500).send(error)
            }
        }))
    })
}
app.listen(3000, () => {
    console.log("Server running on port 3000")
})