"use client";

import { useState } from "react";
import { useEffect } from "react";
import { Navigation } from "../components/nav";
import { flagList } from "./flag";
import AsciiArt from "../components/asciiart";

export default function FlagSubmit() {
  const [flag, setFlag] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("flagHistory");
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  async function sha256(input: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    setTimeout(async () => {
      setLoading(false);
      if (flag.trim() === "") {
        setError("Please enter a flag string.");
        return;
      }
      let found = false;
      let hashedflag = await sha256(flag.trim());
      for (const [flagValue, flagMessage] of flagList) {
        if (flagValue === hashedflag) {
          setSuccess(flagMessage);
          found = true;
          break;
        }
      }
      if (!found) {
        setError("This doesn't seem to be my flag I suppose :)");
        return;
      }
      setSubmitted(true);
      const newHistory = [
        flag.trim(),
        ...history.filter((f) => f !== flag.trim()),
      ].slice(0, 10);
      setHistory(newHistory);
      localStorage.setItem("flagHistory", JSON.stringify(newHistory));
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 flex flex-col">
      <Navigation />
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md bg-zinc-900 rounded-xl shadow-lg p-8 border border-zinc-700">
          <h1 className="text-3xl font-bold text-zinc-200 mb-6 text-center font-display">
            Do You Found My Flag?
          </h1>
          {history.length > 0 && (
            <div className="mb-6">
              <h2 className="text-zinc-400 text-sm font-semibold mb-2">
                Your Submitted Flags:
              </h2>
              <ul className="bg-zinc-800 rounded-lg p-3 text-zinc-300 text-xs font-mono max-h-32 overflow-auto">
                {history.map((f, i) => (
                  <li
                    key={f + i}
                    className="py-1 border-b border-zinc-700 last:border-none"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {submitted ? (
            <>
              <div className="text-green-400 text-center text-lg font-medium mb-3">
                {success}
              </div>
              <AsciiArt />
            </>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                value={flag}
                onChange={(e) => setFlag(e.target.value)}
                placeholder="Enter flag..."
                className="px-2 py-3 rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-orange-400 font-mono text-lg transition duration-150"
                disabled={loading}
                autoFocus
              />
              {error && <div className="text-red-400 text-sm">{error}</div>}
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-150 shadow-lg disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Flag"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
