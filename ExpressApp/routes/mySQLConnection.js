const mysql = require('mysql');

function Connection({ host, user, password, database }) {
    this.connection = mysql.createConnection({ host, user, password, database });
}
Connection.prototype.query = function (queryString, values) {
    return new Promise((resolve, reject) => {
        this.connection.query(queryString, values, (err, result) => {
            if (err)
                reject(err);
            resolve(result);
        });
    });
}
Connection.prototype.end = function () {
    return new Promise((resolve, reject) => {
        this.connection.end(err => {
            if (err)
                return reject(err);
            resolve();
        });
    });
}

module.exports = Connection;