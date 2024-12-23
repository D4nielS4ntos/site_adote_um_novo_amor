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
    console.log("Realizando consulta em tbanimalanomalia")
    executarConsulta('SELECT * FROM tbanimalanomalia', [], res, "Erro na consulta de tbanimalanomalia")
})


router.post('/', (req, res) => {
  const { id_animal, id_anomalia } = req.body;
  console.log(id_animal, id_anomalia)
  console.log("Realizando cadastro em tbanimalanomalia")
  executarConsulta('INSERT INTO tbanimalanomalia (id_animal, id_anomalia) VALUES (?, ?)', [id_animal, id_anomalia], res, "Erro no cadastro de tbanimalanomalia")
})


module.exports = router
