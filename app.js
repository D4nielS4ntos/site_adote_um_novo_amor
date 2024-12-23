const express = require('express')
const cors = require('cors')
// const path = require('path')
const app = express()
const port = 3000
const adotantesRouter = require('./controllers/adotantesController.js')
const animaisRouter = require('./controllers/animaisController.js')
const anomaliasRouter = require('./controllers/anomaliasController.js')
const animalAnomaliasRouter = require('./controllers/animalAnomaliasController.js')
const pedidosRouter = require('./controllers/registrosController.js')


// app.use(express.static("../cliente"))
app.use(express.json())
// Tira o cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    // res.setHeader('Access-Control-Allow-Methods', '*');
    next();
});

const corsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization']
};
  
app.use(cors(corsOptions));
  

app.get("/", (req, res) => {
    res.send("Servidor funcionando")
})

// Rotas
app.use("/adotantes", adotantesRouter)
app.use("/animais", animaisRouter)
app.use("/anomalias", anomaliasRouter)
app.use("/animais_anomalias", animalAnomaliasRouter)
app.use("/registrar_pedidos", pedidosRouter)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`)
})
