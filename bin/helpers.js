const fs = require('fs');

exports.createFile = (dir, text) => {
  // eslint-disable-next-line
  fs.writeFile(dir, text, (err) => {
    if (err) {
      return console.log(err);
    }
  });
};

exports.createDirectory = (dir) => {
  if (!fs.existsSync(dir, { recursive: true })) {
    fs.mkdirSync(dir, { recursive: true });
    console.log('created');
  }
};
