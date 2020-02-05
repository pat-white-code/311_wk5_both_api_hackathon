const mysql = require('mysql');

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '34.70.100.41',
        user: 'root',
        password: 'JoeBiden354',
        database: 'employees'
      })

      return this.pool
    }

    return this.pool
  }
}

module.exports = Connection;