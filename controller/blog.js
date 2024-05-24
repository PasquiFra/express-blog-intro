//importo le funzioni di read e write in functions.js
const { readJSONData, writeJSONData } = require('./functions')

module.exports = {
    get: (request, response) => {
        if (request.url === "/") {
            return response.end('<h1>Benvenuto nel mio blog!</h1>')
        }


    }
}