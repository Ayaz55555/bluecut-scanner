export default function BadgesPage() {
  const list = [
    { title: "Onchain Explorer", desc: "Make your first Base transaction." },
    { title: "Base Citizen", desc: "Join social identity ecosystem." },
    { title: "Creator Badge", desc: "Publish or build something onchain." },
  ];

  return (
    <main className="p-6 max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Badges</h1>
      {list.map((b, i) => (
        <div key={i} className="p-4 bg-white dark:bg-[#141417] border rounded-xl">
          <h3 className="font-semibold text-blue-500">{b.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{b.desc}</p>
        </div>
      ))}
    </main>
  );
}