import { useState } from "react"

export default function Contador({inf, sup}){

    const [cont, setCont] = useState(parseInt(inf));

    function incrementar(){
        if(cont < sup)
            setCont(cont +1 );
    }


    function decrementar(){
        if(cont > inf)
            setCont(cont - 1);
    }

    return(

        <div>
            <p style={{fontWeight: "bold", color: "red"}}>Intervalo(Limite) do Contador : [{inf}, {sup}]</p>
        
            <p style={{fontWeight: "bold"}}>valor atual do contador : {cont}</p>

            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
        </div>

    )

}