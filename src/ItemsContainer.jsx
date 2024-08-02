import TaskItem from './TaskItem';

const ItemsContainer = ({ listaDeTarefas }) => {
  return (
    <div>
      {listaDeTarefas.map((t) => (
        <TaskItem tarefa={t} />
      ))}
    </div>
  );
};

export default ItemsContainer;
