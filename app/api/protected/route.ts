import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request: Request) {
    const authHeader = request.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return NextResponse.json({ error: "Missing or invalid token" }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];

    try {
        // THE GOLDEN MISTAKE: Decode bukan Verify!
        // jwt.decode HANYA membedah payload base64 tanpa mengecek signature valid atau tidak.
        const decoded = jwt.decode(token) as { role?: string, username?: string };

        if (!decoded) {
            return NextResponse.json({ error: "Invalid token structure" }, { status: 400 });
        }

        // Celah: Karena tidak ada verifikasi signature, 
        // user bebas mengubah payload base64 dari role="user" menjadi role="admin"
        if (decoded.role === 'admin') {
            return NextResponse.json({
                message: "Welcome Admin! Here is your flag:",
                flag: "SCATTER{d3c0d3_1s_n0t_v3r1fy_b4d_pr4ct1c3}"
            });
        }

        return NextResponse.json({
            message: "Access Denied. You are just a regular user.",
            user: decoded
        }, { status: 403 });

    } catch (error) {
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}