import { useEffect, useState } from "react";
import AddNotes from "./AddNotes";
import { getNotes,addNotes,deleteNote } from "../api/api.js";
import NotesList from "./NotesList";


function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes()
      .then((res) => {
        setNotes(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAdd=(data)=>{
    addNotes(data)
    .then(res=>{
        console.log(res);
        handleGetNotes()
        window.location.reload();
    })
    .catch(err=>{
        console.log(err)
    })
  }

  const handleGetNotes=()=>{
    return getNotes()
    .then(res=>{
        setNotes(res)
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
}

  const handleDelete=(id)=>{
    console.log(id)
    deleteNote(id)
    .then(res=>{
        handleGetNotes()
    })
    .catch(err=>{
        console.log(err);
    })
}

  return (
    <div className="container">
      <AddNotes handleAdd={handleAdd} />
      <div className="note-container">
        <h1 className="title">Notes</h1>
        <div className="items">
        {
            notes.map(el=>
                <NotesList
                key={el.id}
                id={el.id}
                title={el.title}
                desc={el.desc}
                date={el.date}
                handleDelete={handleDelete}
                />
            )
        }
        </div>
      </div>
    </div>
  );
}

export default Notes;
