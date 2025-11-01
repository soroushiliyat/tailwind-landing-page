import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import PricingPlans from "./components/PricingPlans";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";

export default function App() {
  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500">
      {/* Dark mode toggle button */}
      <DarkModeToggle />

      {/* Hero section */}
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-900 dark:to-gray-800 text-white">
        <header className="container mx-auto px-6 py-16 flex flex-col items-center text-center animate-fade-in-up duration-700 ease-in-out">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 animate-slide-in-from-top">
            Take back your time with <span className="text-yellow-300">Zamanito</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-8 animate-fade-in delay-200">
            Time management has never been this simple and beautiful. Focus, plan, and shine with Zamanito!
          </p>
          <button className="bg-yellow-300 text-blue-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 animate-zoom-in delay-300">
            Free Download
          </button>
        </header>
      </div>

      {/* Other sections */}
      <Features />
      <Testimonials />
      <PricingPlans />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}