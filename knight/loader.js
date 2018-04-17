const fs = require('fs');

class KnightLoader {
    removeString(source) {
        const string = 'knight';
        const index = source.lastIndexOf(string);
        const len = string.length;
        return source.substring(0, index);
    }

    loader(path) {
        const dir = fs.readdirSync(path);
        return dir.map((filename) => {
            const module = require(path + '/' + filename);
            return { name: filename.split('.')[0], module };
        })
    }

    loadController() {
        const url = this.removeString(__dirname) + '/controller';
        return this.loader(url);
    }

    loadService() {
        const url = this.removeString(__dirname) + '/service';
        return this.loader(url);
    }

    loadConfig() {
        const url = this.removeString(__dirname) + '/config';
        return this.loader(url);
    }
}

module.exports = KnightLoader