import { useState } from 'react';
import ItemsContainer from './ItemsContainer';
import AddItemContainer from './AddItemContainer';
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
    setTaskList(novaLista);
  };

  const adicionarNaLista = (item) => {
    // const novaLista = [...listaDeTarefas];
    // novaLista.push(item);
    // setTaskList(novaLista);

    setTaskList([...listaDeTarefas, item]);
  };
  return (
    <div>
      <h1>Minha lista de tarefas do dia</h1>
      <AddItemContainer adicionarNaLista={adicionarNaLista}/>
      <ItemsContainer
        listaDeTarefas={listaDeTarefas}
        removerDaLista={removerDaLista}
      />
    </div>
  );
}

export default App;
