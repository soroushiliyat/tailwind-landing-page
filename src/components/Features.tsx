const features = [
  {
    title: "Daily Planning",
    description: "Plan and manage your day with Drag & Drop.",
    icon: "🗓️",
  },
  {
    title: "Focus Timer",
    description: "Stay focused using Pomodoro mode.",
    icon: "⏱️",
  },
  {
    title: "Weekly Reports",
    description: "Track your performance with beautiful charts.",
    icon: "📊",
  },
];

export default function Features() {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 animate-slide-in-from-top duration-500">
          Zamanito Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in duration-700 ease-in-out">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition duration-300 animate-zoom-in delay-${index * 100}`}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}