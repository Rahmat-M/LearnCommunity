import React from 'react';
import Header from '@/Header/page';

export default function DiscussionPage() {
    // Data dummy untuk contoh diskusi
    const discussion = {
        title: "Strategi Belajar Matematika",
        author: "John Doe",
        date: "August 19, 2024",
        content: `
            Matematika adalah salah satu mata pelajaran yang membutuhkan strategi belajar yang tepat. 
            Beberapa tips untuk menguasai matematika termasuk memahami konsep dasar, mengerjakan banyak latihan soal, 
            dan tidak ragu untuk bertanya jika ada yang tidak dimengerti. Selain itu, penting untuk belajar secara 
            konsisten dan memanfaatkan berbagai sumber belajar seperti buku, video tutorial, dan diskusi kelompok.
        `,
        comments: [
            {
                id: 1,
                author: "Jane Smith",
                date: "August 20, 2024",
                content: "Terima kasih atas tipsnya! Sangat membantu.",
            },
            {
                id: 2,
                author: "Alex Johnson",
                date: "August 21, 2024",
                content: "Saya setuju, belajar secara konsisten adalah kunci.",
            },
        ],
    };

    return (
        <main>
            <Header/>
            
            <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-800 text-white">
                
            <div className="w-full max-w-3xl bg-gray-700 rounded-lg shadow p-6">
                <h1 className="text-4xl font-bold mb-4 text-blue-300">{discussion.title}</h1>
                <p className="text-sm text-gray-400 mb-8">
                    oleh {discussion.author} pada {discussion.date}
                </p>
                <div className="prose prose-invert mb-8">
                    <p>{discussion.content}</p>
                </div>
                <hr className="border-gray-600 my-8" />
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">Komentar</h2>
                {discussion.comments.map(comment => (
                    <div key={comment.id} className="mb-6">
                        <p className="text-sm text-gray-400">
                            oleh {comment.author} pada {comment.date}
                        </p>
                        <p className="mt-2">{comment.content}</p>
                        <hr className="border-gray-600 my-4" />
                    </div>
                ))}

                {/* Textarea, Button untuk Mengirim Komentar, dan Upload File */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-blue-300">Tulis Komentar</h3>
                    <textarea
                        className="w-full h-32 p-4 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                        placeholder="Tulis komentar Anda di sini..."
                    ></textarea>
                    <div className="mt-4 flex items-center space-x-4">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                        >
                            Kirim Komentar
                        </button>
                        <label className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer transition-colors">
                            <input type="file" className="hidden" />
                            Unggah File
                        </label>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">Unggah gambar, dokumen, atau audio</p>
                </div>
            </div>
            </div>
        </main>
    );
}
