import fs from "fs";
import fspromises from "fs/promises";
import path from "path";

if (!fs.existsSync(path.join(__dirname, "Namefolder"))) {
  fspromises.mkdir(path.join(__dirname, "Namefolder"));
}

setInterval(() => {
  fspromises.appendFile(
    path.join(__dirname, "Namefolder", "name.txt"),
    "My name is judith\t I am the best in my class \ti love node.js\n"
  );
});
