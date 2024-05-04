const NewsModel = require('../models/newsModel');


// @desc  Gets all news
// @route GET api/all
async function getAll(req, res) {
    try {
        const allnews = await NewsModel.getAll() 

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(allnews))
    }catch(error) {
        console.log(error)
    }
}


// @desc  Gets single news
// @route GET api/news/:id
async function getSingleNews(req, res, id) {
    try {
        const news = await NewsModel.findById(id) // it is a promise

        if(!news) {
            res.writeHead(404, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({messege: 'news Not Found'}))
        }else {
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(news))
        }
    }catch(error) {
        console.log(error)
    }
}


// To make it visible for use out there
module.exports = {
    getAll,
    getSingleNews
}
