
import { Link } from "react-router-dom"
import './cabacalho.scss'



 function Cabacalho(){


    return(<header className="Cabeca">
    
    
    
    <div className='inicio'>
    
      <img src="https://acaonsfatima.org.br/wp-content/uploads/2018/11/logo.png" alt="" />
      <h3>React FreiS</h3>
    
    </div>
    
    
    
    <div className='acesso'>
    
      <Link to='/'>Inicio</Link>
      <Link to='/sobre'>Sobre</Link>
    </div>
    
    
    
    </header>)
    
    
    
    
    }

    export {Cabacalho}