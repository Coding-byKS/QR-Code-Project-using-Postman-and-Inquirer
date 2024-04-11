import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import fs from "fs";
import qr from "qr-image";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  console.log(__dirname + "/index.html");
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req,res) =>{  
  console.log(req.body);
  let qr_svg = qr.image(req.body.url);
  qr_svg.pipe(fs.createWriteStream('qr_image.png'));
  fs.writeFile("URL.txt", req.body.url, (err)=>{
    if(err) throw err;
    })
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});