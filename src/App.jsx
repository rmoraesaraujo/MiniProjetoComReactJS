import ItemsContainer from './ItemsContainer';
import './App.css';

function App() {
  return (
    <div>
      <h1>Minha lista de tarefas do dia</h1>
      <ItemsContainer listaDeTarefas={['Lavar roupa', 'Ir ao mercado']} />
    </div>
  );
}

export default App;
