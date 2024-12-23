const express = require('express')
const router = express.Router()
const db = require('../db/db.js')


function executarConsulta(sql, params, res, erroMsg) {
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(500).json({ erro: erroMsg, detalhes: err })
      } else {
        res.status(200).json(result)
      }
    })
}


router.get('/', (req, res) => {
    console.log("Realizando consulta em tbanomalias")
    executarConsulta('SELECT * FROM tbanomalias', [], res, "Erro na consulta de tbanomalias")
})


module.exports = router
