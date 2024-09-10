import './App.scss';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Cabacalho } from '../components/cabacalho/cabecalho';


export default function App() {

  const [valor1, setValor1] = useState(0)
  const [total, setTotal] = useState([])



  function calcular() {

    let resultado = []

    for(let i = 1; i<=10; i++){


     resultado.push(`${valor1} x ${i} = ${Number(valor1*i)}`) 

      

    
    }


    setTotal(resultado)
  }

 


  return (


    <div className='exercicio3'>


      <Cabacalho/>

      <div className='titulo01'>
      <Link to='/'>

          <img className='capa1' src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oza0TZRzl-0ryKj9PjIlpeLgoFEDZulaBztDASFoa3hg~Q9Pc~5BUWgwPzeQM3MKKgra5nZFTVvGQ6WTa9YGtAZSaQEJJy7dT60O2LeBg-1XRvHOgYPBeuQylmOY65mpFFJ6jKzmDVWjEXa16V7FhD86mLjtsc5GlAYXWqIK7I1hNqEYJR8q5fD9BpdW40~Lu9DJzGI0DBpsUAabXrwpdTA4zj1m9NcTfP2XkFe4~aitCg3ROOhnCyG4ci~grkvYzfVe-gxFHZZcZnGaK3uA4bqticlMAz18Gc-VJsVV3FHEQmNPg1srQ~h1Deif19JdQUjjx7LBLVPZJOJLX3elWA__" alt="" />
      </Link>

          <h1> Exercício 03 - Tabuada </h1>
        
        

      </div>

            <div className='linha_amarela'></div>


      <div className='titulo'>

      <p className='paragrafo'>

      Implementar um programa em Javascript para fazer a tabuada.      </p>

      </div>


<div className='tudo'>



      <div className='conteudo'>


        <div className='cont1'>

          <label >Digite o numero: </label>
          <input type="text" placeholder='0' onChange={e => setValor1(e.target.value)} />
          
        </div>


        <button onClick= {calcular}>calcular</button>



      </div>


        <div className='resultado'>

          {total.map( (item, pos) =>

          <h5 key={pos} className='resultado1'>
            {item}

          </h5>






          )}



          
        </div>
    </div>
</div>

  );
}