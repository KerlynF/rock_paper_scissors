
import React, {useState, useEffect} from "react";
import './Arma.css';

const Arma = () => {
    const [decision, setDecision] = useState({
        repueta: {
            arma: null,
            id: null
        }
    });
    
    const handleRequest = async () => {
       
        const enviarRespuestaDelServer = fetch("http://localhost:3001/answer", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            // body: {
            //     repueta: JSON.stringify({mielda: 'mielda?Ok'})
            // }
            
        })

        const respuestaDelServer = await enviarRespuestaDelServer
        console.log(respuestaDelServer)
    };


    return(
        <div>
            <h1>Escoja entre piedra papel o tijera</h1>
            {/* {(decision.repueta.arma !== null) ? handleRequest() : null} */}
            <button onClick={() => {handleRequest()}}>piedra</button>
            <button onClick={() => {setDecision({repueta:{arma: 1}})}}>papel</button>
            <button onClick={() => {setDecision({repueta:{arma: 2}})}}>tijera</button>    
        </div>
    );
}

export default Arma;
