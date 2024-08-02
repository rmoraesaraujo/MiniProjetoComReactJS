import TaskItem from './TaskItem';

const ItemsContainer = ({ listaDeTarefas, removerDaLista }) => {
  return (
    <div className="items-container">
      {listaDeTarefas.map((t, idx) => (
        <TaskItem
          tarefa={t}
          removerDaLista={removerDaLista}
          key={`task-item-${idx}`}
        />
      ))}
    </div>
  );
};

export default ItemsContainer;
