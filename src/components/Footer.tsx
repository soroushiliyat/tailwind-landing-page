export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 animate-fade-in-up duration-700 ease-in-out">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="mb-4 md:mb-0 text-sm text-gray-300 dark:text-gray-400">
          © 2025 Zamanito. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-yellow-300 transition">Instagram</a>
          <a href="#" className="hover:text-yellow-300 transition">Twitter</a>
          <a href="#" className="hover:text-yellow-300 transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}