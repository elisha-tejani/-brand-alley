"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const STATUSES = ["PENDING", "CONFIRMED", "SHIPPED", "DELIVERED", "CANCELLED"];

export default function OrderStatusSelect({ orderId, currentStatus }: { orderId: string; currentStatus: string }) {
  const router = useRouter();
  const [status, setStatus] = useState(currentStatus);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleChange(newStatus: string) {
    const previous = status;
    setStatus(newStatus);
    setSaving(true);
    setError("");

    try {
      const res = await fetch(`/api/admin/orders/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Failed to save (${res.status})`);
      }

      router.refresh();
    } catch (err) {
      setStatus(previous); // revert the dropdown since the save didn't actually happen
      setError(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="flex flex-col items-end gap-1.5">
      <select
        value={status}
        onChange={(e) => handleChange(e.target.value)}
        disabled={saving}
        className="border border-line px-3 py-2 text-[13px] rounded-sm bg-paper disabled:opacity-60"
      >
        {STATUSES.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      {saving && <span className="text-clay text-[11px]">Saving…</span>}
      {error && <span className="text-red-600 text-[11px] max-w-[200px] text-right">{error}</span>}
    </div>
  );
}
