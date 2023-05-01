import { useState } from "react"

export default function Paragrafo(){

    const [text, setText] = useState();
    const [paragrafos, setParagrafos] = useState([
        "paragrafo 1",
        "paragrafo 2"
    ]);


    return(

        <div>
            {paragrafos.map((paragrafo, index) =>(<p key={index}>{paragrafo}</p>))}

        <input type="text" value={text} onChange={(e) =>{setText(e.target.value)}}/>
        <button onClick={() =>{setParagrafos([...paragrafos, text]); setText("")}}>Adicionar paragrafo</button>
        
        </div>
    )

}