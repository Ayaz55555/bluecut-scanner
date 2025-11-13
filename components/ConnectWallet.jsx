"use client";
import { appkit } from "@/lib/wallet";

export default function ConnectWallet() {
  return (
    <button
      onClick={() => appkit.open()}
      className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
    >
      Connect Wallet
    </button>
  );
}