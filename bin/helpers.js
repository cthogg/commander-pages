const fs = require('fs');

exports.createFile = (dir, text) => {
  fs.writeFile(dir, text, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved!');
  });
};

exports.createDirectory = (dir) => {
  if (!fs.existsSync(dir, { recursive: true })) {
    fs.mkdirSync(dir, { recursive: true });
    console.log('created');
  }
};
