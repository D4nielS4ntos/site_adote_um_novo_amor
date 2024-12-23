const express = require('express')
const router = express.Router()
const fs = require('fs')
const pedidos = require('../db/pedidos.json')


router.get('/', (req, res) => {
    try {
        console.log("Pegando pedidos")
        res.status(200).json(pedidos)
    } catch {
        res.status(500).json(err)
    }
})


router.post('/', async (req, res) => {
    let pedidos = req.body;
    // console.log(pedidos)
    fs.writeFile("./db/pedidos.json", JSON.stringify(pedidos), (err) => {
        if (err) throw err;
    })
})


module.exports = router
