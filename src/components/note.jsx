import React from "react";
import Notes from "./data";
import PropDisplay from "./propDisplay";

function createNote(note) {
    return (
        <PropDisplay key={note.id} title={note.title} content={note.content} />
    );
}

export default function Note() {
    return (
        <div className="flex-grow">
            <div className="grid gap-4 grid-cols-4">{Notes.map(createNote)}</div>
        </div>
    );
}
