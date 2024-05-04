const http = require('http');
const { getAll, getSingleNews } = require('./controllers/newsController');



const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    // the line above helps you deal with CORS issue
    if(req.url === '/api/allnews' && req.method === 'GET') {
        getAll(req, res)
    } else if(req.url.match(/\/api\/allnews\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3] //takes string and split into array using / delimeter
        getSingleNews(req, res, id)
    }
    else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'Route not found'}))
    }
    
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
