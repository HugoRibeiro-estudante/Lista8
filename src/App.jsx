import ReactDOM from 'react-dom/client'
import Contador from "./components/Contador"
import FormNome from './components/FormNome'
import Message from './components/Message'
import FormNomeCompleto from './components/FormNomeCompleto'
import Paragrafo from './components/Paragrafo'


function App() {
 

  return (

    <div>


    <Contador inf="3" sup="7"/>
    <FormNome />
    <Message cont="108"/>
    <FormNomeCompleto />
    <Paragrafo />

    </div>

    )
}

export default App
