import { useState } from "react";
import './App.css';

function FuelComparator() {
  const [gasPrice, setGasPrice] = useState('')
  const [alcoholPrice, setAlcoholPrice] = useState('')
  const [bestOption, setBestOption] = useState('')

  const compareFuel = (e) => {
    e.preventDefault();              //evita de recarregar a pagina
  

  const gas = parseFloat(gasPrice)
  const alcohol = parseFloat(alcoholPrice)

  if (gas && alcohol) {
    const ratio = alcohol / gas;

    if(ratio < 0.7) {
      setBestOption('Alcool é a melhor opção.')
    }else{
      setBestOption('Gasolina é a melhor opção.')
    }
  }else{
    setBestOption('Por favor insira um valor válido.')
  }
};

  return (
  <div className="container">
    <div className="calculator">
      <h1>Gasolina ou Álcool?</h1>
      <form onSubmit={compareFuel}>
      <div>
        <input
         type="number"
         value={gasPrice}
         onChange={(e) => setGasPrice(e.target.value)} placeholder="Preço da gasolina (R$/L)" step={0.01} required/>
      </div>

      <div>
        <input 
        type="number"
        value={alcoholPrice}
        onChange={(e) => setAlcoholPrice(e.target.value)} placeholder="Preço do alcool(R$/L)" step={0.01} required/>
      </div>

      <button type="submit">Compare</button>
      </form>

      {bestOption && (
        <h3>{bestOption}</h3>
      )}
    </div>
  </div>
);
}

export default function App() {
  return (
    <div>
      <FuelComparator/>
    </div>
  )
}
