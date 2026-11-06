const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, '..', 'test-data', 'last-published-post.json');

function saveLastPublishedPost(data) {
  fs.mkdirSync(path.dirname(FILE_PATH), { recursive: true });
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}

function tryGetLastPublishedPost() {
  if (!fs.existsSync(FILE_PATH)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
}

module.exports = { saveLastPublishedPost, tryGetLastPublishedPost };
