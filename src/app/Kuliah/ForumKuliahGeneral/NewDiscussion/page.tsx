"use client"
import React, { useState } from 'react';
import Header from '@/Header/page';

export default function NewDiscussion() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Title:', title);
        console.log('Description:', description);
        if (file) {
            console.log('File:', file.name);
        }
        // Reset form fields
        setTitle('');
        setDescription('');
        setFile(null);
    };

    return (
        <main>
            <Header />
            <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-800">
                <h1 className="text-4xl font-bold mb-8 text-white">Buat Diskusi Baru</h1>
                <div className="w-full max-w-3xl bg-gray-600 rounded-lg shadow p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="title" className="block text-white font-semibold mb-2">Judul Diskusi</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full p-3 border border-gray-400 rounded-lg bg-gray-700 text-white"
                                placeholder="Masukkan judul diskusi"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-white font-semibold mb-2">Deskripsi</label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full p-3 border border-gray-400 rounded-lg bg-gray-700 text-white"
                                placeholder="Masukkan deskripsi diskusi"
                                rows={6}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="file" className="block text-white font-semibold mb-2">Upload Gambar atau Dokumen (Opsional)</label>
                            <input
                                type="file"
                                id="file"
                                onChange={handleFileChange}
                                className="w-full border border-gray-400 rounded-lg bg-gray-700 text-white"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                        >
                            Kirim Diskusi
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
