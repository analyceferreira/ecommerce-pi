const { fstat } = require("fs")

const fs = require('fs');

const User = {
    fileName: './database/users.json',

    getUsers: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    findUserById: function (id) {
     let allUsers = this.getUsers();
     let userFound = allUsers.find( oneUser.id === id);
     return userFound;
    }
}

console.log(User.getUsers())