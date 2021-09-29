var sqlite3 = require('sqlite3').verbose();

const DBSOURCE = 'db.sqlite'

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text NOT NULL, 
            correctas INTEGER NOT NULL, 
            incorrectas INTEGER NOT NULL,
            promedio INTEGER NOT NULL
            )`,
        (err) => {
            if (err) {
                // Table already created
            }
        });
    }
});

module.exports = db
