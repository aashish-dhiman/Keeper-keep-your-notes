import React from "react";

export default function Note() {
    return (
        <div className="flex-grow">
            <div className="bg-white p-2.5 m-4 rounded-md shadow-[0_2px_5px_#ccc] w-60 h-fit">
                <h1>Note Title</h1>
                <p>This is the sample note content</p>
            </div>
        </div>
    );
}
