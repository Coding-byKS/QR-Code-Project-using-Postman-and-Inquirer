import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";


inquirer
  .prompt([
    {
      name:"inputUrl",
      message:"Please input your URL."
    }
    ])
  .then(answer=>{    
    let qr_svg = qr.image(answer.inputUrl);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
    fs.writeFile("URL.txt", answer.inputUrl, (err)=>{
        if(err) throw err;
    }
    )
  });


