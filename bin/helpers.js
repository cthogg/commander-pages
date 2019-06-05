const fs = require('fs');

exports.createFile = (dir, text) => {
  // eslint-disable-next-line
  fs.writeFile(dir, text, (err) => {
    if (err) {
      return console.log(err);
    }
  });
};

// eslint-disable-next-line
exports.createDirectory = (dir, err) => {
  if (!fs.existsSync(dir, { recursive: true })) {
    fs.mkdirSync(dir, { recursive: true });
    if (err) {
      return console.log(err);
    }
  }
};
