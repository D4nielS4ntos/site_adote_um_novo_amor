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
    console.log("Realizando consulta em tbadotante")
    executarConsulta('SELECT * FROM tbadotante', [], res, "Erro na consulta de tbadotante")
})


router.get('/:id', (req, res) => {
    let id_adotante = req.params.id
    console.log(id_adotante)
    console.log("Realizando consulta em tbadotante")
    executarConsulta(`SELECT * FROM tbadotante WHERE id_adotante= '${id_adotante}'`, [], res, "Erro na consulta de tbadotante")
})


router.post('/', (req, res) => {
  const { nome, cpf, genero, aniversario, contato, renda } = req.body;
  // console.log(nome, cpf, aniversario, contato, renda)
  console.log("Realizando cadastro em tbadotante")
  executarConsulta('INSERT INTO tbadotante (nome, cpf, genero, data_nascimento, contato, renda) VALUES (?, ?, ?, ?, ?, ?)', [nome, cpf, genero, aniversario, contato, renda], res, "Erro no cadastro de tbadotante")
})


module.exports = router
