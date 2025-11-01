import { useState } from "react";

const faqs = [
  {
    question: "Is Zamanito free?",
    answer:
      "Yes! The basic version is completely free and gives you access to core features.",
  },
  {
    question: "Is there a mobile version of the app?",
    answer:
      "Yes, Android and iOS versions are under development and will be released soon.",
  },
  {
    question: "How can I upgrade to the Pro plan?",
    answer:
      "You can activate the Pro plan via the 'Get Started' button in the pricing section.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100 animate-slide-in-from-top duration-500">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-4 animate-fade-in duration-700 ease-in-out">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-right px-6 py-4 font-semibold text-gray-800 dark:text-gray-100 flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              <div
                className={`px-6 pb-4 text-gray-600 dark:text-gray-300 transition-all duration-500 ease-in-out ${
                  openIndex === index ? "animate-slide-in-from-bottom block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}