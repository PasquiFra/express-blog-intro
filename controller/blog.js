module.exports = {
    get: (request, response) => {
        if (request.url === "/") {
            response.end('<h1>Benvenuto nel mio blog!</h1>')
        }
    }
}