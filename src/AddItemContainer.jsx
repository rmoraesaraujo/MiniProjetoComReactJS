const AddItemContainer = ({ adicionarNaLista }) => {
  let novaTarefa = '';
  return (
    <div className="add-item-container">
      <input
        type="text"
        onChange={(evt) => {
          novaTarefa = evt.target.value;
        }}
        placeholder="Digite aqui"
      />
      <button
        onClick={() => {
          if (novaTarefa !== '') {
            adicionarNaLista(novaTarefa);
          }
        }}
      >
        Adicionar
      </button>
    </div>
  );
};

export default AddItemContainer;
