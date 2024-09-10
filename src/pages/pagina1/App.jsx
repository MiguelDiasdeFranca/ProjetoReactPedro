


import { Cabacalho } from '../components/cabacalho/cabecalho';
import { Card } from '../components/cards/cards';
import './App.scss';
import { Link } from 'react-router-dom'


export default function App() {


  let cards = [{

    link : '/exercicio1',
    titulo: 'Cupom de desconto',
    subtitulo:'Exercicio 1',
    cor:'verde'
  },
  {

    link : '/exercicio2',
    titulo: 'Converter kg para gramas',
    subtitulo:'Exercicio 2',
    cor:'roxo'
  },
  {

    link : '/exercicio3',
    titulo: 'tabuada',
    subtitulo:'Exercicio 3',
    cor:'azul'
  },
  {

    link : '/exercicio4',
    titulo: 'IMC',
    subtitulo:'Exercicio 4',
    cor:'amarelo'
  },

  {

    link : '/exercicio11',
    titulo: 'livro',
    subtitulo:'Exercicio 5',
    cor:'azul'
  },




]





  return (


    <div className='total'>


      <Cabacalho/>
      <div className='conteudo'>

        <h2>Escolha um treino...</h2>


        <div className='quadrados'>


        {
          
          
          cards.map(card => ( <Card
          
            exercicio = {card.link}
            cor = {card.cor}
            titulo = {card.titulo}
            numero = {card.subtitulo}
            
        
          />
      
        ))
        }
       





        </div>




      </div>


    </div>

  );
}






