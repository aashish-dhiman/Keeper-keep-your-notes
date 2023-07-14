import React, { useState } from "react";

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const areInputsEmpty = () => {
        return note.title.trim() === "" || note.content.trim() === "";
    };

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    }

    function handleClick(event) {
        event.preventDefault();

        if (areInputsEmpty()) {
            alert("Please enter details first!");
            return;
        }

        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        });
    }

    return (
        <form className="flex justify-center mb-10" action="">
            <div className="flex flex-col grow lg:grow-0 md:grow-0 sm:grow-0 bg-white p-2.5 m-4 rounded-xl shadow-[0_0_12px_4px_#ccc] w-1/3 h-5/6 p-4 divide-y divide-slate-500 font-medium relative">
                <input
                    className="focus:outline-none px-3 py-2"
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={note.title}
                    onChange={handleChange}
                />
                <textarea
                    className="focus:outline-none px-3 py-2 font-normal text-sm"
                    name="content"
                    placeholder="Take a note..."
                    cols="50"
                    rows="5"
                    value={note.content}
                    onChange={handleChange}
                ></textarea>
                <button
                    onClick={handleClick}
                    className="rounded-full bg-[#f5ba13] text-white text-[10px] w-8 h-8 absolute right-2 -bottom-10 hover:scale-[1.02]"
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    );
};

export default CreateNote;
