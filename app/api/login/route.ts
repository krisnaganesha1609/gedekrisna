import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST() {
    // Secret key (bebas, karena toh nanti kita abaikan saat divalidasi)
    const SECRET = "rahasia_negara_123";

    const payload = {
        username: "guest",
        role: "user"
    };

    // Membuat JWT valid
    const token = jwt.sign(payload, SECRET, { expiresIn: '1h' });

    return NextResponse.json({ 
        token, 
        message: "Login berhasil sebagai guest" 
    });
}