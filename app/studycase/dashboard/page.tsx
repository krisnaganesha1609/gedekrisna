'use client';
import { useState, useEffect } from 'react';

export default function DashboardCTF() {
    const [result, setResult] = useState<any>(null);
    const [currentToken, setCurrentToken] = useState<string>('');

    // Opsional: Untuk mendisplay token saat ini biar peserta sadar
    // ada token di localStorage yang bisa mereka utak-atik.
    useEffect(() => {
        setCurrentToken(localStorage.getItem('token') || '');
    }, []);

    const fetchProtectedData = async () => {
        // Ambil token secara real-time saat tombol diklik.
        // Jika peserta mengubahnya via Console/Application Tab,
        // token yang di-tamper inilah yang akan terkirim.
        const token = localStorage.getItem('token');
        const res = await fetch('/api/protected', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await res.json();
        setResult(data);
    };

    const setNewToken = (newToken: string) => {
        localStorage.removeItem('token');
        setCurrentToken(newToken);
        localStorage.setItem('token', newToken);
    }

    return (
        <div className="p-8 max-w-2xl mx-auto mt-20 border rounded-lg shadow-md font-sans">
            <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
            <p className="text-sm text-gray-500 mb-6 font-mono break-all">
                Your current token:
            </p>
            <textarea
                id="token"
                value={currentToken}
                rows={4}
                onChange={(e) => setNewToken(e.target.value)}
                className="border rounded-md p-2 mb-4 w-full bg-inherit text-white"
            />
            <br />

            <button
                onClick={fetchProtectedData}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mb-6"
            >
                Akses Data Rahasia
            </button>

            {result && (
                <div className={`p-4 rounded-md mt-4 ${result.flag ? 'bg-green-100 text-green-800 border border-green-400' : 'bg-red-100 text-red-800 border border-red-400'}`}>
                    <pre className="whitespace-pre-wrap font-mono text-sm">
                        {JSON.stringify(result, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
}