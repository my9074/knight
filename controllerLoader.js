const fs = require('fs');

function loadController() {
    const url = './controller';
    const dir = fs.readdirSync(url)

    return dir.map(filename => {
        const controller = require(url + '/' + filename);
        return { name: filename.split('.')[0], controller };
    })
}

module.exports = loadController;