import React from "react";

const PropDisplay = (props) => {
    const handleClick = () => {
        props.onDelete(props.id);
    };

    return (
        <div className="bg-white p-2.5 m-4 rounded-xl shadow-[0_0_12px_4px_#ccc] w-52 max-h-42 p-4 divide-y divide-slate-500 font-medium transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-[1.02] duration-100 relative">
            <h2 className="p-1">{props.title}</h2>
            <p className="max-h-28 p-2 overflow-y-auto font-light text-sm scroll mb-2">
                {props.content}
            </p>
            <button
                onClick={handleClick}
                className="rounded-full bg-[#f5ba13] text-white text-[8px] w-10 h-4 absolute right-2 bottom-2 hover:scale-[1.02] hover:bg-[#f3df00]"
                type="delete"
            >
                Delete
            </button>
        </div>
    );
};

export default PropDisplay;
