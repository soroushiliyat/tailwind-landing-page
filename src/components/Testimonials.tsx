const testimonials = [
  {
    name: "Maryam Rezaei",
    role: "Student",
    quote:
      "Zamanito helped me plan my study schedule more precisely. It's really amazing!",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Ali Mohammadi",
    role: "Developer",
    quote:
      "With Zamanito's focus timer, my productivity has multiplied. The design is also beautiful!",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sara Ahmadi",
    role: "Project Manager",
    quote:
      "Zamanito's weekly reports helped my team manage time better. I definitely recommend it!",
    avatar: "https://i.pravatar.cc/150?img=31",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-gray-100 animate-slide-in-from-top duration-500">
          User Testimonials
        </h2>
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in duration-700 ease-in-out">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition duration-300 text-right animate-zoom-in delay-${index * 100}`}
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                “{t.quote}”
              </p>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {t.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}