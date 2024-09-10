import './App.scss';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Cabacalho } from '../components/cabacalho/cabecalho';

export default function App() {

  const [altura, setValor1] = useState(0)
  const [peso, setValor2] = useState(0)
    const [total, setTotal] = useState([])
  



 
  function calcular() {

    let resultado= (peso/(altura**2))*10000
    let resp= ''
    let fim= []


      if(resultado>40.0){
       resp = 'obesidade grau 3'}
    else if(resultado >35 && resultado <39.9)
      {    resp = 'obesidade grau 2'}
    else if(resultado > 30 && resultado <34.9){
      resp = 'obesidade grau 1'}
    else if(resultado >25.0 && resultado < 29.9){
      resp = 'Sobrepeso'}
            else if(resultado>18.6 && resultado < 24.9){
              resp = 'Peso normal'
            }
            else if(resultado <18.5)
          {    resp = 'Abaixo do normal'}

    for(let i = 0;i<1; i++){

    fim.push(`altura:${altura} | Peso: ${peso} | Imc: ${resp} `)


    setTotal([...total, fim])
    }

    
     

  }

 


  return (


    <div className='exercicio4'>

        <Cabacalho/>


      <div className='titulo01'>
      <Link to='/'>

          <img className='capa1' src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oza0TZRzl-0ryKj9PjIlpeLgoFEDZulaBztDASFoa3hg~Q9Pc~5BUWgwPzeQM3MKKgra5nZFTVvGQ6WTa9YGtAZSaQEJJy7dT60O2LeBg-1XRvHOgYPBeuQylmOY65mpFFJ6jKzmDVWjEXa16V7FhD86mLjtsc5GlAYXWqIK7I1hNqEYJR8q5fD9BpdW40~Lu9DJzGI0DBpsUAabXrwpdTA4zj1m9NcTfP2XkFe4~aitCg3ROOhnCyG4ci~grkvYzfVe-gxFHZZcZnGaK3uA4bqticlMAz18Gc-VJsVV3FHEQmNPg1srQ~h1Deif19JdQUjjx7LBLVPZJOJLX3elWA__" alt="" />
      </Link>

          <h1> Exercício 4 - Calculo de IMC com histórico</h1>
        
        

      </div>

            <div className='linha_amarela'></div>


      <div className='titulo'>

      <p className='paragrafo'>

      Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação     
      </p>

      </div>


<div className='tudo'>



      <div className='conteudo'>


        <div className='cont1'>
          <label >Digite a altura: </label>
          <input type="text" placeholder='0' onChange={e => setValor1(e.target.value)} />
          
        </div>
        <div className='cont1'>

          <label >Digite o peso </label>
          <input type="text" placeholder='0' onChange={e => setValor2(e.target.value)} />
          
        </div>


        <button onClick= {calcular}>calcular</button>



      </div>

      {total.map(linha=>
        <p>{linha}</p>
      )}
        
    </div>
</div>

  );
}