const sharp = require("sharp");
const fs = require("node:fs");
var path = require("path");

const folderServicesPath = "./public/images/services/";
const folderImagePath = "./public/images/";

var fn = (folderPath) => {
  fs.readdirSync(folderPath)
    .filter((element) => path.extname(element) === ".jpg")
    .forEach((element) => {
      sharp(`${folderPath}${element}`)
        .resize(300)
        .webp()
        .toFile(`${folderPath}${path.basename(element, ".jpg")}_mobile.webp`)
        .then((info) => console.log(info))
        .catch((err) => console.error(err));

      sharp(`${folderPath}${element}`)
        .resize(900)
        .webp()
        .toFile(`${folderPath}${path.basename(element, ".jpg")}_desktop.webp`)
        .then((info) => console.log(info))
        .catch((err) => console.error(err));
    });
};


fn(folderServicesPath);
fn(folderImagePath);