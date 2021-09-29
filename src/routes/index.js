const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Database
var db = require('../db.js')


router.get('/', (req, res) => {
    res.render('index.html');
});

router.post('/', urlencodedParser, (req, res, err) => {
    // Tomando la data
    data = JSON.stringify(req.body);
    data2 = JSON.parse(data);

    // Almacenando la data localmente
    nombre = data2['nombre'];
    correctas = data2['correctas'];
    incorrectas = data2['incorrectas'];

    // Procedimiento
    if (correctas < 0 || incorrectas < 0) {
        res.send('<script>alert("Valores invalidos, por favor ingresalos nuevamente")</script>');
    }
    else {
        prom = correctas * 4;
        prom = prom + (-1 * incorrectas)
        res.json(prom);
    }

     // Almacenando en la base de datos
     var sql = 'INSERT INTO users (name, correctas, incorrectas, promedio) VALUES (?, ?, ?, ?)'
     db.run(sql, nombre, correctas, incorrectas, prom, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success"
        })
     });
});

module.exports = router;