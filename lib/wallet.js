"use client";
import { createAppKit } from "@reown/appkit";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { defineChain } from "viem";
import { base } from "viem/chains";

export const wcProjectId = process.env.NEXT_PUBLIC_WC_ID;

const metadata = {
  name: "BlueCut Scanner",
  description: "Ayaz's Base helper app",
  url: "https://bluecut.app/",
  icons: ["https://bluecut.app/logo.png"],
};

export const wagmiAdapter = new WagmiAdapter({
  projectId: wcProjectId,
  networks: [base],
});

export const appkit = createAppKit({
  adapters: [wagmiAdapter],
  metadata,
});