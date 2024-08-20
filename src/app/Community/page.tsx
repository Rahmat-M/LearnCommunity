"use client";
import React, { useState, useEffect, useRef } from 'react';
import Header from '@/Header/page';

export default function Home() {
   
    return (
        <main>
            <Header/>
            <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-800">
            <h1 className="text-4xl font-bold mb-12 text-white">Selamat Datang di Forum Pembelajaran</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
                <a href="#" className="p-6 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 hover:text-gray-200 hover:shadow-lg transition-all flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v4.586l-1.707 1.707a1 1 0 001.414 1.414L6 14.414V8a4 4 0 118 0v6.586l2.293 2.293a1 1 0 001.414-1.414L16 12.586V8a6 6 0 00-6-6z" />
                    </svg>
                    <h2 className="text-2xl font-semibold mb-2">Forum SD</h2>
                    <p className="text-white text-center">Diskusi dan tanya jawab untuk pelajar SD.</p>
                </a>
                <a href="#" className="p-6 bg-gray-600 rounded-lg shadow hover:bg-gray-700 transition-shadow flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 4a4 4 0 00-4 4v7a2 2 0 002 2h8a2 2 0 002-2v-7a4 4 0 00-4-4H8zM6 8a2 2 0 014 0v5H6V8z" />
                    </svg>
                    <h2 className="text-2xl font-semibold mb-2">Forum SMP</h2>
                    <p className="text-white text-center">Diskusi dan tanya jawab untuk pelajar SMP.</p>
                </a>
                <a href="#" className="p-6 bg-gray-600 rounded-lg shadow hover:bg-gray-700 transition-shadow flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a2 2 0 001.732-1H8.268A2 2 0 0010 18zm-5.293-3a1 1 0 01.293-.707l3-3a1 1 0 011.414 0l3 3a1 1 0 01.293.707v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zm12 0v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2l2.293-2.293a1 1 0 011.414 0l3 3a1 1 0 01.293.707zM10 12a1 1 0 01-.293-.707V8a3 3 0 116 0v3.293a1 1 0 01-2 0V8a1 1 0 00-2 0v3.293a1 1 0 01-.293.707l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 01-.293-.707V8a3 3 0 116 0v3.293a1 1 0 01-.293.707l-3 3a1 1 0 01-1.414 0l-3-3A1 1 0 014 8V6a5 5 0 0110 0v2a1 1 0 11-2 0V6a3 3 0 00-6 0v2a1 1 0 01-.293.707l-3 3A1 1 0 013 12v2z" clipRule="evenodd" />
                    </svg>
                    <h2 className="text-2xl font-semibold mb-2">Forum SMA</h2>
                    <p className="text-white text-center">Diskusi dan tanya jawab untuk pelajar SMA.</p>
                </a>
                <a href="/Kuliah" className="p-6 bg-gray-600 rounded-lg shadow hover:bg-gray-700 transition-shadow flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6v4.586l-1.707 1.707a1 1 0 001.414 1.414L6 14.414V8a4 4 0 118 0v6.586l2.293 2.293a1 1 0 001.414-1.414L16 12.586V8a6 6 0 00-6-6z" clipRule="evenodd" />
                    </svg>
                    <h2 className="text-2xl font-semibold mb-2">Forum Kuliah</h2>
                    <p className="text-white text-center">Diskusi dan tanya jawab untuk mahasiswa.</p>
                </a>
            </div>
            </div>
        </main>
    );
}
