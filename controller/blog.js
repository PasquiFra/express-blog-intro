//importo le funzioni di read e write in functions.js
const { readJSONData, writeJSONData } = require('../functions.js')

module.exports = {
    get: (request, response) => {
        if (request.url === "/") {
            return response.end('<h1>Benvenuto nel mio blog!</h1>')
        }

        //leggo il file posts.json (già parsato) e lo assegno ad una variabile
        const posts = readJSONData('posts');

        // Setto la risposta da inviare al client a seconda del formato che viene richiesto
        response.format({
            html: () => {
                let html = '<div>';
                posts.forEach(({ title, content, image, tags }) => {
                    html +=
                        `<div>
                        <h3>${title}</h3>
                        <img style='width=75px'>${image}</img>
                        <p>${content}</p>
                        </br>
                    `;
                    html += '<ul>'
                    tags.forEach(tag => {
                        html += `<li>${tag}</li>`
                    });
                    html += `</ul></div>`;
                });
                html += '</div>';
                response.send(html);
            },
            json: () => {
                response.json(posts);
            }
        })
    }
}