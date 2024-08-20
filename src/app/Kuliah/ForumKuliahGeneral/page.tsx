"use client"
import React from 'react';
import Header from '@/Header/page';

export default function Home() {
    const discussions = [
        {
            id: 1,
            title: "Strategi Belajar Matematika",
            author: "John Doe",
            date: "August 19, 2024",
            comments: 12,
            image: "https://i.pinimg.com/736x/e5/ed/ac/e5edac098cd80bc5f3b445020a736b0f.jpg",
        },
        {
            id: 2,
            title: "Tips dan Trik Menguasai Algoritma",
            author: "Jane Smith",
            date: "August 18, 2024",
            comments: 8,
            image: "https://i.pinimg.com/736x/a3/ea/53/a3ea53c8d48ab781b0e1716f5cbca1f7.jpg",
        },
        {
            id: 3,
            title: "Perkembangan Ekonomi Global",
            author: "Alex Johnson",
            date: "August 17, 2024",
            comments: 5,
            image: "https://i.pinimg.com/736x/0f/0d/4b/0f0d4bb65b377c795690bb9874c5590a.jpg",
        },
    ];

    return (
        <main>
            <Header />
            <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-800">
                <h1 className="text-4xl font-bold mb-12 text-white">Diskusi Terbaru</h1>
                <div className="w-full max-w-4xl bg-gray-600 rounded-lg shadow p-6">
                    {/* Button untuk membuat diskusi baru */}
                    <div className="flex justify-end mb-6">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                            onClick={() => window.location.href = '/Kuliah/ForumKuliahGeneral/NewDiscussion'}
                        >
                            + Buat Diskusi Baru
                        </button>
                    </div>

                    {/* Daftar Diskusi */}
                    {discussions.map((discussion, index) => (
                        <React.Fragment key={discussion.id}>
                            <a
                                href={`/Kuliah/ForumKuliahGeneral/Discussion${discussion.id}`}
                                className="block p-4 rounded-lg hover:bg-gray-700 transition-colors flex items-center"
                            >
                                <div className="flex-grow">
                                    <h2 className="text-2xl font-semibold text-blue-300 mb-1">
                                        {discussion.title}
                                    </h2>
                                    <p className="text-white text-sm mb-2">
                                        oleh {discussion.author} pada {discussion.date}
                                    </p>
                                    <p className="text-white">
                                        {discussion.comments} komentar
                                    </p>
                                </div>
                                <img
                                    src={discussion.image}
                                    alt={discussion.title}
                                    className="w-24 h-24 object-cover rounded-lg ml-4"
                                />
                            </a>
                            {index < discussions.length - 1 && (
                                <hr className="border-gray-500 my-4" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </main>
    );
}
