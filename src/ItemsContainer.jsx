import TaskItem from './TaskItem';

const ItemsContainer = ({ listaDeTarefas, removerDaLista }) => {
  return (
    <div>
      {listaDeTarefas.map((t) => (
        <TaskItem tarefa={t} removerDaLista={removerDaLista} />
      ))}
    </div>
  );
};

export default ItemsContainer;
