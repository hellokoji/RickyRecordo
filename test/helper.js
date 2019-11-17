var path = require('path');

module.exports = {
  appPath: function() {
    switch (process.platform) {
      case 'darwin':
        return path.join(__dirname, '..', '.tmp', 'mac', 'RickyRecordo.app', 'Contents', 'MacOS', 'RickyRecordo');
      case 'linux':
        return path.join(__dirname, '..', '.tmp', 'linux', 'RickyRecordo');
      default:
        throw 'Unsupported platform';
    }
  }
};
