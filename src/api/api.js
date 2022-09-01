export  const getNotes=async ()=>{
    const res = await fetch(`http://localhost:8000/notes`);
    return await res.json();
}

export  const addNotes=async (notes)=>{
    const res = await fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(notes)
    });
    return await res.json();
}

export  const deleteNote=async (id)=>{
    const res = await fetch(`http://localhost:3000/notes/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await res.json();
}