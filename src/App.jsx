import { useState } from 'react';
import ItemsContainer from './ItemsContainer';
import './App.css';

function App() {
  const [listaDeTarefas, setTaskList] = useState(['Lavar roupa', 'Ir ao mercado'])
  return (
    <div>
      <h1>Minha lista de tarefas do dia</h1>
      <h2>Adição de tarefas</h2>
      <ItemsContainer listaDeTarefas={listaDeTarefas} />
    </div>
  );
}

export default App;
