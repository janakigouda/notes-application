export  const getNotes=async ()=>{
    const res = await fetch(`https://limitless-forest-83296.herokuapp.com/api/notes`);
    return await res.json();
}

export  const addNotes=async (notes)=>{
    const res = await fetch("https://limitless-forest-83296.herokuapp.com/api/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(notes)
    });
    return await res.json();
}

export  const deleteNote=async (id)=>{
    const res = await fetch(`https://limitless-forest-83296.herokuapp.com/api/notes/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await res.json();
}