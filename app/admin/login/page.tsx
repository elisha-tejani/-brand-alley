"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Incorrect password.");
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-[360px]">
        <h1 className="font-sans font-extrabold text-[24px] mb-1">Admin Login</h1>
        <p className="text-clay text-[13.5px] mb-6">Brand Alley product dashboard.</p>

        <input
          type="password"
          required
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full border border-line px-4 py-3 text-[14px] outline-none focus:border-ink rounded-sm mb-4"
        />

        {error && <p className="text-red-600 text-[13px] mb-4">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-ink text-paper font-sans font-semibold text-[12px] tracking-wider uppercase px-6 py-3.5 hover:bg-orange hover:text-ink transition-colors disabled:opacity-50"
        >
          {loading ? "Checking…" : "Log In"}
        </button>
      </form>
    </div>
  );
}
