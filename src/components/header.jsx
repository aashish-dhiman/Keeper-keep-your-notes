import React from "react";

export default function Header() {
    return (
        <header>
            <nav className="bg-[#f5ba13]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 relative flex items-center">
                                {/* <img src="/img/icon.png" alt="icon" /> */}
                                <span className="text-white text-2xl font-mono">
                                    KEEPER - Keep Your Notes
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
