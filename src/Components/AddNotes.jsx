import { useState } from "react";

function AddNotes({ handleAdd }) {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    date: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    handleAdd(formData);
  }

  return (
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e)} className="form-control">
        <input
          name="title"
          value={formData.title}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Write title of your note"
          required
        /><br></br>
        <input
          name="desc"
          value={formData.desc}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Write the description"
          required
        /><br></br>
        <input
          name="date"
          value={formData.date}
          onChange={(e) => handleChange(e)}
          type="date"
          required
        /><br></br>
        <button type="submit" className="addBtn">Add Notes</button>
      </form>
    </div>
  );
}

export default AddNotes;
