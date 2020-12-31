const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('../db/words.json')
const db = low(adapter)


function getUser(id) {

    user = db.get('users')
      .find({ _id: id })
      .value();
      
    return user;
};

module.exports = {
    getUser: getUser
};