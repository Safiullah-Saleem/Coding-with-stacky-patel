import CompImg from "../../assets/Comp.jpg";
export default function Hero() {
  return (
    <section className="bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Build Modern Websites <br /> with{" "}
            <span className="text-blue-500">React & Tailwind</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            A simple, responsive, and powerful setup to kickstart your next
            project. Designed with developer experience and performance in mind.
          </p>

          <div className="mt-8 flex space-x-4">
            <a
              href="#"
              className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition"
            >
              Get Started
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:border-blue-500 hover:text-blue-500 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Content (Image/Illustration) */}
        <div className="flex justify-center">
          <img
            src={CompImg}
            alt="App Screenshot"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
