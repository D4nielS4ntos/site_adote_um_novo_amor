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
    console.log("Realizando consulta em tbanimal")
    executarConsulta('SELECT * FROM tbanimal', [], res, "Erro na consulta de tbanimal")
})


router.get('/filtrar', (req, res) => {
  const nome = req.query.nome;
  const raca = req.query.raca;
  console.log("Realizando consulta filtrada em tbanimal")
  executarConsulta(`SELECT * FROM tbanimal WHERE nome LIKE '%${nome}%' AND raca LIKE '%${raca}%' AND status LIKE 'Disponível'`, [], res, "Erro na consulta de tbanimal")
})


router.get('/:id', (req, res) => {
    let id_animal = req.params.id;
    console.log("Realizando consulta em tbanimal")
    executarConsulta(`SELECT * FROM tbanimal WHERE id_animal= '${id_animal}'`, [], res, "Erro na consulta de tbanimal")
})


router.post('/', (req, res) => {
  const { nome, raca, peso, altura, status, descricao, adotante, nascimento } = req.body;
  console.log(nome, raca, peso, altura, status, descricao, adotante, nascimento)
  console.log("Realizando cadastro em tbanimal")
  executarConsulta('INSERT INTO tbanimal (nome, raca, peso, altura, status, descricao, id_adotante, idade) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [nome, raca, peso, altura, status, descricao, adotante, nascimento], res, "Erro no cadastro de tbanimal")
})


router.put('/', (req, res) => {
  const { pedido } = req.body;
  const id_adotante = pedido.adotante.id_adotante
  const id_animal = pedido.animal.id_animal
  console.log(pedido + id_adotante + id_animal)
  console.log("Realizando mudança em tbanimal")
  executarConsulta('UPDATE tbanimal SET id_adotante = ?, status = "Adotado"  WHERE id_animal = ?', [id_adotante, id_animal], res, "Erro ao atualizar administradora");
})


module.exports = router
