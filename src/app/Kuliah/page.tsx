import Header from "@/Header/page";
export default async function Home() {
    return (
        <main>
            <Header/>
            <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-800">
            <h1 className="text-4xl font-bold mb-12 text-white">Forum untuk Mahasiswa</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                <a href="#" className="p-6 bg-gray-600 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 7H7v6h6V7z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-1a7 7 0 110-14 7 7 0 010 14z" clipRule="evenodd" />
                    </svg>
                    <h2 className="text-2xl font-semibold mb-2">Forum Matematika</h2>
                    <p className="text-white text-center">Diskusi dan tanya jawab terkait matematika.</p>
                </a>
                <a href="#" className="p-6 bg-gray-600 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H3zm14 2H3v10h14V5z" clipRule="evenodd" />
                        <path d="M12 9.5a1 1 0 112 0V11a1 1 0 01-2 0V9.5z" />
                    </svg>
                    <h2 className="text-2xl font-semibold mb-2">Forum Ilmu Komputer</h2>
                    <p className="text-white text-center">Diskusi dan tanya jawab terkait ilmu komputer.</p>
                </a>
                <a href="#" className="p-6 bg-gray-600 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                    </svg>
                    <h2 className="text-2xl font-semibold mb-2">Forum Ekonomi</h2>
                    <p className="text-white text-center">Diskusi dan tanya jawab terkait ekonomi.</p>
                </a>
                <a href="/Kuliah/ForumKuliahGeneral" className="p-6 bg-gray-600 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 10a5 5 0 1010 0 5 5 0 00-10 0zm10.5 0a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" clipRule="evenodd" />
                        <path d="M9.5 9.5v4h1v-4h-1zM10 5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h2 className="text-2xl font-semibold mb-2">Forum General</h2>
                    <p className="text-white text-center">Diskusi dan tanya jawab umum terkait perkuliahan.</p>
                </a>
                {/* Tambahkan lebih banyak forum sesuai kebutuhan */}
            </div>
            </div>
        </main>
    );
}