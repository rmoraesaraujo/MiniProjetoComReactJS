const TaskItem = ({ tarefa, removerDaLista }) => {
  return (
    <div className="task-item">
      <p>{tarefa}</p>
      <button onClick={() => removerDaLista(tarefa)}>Apagar</button>
    </div>
  );
};

export default TaskItem;
