import { useState } from 'react';
import ItemsContainer from './ItemsContainer';
import './App.css';

function App() {
  const [listaDeTarefas, setTaskList] = useState([
    'Lavar roupa',
    'Ir ao mercado',
  ]);

  const removerDaLista = (item) => {
    const novaLista = [...listaDeTarefas];
    const itemIndex = novaLista.indexOf(item);
    novaLista.splice(itemIndex, 1);
    setTaskList(novaLista)
  };
  return (
    <div>
      <h1>Minha lista de tarefas do dia</h1>
      <h2>Adição de tarefas</h2>
      <ItemsContainer listaDeTarefas={listaDeTarefas} removerDaLista={removerDaLista}/>
    </div>
  );
}

export default App;
