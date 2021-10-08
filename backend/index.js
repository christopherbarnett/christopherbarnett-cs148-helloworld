const express = require('express')
const path = require('path')
const app = express()
const port = 8080

app.get('/hello_world', (req, res) => {
    const response = {
        text: "Hello World!",
        person: "chris",
        image: "https://cdn-images-1.medium.com/max/1600/1*U-R58ahr5dtAvtSLGK2wXg.png"
    }
  res.send(response)
})

app.get('/wolf_manga', (req, res) => {
    const response = {
        text: "Wolf Manga!",
        person: "chris",
        image: "https://yt3.ggpht.com/xe-cKUnRsT6TwcEvh5Z5DJWJGDmsicN6ABvIEVRVV2jy4NwLVUJxh63cBewUP3RYN7BQWphRXA=s900-c-k-c0x00ffffff-no-rj"
    }
    res.send(response)
  })

// front end's build folder contents were copied over to backend's public folder
// express uses the backend's public folder as static assets -> need to be sent to user when requested
app.use(express.static(path.join(__dirname, "public")));
// matches routes to react app
app.get("*",(_,res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})