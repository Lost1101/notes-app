import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function NoteForm({ addNotes }){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const MAX_TITLE_LENGTH = 40;

    const handleTitleChange = (event) =>{
        const { value } = event.target;

        if (value.length <= MAX_TITLE_LENGTH) {
            setTitle(value);
        };
    };

    const handleNotesChange = (event) =>{
        setBody(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addNotes({ title, body });
        setTitle('');
        setBody('');
    };

    return(
        <div className="w-1/2 border border-black m-auto my-10 p-10 rounded-lg">
            <form onSubmit={ handleSubmit }>
                <h1 className="text-center text-xl font-bold">Add New Note</h1>
                <p className="text-right">{ title.length } / { MAX_TITLE_LENGTH } characters</p>
                <input id="title" className="border border-black rounded-sm p-2 block my-2 w-full" type="text" placeholder="Title..." value={title} onChange={ handleTitleChange } required
                />
                <textarea id="body" className="border border-black rounded-sm p-2 block my-2 w-full" placeholder="Content..." value={body} onChange={ handleNotesChange } required
                />
                <button className="border rounded-sm border-black p-2 w-full mt-5" type="submit">Add +</button>
            </form>
        </div>
    );
};


NoteForm.propTypes={
    addNotes: PropTypes.func
};