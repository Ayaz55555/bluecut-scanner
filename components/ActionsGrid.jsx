export default function ActionsGrid() {
  const actions = [
    {
      title: "Daily Check-in",
      desc: "Simple zero-gas action (planned).",
    },
    {
      title: "Badge Explorer",
      desc: "Learn how to earn Base badges.",
    },
    {
      title: "Routine Helper",
      desc: "Stay consistent with onchain tasks.",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {actions.map((a, i) => (
        <div
          key={i}
          className="p-4 bg-white dark:bg-[#141417] rounded-xl border dark:border-[#1b1b1e] shadow-sm hover:shadow-md transition"
        >
          <h3 className="font-semibold text-blue-600 dark:text-blue-400">{a.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{a.desc}</p>
        </div>
      ))}
    </section>
  );
}