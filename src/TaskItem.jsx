const TaskItem = ({ tarefa, removerDaLista, showBorderBottom }) => {
  return (
    <div className={`task-item ${showBorderBottom ? 'bottom-border' : ''}`}>
      <p>{tarefa}</p>
      <button onClick={() => removerDaLista(tarefa)}>Apagar</button>
    </div>
  );
};

export default TaskItem;
