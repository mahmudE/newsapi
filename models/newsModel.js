let allnews = require('../data/allnews');


// get allnews
function getAll() {
    return new Promise((resolve, reject) => {
        resolve(allnews)
    })
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const news = allnews.find((p) => p.id === id)
        resolve(news)
    })
}


module.exports = {
    getAll,
    findById
}
