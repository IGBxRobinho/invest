import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

  const [quantidade, setQuantidade] = useState('');
  const [anos, setAnos] = useState('');
  const [rendimentoM, setRendimentoM] = useState('');
  const [quanto, setQuanto] = useState('');
  const [mensal, setMensal] = useState('');
  const [rentabilidadeAno, setRentabilidadeAno] = useState('');

  function calcular(){

    let totalMeses = anos*12

    let montante = (0 * ((1 + (rendimentoM / 100)) ** totalMeses)) + (quantidade * (((((1 +(rendimentoM / 100)) ** totalMeses) - 1) / (rendimentoM / 100))));
    setQuanto(montante.toFixed(2));

    let rendimentoMensal = (quanto * rendimentoM) / 100
    setMensal(rendimentoMensal.toFixed(2))

    let rendimentoAnual = (rendimentoMensal * 12)
    setRentabilidadeAno(rendimentoAnual.toFixed(2));

  }

  return (
    <div className="App">
      <label>Média de investimento</label><br />
      <br />

      <label>Quantidade</label><br />
      <input type="text" value={quantidade} onChange={(e) => setQuantidade(e.target.value)}></input><br />

      <label>Anos</label><br />
      <input type="text" value={anos} onChange={(e) => setAnos(e.target.value)}></input><br />

      <label>Rendimento mensal</label><br />
      <input type="text" value={rendimentoM} onChange={(e) => setRendimentoM(e.target.value)}></input><br />

      <label>Quanto terei</label><br />
      <input type="text" value={quanto}></input><br />

      <label>Mensal</label><br />
      <input type="text" value={mensal}></input><br />

      <label>Rentabilidade Ano</label><br />
      <input type="text" value={rentabilidadeAno}></input><br />

      <button onClick={()=> {calcular()}

      }>Calcular</button>

    </div>
  );
}

export default App;
