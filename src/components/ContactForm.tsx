export default function ContactForm() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-6 max-w-xl animate-fade-in duration-700 ease-in-out">
        <h2 className="text-4xl font-bold text-center mb-8 animate-slide-in-from-top duration-500">
          Contact Us
        </h2>
        <form className="space-y-6">
          <div className="animate-slide-in-from-left duration-500 delay-100">
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          <div className="animate-slide-in-from-left duration-500 delay-200">
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email"
            />
          </div>
          <div className="animate-slide-in-from-left duration-500 delay-300">
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300 animate-zoom-in delay-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}