export default function Home() {
  const services = [
    {
      title: "Housing Assistance",
      text: "We help you find suitable housing in Hamburg and support you through the rental process.",
      icon: "🏠",
    },
    {
      title: "Job Assistance",
      text: "CV optimization, job search support and application guidance across industries.",
      icon: "💼",
    },
    {
      title: "Relocation Support",
      text: "From arrival to settlement — we guide you through every step of your move.",
      icon: "✈️",
    },
    {
      title: "Insurance",
      text: "Health, liability and other important insurance consulting in Germany.",
      icon: "🛡️",
    },
    {
      title: "Banking",
      text: "Opening bank accounts and understanding financial services in Germany.",
      icon: "🏦",
    },
    {
      title: "Documents",
      text: "Anmeldung, contracts and official paperwork support.",
      icon: "📄",
    },
  ];

  return (
    <main className="bg-[#f8f6f3] text-[#0e224d]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              NORDWEG
            </h1>
            <p className="text-sm text-gray-500">
              Consulting & Services
            </p>
          </div>

          <nav className="hidden gap-8 md:flex">
            <a href="#" className="font-medium hover:text-[#b68a3c]">
              Home
            </a>

            <a href="#" className="font-medium hover:text-[#b68a3c]">
              Services
            </a>

            <a href="#" className="font-medium hover:text-[#b68a3c]">
              About Anna
            </a>

            <a href="#" className="font-medium hover:text-[#b68a3c]">
              Testimonials
            </a>

            <a href="#" className="font-medium hover:text-[#b68a3c]">
              FAQ
            </a>
          </nav>

          <button className="rounded-xl bg-[#0e224d] px-6 py-3 text-white transition hover:bg-[#152d63]">
            Contact Us
          </button>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white/80">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2">

            <div>
              <h2 className="max-w-2xl text-5xl font-bold leading-tight md:text-7xl">
                Housing, Relocation &
                Job Assistance
                in Hamburg
              </h2>

              <p className="mt-8 max-w-xl text-xl text-gray-700">
                Personal support for housing, jobs and relocation services across Hamburg.
              </p>

              <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-[#0e224d]">
                <div>✓ Personalized Support</div>
                <div>✓ Transparent Process</div>
                <div>✓ Multilingual Service</div>
              </div>

              <button className="mt-10 rounded-2xl bg-[#b68a3c] px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-[#a67d33]">
                Free Initial Consultation
              </button>

              <p className="mt-4 text-sm text-gray-600">
                No obligation • 100% confidential
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="font-semibold tracking-[0.2em] text-[#b68a3c]">
            WHAT WE DO
          </p>

          <h3 className="mt-4 text-4xl font-bold">
            Comprehensive Support for Your New Start in Germany
          </h3>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 xl:grid-cols-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-4xl">
                {service.icon}
              </div>

              <h4 className="mt-6 text-xl font-semibold">
                {service.title}
              </h4>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
    
  
      <section className="bg-[#f1ede7] py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">

          
            <img
            
            />
          </div>

          <div>
            <p className="font-semibold tracking-[0.2em] text-[#b68a3c]">
              ABOUT ANNA
            </p>

            <h3 className="mt-4 text-5xl font-bold leading-tight">
              Personal. Reliable.
              Dedicated.
            </h3>

            <p className="mt-8 text-lg leading-8 text-gray-700">
              Hi, I'm Anna — founder of Nordweg Consulting & Services.
              I support individuals and families in Hamburg with housing,
              relocation, job search and integration in Germany.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              My goal is to make your transition smooth, stress-free and successful.
              I provide personalized support, transparent communication and practical solutions.
            </p>

            
  <a
  href="https://wa.me/4916094794282"
  target="_blank"
  className="mt-10 inline-block rounded-xl bg-green-600 px-6 py-4 text-white font-semibold shadow-lg hover:bg-green-700 transition"
>
  Chat on WhatsApp
</a>

            <div className="mt-12 grid gap-6 text-gray-700 md:grid-cols-2">
              <div>✓ Many years of relocation experience</div>
              <div>✓ Multilingual: EN, DE, UA, RU</div>
              <div>✓ Hundreds of satisfied clients</div>
              <div>✓ Services across Hamburg</div>
            </div>
          
        <div className="mt-10">
  <img
    src="/images/anna-profile.png"
    alt="Anna"
    className="rounded-2xl shadow-xl w-80"
  />
</div>
    </div>  
      </section>
    </main>
  );
}