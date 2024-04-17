import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        name: "URL",
        message: "Type your URL here:",
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url, { type: 'png' }); // Default type is png
    qr_svg.pipe(fs.createWriteStream('qr_code_img'));

    fs.writeFile('2.4 QR Code Project/URL.txt', url, err => {
    if (err) {
        console.error(err);
    } else {
        console.log("File save succesfully!");
    }
});
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      // Something else went wrong
    }
  });


