import AboutImg from "../../assets/Contact.jpg"; // replace with your image path

export default function About() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            About Us
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We are a passionate team of developers and designers dedicated to
            building high-quality websites and web applications. Our mission is
            to deliver innovative solutions that help businesses grow and
            succeed online.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            With years of experience in front-end and back-end development, we
            ensure that every project we take is efficient, responsive, and
            user-friendly.
          </p>
          <button className="mt-6 px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={AboutImg}
            alt="About Us"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
