import { useState } from "react"

export default function FormNomeCompleto(){

    const [nomeCompleto, setNomeCompleto] = useState("");
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");

    return(
        <div style={{marginTop: "50px"}}>
            <label>Nome :</label><br /> <input type="text" onChange={e =>{setNome(e.target.value)}}/><br />
            <label>Sobrenome :</label><br /><input type="text" onChange={e =>{setSobrenome(e.target.value)}}></input><br /><br />
            <button onClick={() =>{setNomeCompleto(nome+" "+sobrenome)}}>Exibir nome completo</button>
            <p>{nomeCompleto}</p>
        </div>
    )

}