"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Handle click outside to close the menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <main>
            <header className="w-full bg-gray-800 text-white shadow-lg">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 relative">
                    <div className="text-2xl font-bold">Forum Pembelajaran</div>
                    <div className="relative flex space-x-6">
                        <button>
                        <a href="/Community" className="hover:text-blue-300 transition-colors">Home</a>
                        </button>       
                        <button
                            onClick={toggleMenu}
                            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                        >
                            Community
                        </button>
                        <button>
                        <a href="#" className="hover:text-blue-300 transition-colors">E-Learning</a>
                        </button>
                        

                        {/* Dropdown Menu */}
                        {isMenuOpen && (
                            <div
                                ref={menuRef}
                                className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-lg z-10"
                            >
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-white hover:bg-gray-600 rounded-t-lg transition-colors"
                                >
                                    SD
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-white hover:bg-gray-600 transition-colors"
                                >
                                    SMP
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-white hover:bg-gray-600 transition-colors"
                                >
                                    SMA
                                </a>
                                <a
                                    href="/Kuliah"
                                    className="block px-4 py-2 text-white hover:bg-gray-600 rounded-b-lg transition-colors"
                                >
                                    Kuliah
                                </a>
                            </div>
                        )}
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                            Login
                        </button>
                    </div>
                </div>
            </header>
            </main>
    );
}
