"use client";
import Header from "@/components/Header";
import HeroCard from "@/components/HeroCard";
import ActionsGrid from "@/components/ActionsGrid";

export default function Home() {
  return (
    <main className="p-4 max-w-3xl mx-auto space-y-6">
      <Header />
      <HeroCard />
      <ActionsGrid />
    </main>
  );
}