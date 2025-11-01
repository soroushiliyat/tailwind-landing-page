const plans = [
  {
    name: "Free",
    price: "0 Toman",
    features: ["Daily Planning", "Focus Timer", "Limited Report Access"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "49,000 Toman / month",
    features: [
      "All Free Features",
      "Full Reports",
      "Email Support",
      "Dark Mode",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    features: [
      "All Pro Features",
      "Team Management Panel",
      "Dedicated Support",
      "Team Training",
    ],
    highlighted: false,
  },
];

export default function PricingPlans() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 animate-slide-in-from-top duration-500">
          Pricing Plans
        </h2>
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in duration-700 ease-in-out">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-lg border transition duration-300 animate-zoom-in delay-${index * 100} ${
                plan.highlighted
                  ? "border-yellow-400 bg-yellow-50 dark:bg-yellow-900 scale-105"
                  : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                {plan.price}
              </p>
              <ul className="text-right mb-6 space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    ✅ <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-full font-semibold transition duration-300 ${
                  plan.highlighted
                    ? "bg-yellow-400 text-white hover:bg-yellow-500"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                {plan.name === "Enterprise" ? "Request Consultation" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}