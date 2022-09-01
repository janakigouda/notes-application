function NotesList({ id, title, desc, date, handleDelete }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <div>
        <p>{date}</p>
        <button onClick={() => handleDelete(id)}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default NotesList;
