import { useState } from "react"

export default function FormNome(){

    const [nome, setNome] = useState("")

    return(

        <div style={{marginTop: "50px"}}>
            <form action="">
                <label>Nome : </label><br /> 
                    <input type="text" onChange={e => {setNome(e.target.value.toUpperCase())}}/>
                    <p>{nome}</p>
                
            </form>
        </div>

    )

}