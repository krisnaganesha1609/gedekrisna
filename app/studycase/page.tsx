'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginCTF() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async () => {
        setLoading(true);
        const res = await fetch('/api/login', { method: 'POST' });
        const data = await res.json();

        if (data.token) {
            localStorage.setItem('token', data.token);
            router.push('/studycase/dashboard');
        }
        setLoading(false);
    };

    return (
        <div className="p-8 max-w-md mx-auto mt-20 border rounded-lg shadow-md font-sans">
            <h1 className="text-2xl font-bold mb-4">Mini CTF: Try To Be Admin</h1>
            <p className="mb-4 text-gray-600">Klik tombol di bawah untuk login sebagai Guest.</p>

            <button
                onClick={handleLogin}
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-6"
            >
                {loading ? 'Logging in...' : 'Login as Guest'}
            </button>

            <div className="bg-yellow-100 p-4 rounded-md border-l-4 border-yellow-500">
                <p className="font-bold text-yellow-800">Hint:</p>
                <p className="text-sm text-yellow-700 mt-1">
                    JWT terdiri dari 3 bagian.<br />
                    Target kamu adalah menjadi <strong>admin</strong>.<br />
                    Gunakan <strong><a href="https://jwt.io" target="_blank" rel="noopener noreferrer">https://jwt.io</a></strong> untuk memodifikasi token JWT.
                </p>
            </div>
        </div>
    );
}