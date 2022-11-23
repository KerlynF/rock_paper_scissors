const server = require("express");
const cors = require("cors");

const app = server();

app.use(cors());

let answers = [];

app.get('/answer', (answer,res) => {

    const id = answer.headers.hola;
    console.log(id);
    answers.push(id)
    if(answers.length === 2){
        if(answers[0].arma === 0 && answers[1].arma === 2){
            res.json("El jugador" + answers[0].id + "ha ganado")
            answers = []
        }
        else if(answers[0].arma === 1 && answers[1].arma === 0){
            res.json("El jugador" + answers[0].id + "ha ganado")
            answers = []
        }
        else if(answers[0].arma === 2 && answers[1].arma === 1){
            res.json("El jugador" + answers[0].id + "ha ganado")
            answers = []
        }
        else{
            res.json("El jugador" + answers[1].id + "ha ganado")
            answers = []
        }
    }
    else{
        
        res.json({message : "Esperando la respuesta del contrincante"})
        
    }
})


app.listen(3001, () => {
    console.log("server iniciado")
})