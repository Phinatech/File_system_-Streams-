import fs from "fs";

const streaming = async () => {
  const readStream = fs.createReadStream("./Namefolder/name.txt", {
    highWaterMark: 10,
  });

  const writestream = fs.createWriteStream("./Namefolder/Newname.txt");

  readStream.on("data", (buffer) => {
    console.log("reading data");
    console.log(buffer.toString());

    writestream.write(buffer);
  });

  readStream.on("end", () => {
    console.log("Read successful");
  });
};

streaming();
