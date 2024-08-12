import { useState } from 'react';
import TaskItem from './TaskItem';

const ItemsContainer = ({ listaDeTarefas, removerDaLista }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="items-container">
      <input
        type="checkbox"
        name="border-bottom"
        id="border-btn"
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      <label htmlFor="border-bottom">Habilitar linhas</label>
      {listaDeTarefas.map((t, idx) => (
        <TaskItem
          tarefa={t}
          removerDaLista={removerDaLista}
          key={`task-item-${idx}`}
          showBorderBottom={checked}
        />
      ))}
    </div>
  );
};

export default ItemsContainer;
