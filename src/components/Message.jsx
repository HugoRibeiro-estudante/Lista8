import { useState } from "react"

export default function Message({cont}){

    const [mensagem, setMensagem] = useState(cont);

    return(
        <form style={{marginTop: "50px"}}>
            <label>Mesagem</label><br/>
            <textarea cols="50" rows="10" maxLength={cont} onChange={()=>{setMensagem(mensagem - 1)}}>
            </textarea>
            <p>Restam apenas {mensagem} caracteres</p>
        </form>
    )

}