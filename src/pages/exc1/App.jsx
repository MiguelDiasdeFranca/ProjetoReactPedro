import './App.scss';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Cabacalho } from '../components/cabacalho/cabecalho';

export default function App() {

  const [valor1, setValor1] = useState(0)
  const [valor2, setValor2] = useState(0)
  const [total, setTotal] = useState(0)



  function calcular() {

    if (valor2 == 'quero10') {

      let calculo = valor1 - (valor1 * 10 / 100)

      setTotal(calculo)

    } else (

      setTotal(valor1)

    )



  }

 


  return (


    <div className='exercicio1'>

      <Cabacalho/>


      <div className='titulo01'>
      <Link to='/'>

          <img className='capa1' src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oza0TZRzl-0ryKj9PjIlpeLgoFEDZulaBztDASFoa3hg~Q9Pc~5BUWgwPzeQM3MKKgra5nZFTVvGQ6WTa9YGtAZSaQEJJy7dT60O2LeBg-1XRvHOgYPBeuQylmOY65mpFFJ6jKzmDVWjEXa16V7FhD86mLjtsc5GlAYXWqIK7I1hNqEYJR8q5fD9BpdW40~Lu9DJzGI0DBpsUAabXrwpdTA4zj1m9NcTfP2XkFe4~aitCg3ROOhnCyG4ci~grkvYzfVe-gxFHZZcZnGaK3uA4bqticlMAz18Gc-VJsVV3FHEQmNPg1srQ~h1Deif19JdQUjjx7LBLVPZJOJLX3elWA__" alt="" />
      </Link>

          <h1>  Exercício 01 - Cupom de desconto </h1>
        
        

      </div>

            <div className='linha_amarela'></div>


      <div className='titulo'>

      <p className='paragrafo'>

      Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais <br /> terá de desconto. 
      </p>

      </div>


<div className='tudo'>



      <div className='conteudo'>


        <div className='cont1'>

          <label >Digite o valor: </label>
          <input type="text" placeholder='Digite aqui' onChange={e => setValor1(e.target.value)} />
          
        </div>

        <div className='cont2'>

          <label >Digite o CUPOM: </label>
          <input type="text" placeholder='Digite aqui' onChange={e => setValor2(e.target.value)} />
         
        </div>

        <button onClick={calcular}>calcular</button>
        <div>ficou em R${total}</div>



      </div>


    </div>
</div>

  );
}