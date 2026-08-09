"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="font-sans font-semibold text-[12px] tracking-wider uppercase border border-line px-5 py-2.5 hover:border-ink transition-colors"
    >
      Log Out
    </button>
  );
}
