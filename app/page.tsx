"use client";

import { useState } from "react";
export default function Home() {
  const [language, setLanguage] = useState("EN");
  
  const [menuOpen, setMenuOpen] = useState(false);
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
    <main className="scroll-smooth bg-[#f8f6f3] text-[#0e224d]">
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

          <button
          className="mr-2 text-4xl text-[#0e224d] md:hidden"
  onClick={() => setMenuOpen(!menuOpen)}
  
>
  ☰
</button>
{menuOpen && (
  <div className="absolute left-4 top-20 z-50 flex w-64 flex-col gap-4 rounded-2xl bg-white p-6 shadow-2xl md:hidden">
    <a href="#" className="font-medium">
      Home
    </a>

    <a href="#home" className="font-medium">
      Services
    </a>

    <a href="#services">
      About Anna
    </a>

    <a href="#about">
      Testimonials
    </a>
  </div>
)}
<nav className="hidden gap-8 md:flex">
            <a href="#" className="font-medium hover:text-[#0b1b40]">
  {language === "DE"
    ? "Startseite"
    : language === "RU"
    ? "Главная"
    : "Home"}
</a>

            <a href="#" className="font-medium hover:text-[#b68a3c]">
              {language === "DE"
  ? "Dienstleistungen"
  : language === "RU"
  ? "Услуги"
  : "Services"}
            </a>

            <a href="#" className="font-medium hover:text-[#b68a3c]">
              {language === "DE"
  ? "Über Anna"
  : language === "RU"
  ? "Об Анне"
  : "About Anna"}
            </a>

            <a href="#" className="font-medium hover:text-[#b68a3c]">
              {language === "DE"
  ? "Bewertungen"
  : language === "RU"
  ? "Отзывы"
  : "Testimonials"}
            </a>
       

            <a href="#" className="font-medium hover:text-[#b68a3c]">
              FAQ
            </a>
          </nav>
               <div className="ml-2 flex gap-2 md:ml-6">
  <button
  onClick={() => setLanguage("EN")}
  className={`rounded-lg px-3 py-1 font-semibold transition ${
    language === "EN"
      ? "bg-[#0e224d] text-white"
      : "bg-gray-200 text-black hover:bg-gray-300"
  }`}
>
  🇬🇧 EN
</button>

<button
  onClick={() => setLanguage("DE")}
  className={`rounded-lg px-3 py-1 font-semibold transition ${
    language === "DE"
      ? "bg-[#0e224d] text-white"
      : "bg-gray-200 text-black hover:bg-gray-300"
  }`}
>
  🇩🇪 DE
</button>

<button
  onClick={() => setLanguage("RU")}
  className={`rounded-lg px-3 py-1 font-semibold transition ${
    language === "RU"
      ? "bg-[#0e224d] text-white"
      : "bg-gray-200 text-black hover:bg-gray-300"
  }`}
>
  🇷🇺 RU
</button>
</div>
          
           
        </div>
      </header>

      {/* HERO */}
      <section
  id="home"
  className="relative overflow-hidden"
        style={{
         backgroundImage: "url('/images/hamburg-hero.png')",
backgroundSize: "cover",
backgroundPosition: "center",
        }}
      >
        <div className="bg-white/80">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2">

            <div>
              <h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-7xl">
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

              <a
  href="https://wa.me/4916094794282"
  target="_blank"
  className="mt-10 inline-block rounded-2xl bg-[#b68a3c] px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-[#a67d33]"
>
  Free Initial Consultation
</a>

              <p className="mt-4 text-sm text-gray-600">
                No obligation • 100% confidential
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
  id="services"
  className="mx-auto max-w-7xl px-6 py-24"
>
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
              className="group rounded-3xl border border-white/40 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-4xl">
                {service.icon}
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b68a3c]">
  {service.title}
</p>
<h4 className="mt-6 text-xl font-semibold">
                {service.title}
              </h4>
              <div className="mt-3 h-[2px] w-12 bg-[#b68a3c]"></div>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                {service.text}
              </p>
              <div className="mt-6 font-semibold text-[#b68a3c] transition group-hover:translate-x-1">
  Learn More →
</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-[#f1ede7] py-24">
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
  Having lived in Germany for over four years, I understand both the opportunities and challenges people face when starting a new life here. My mission is to make this transition easier, clearer and less stressful.
</p>

<p className="mt-6 text-lg leading-8 text-gray-700">
  With more than 10 years of consulting experience, two university degrees and professional experience in coaching and the insurance sector, I support students, professionals, families and newcomers throughout every stage of their relocation journey. Fluent in English, German, Ukrainian and Russian, I provide personalized support, transparent communication and practical solutions tailored to each client's situation.
</p>

            
  <a
  href="https://wa.me/4916094794282"
  target="_blank"
  className="mt-10 inline-block rounded-xl bg-green-600 px-6 py-4 text-white font-semibold shadow-lg hover:bg-green-700 transition"
>
  Chat on WhatsApp
</a>

            <div className="mt-12 grid gap-6 text-gray-700 md:grid-cols-2">
  <div>✓ 10+ years of consulting experience</div>
  <div>✓ Multilingual: EN, DE, UA, RU</div>
  <div>✓ Official coach and insurance advisor</div>
  <div>✓ Personal support across Hamburg</div>
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
      <section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="text-center">
      <p className="font-semibold tracking-[0.2em] text-[#b68a3c]">
        SUCCESS STORIES
      </p>

      <h3 className="mt-4 text-4xl font-bold">
        How We Help Our Clients
      </h3>

      <p className="mx-auto mt-6 max-w-3xl text-gray-600">
        Real examples of situations where we helped clients settle in Germany faster and with less stress.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
    </div>

  </div>
</section>
<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="text-center">
      <p className="font-semibold tracking-[0.2em] text-[#b68a3c]">
        SUCCESS STORIES
      </p>

      <h3 className="mt-4 text-4xl font-bold">
        How We Help Our Clients
      </h3>

      <p className="mx-auto mt-6 max-w-3xl text-gray-600">
        Real examples of situations where we helped clients settle in Germany faster and with less stress.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-3">

  <div className="rounded-3xl bg-[#f8f6f3] p-8 shadow-lg">
    <div className="mb-4 text-4xl">🏠</div>

    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b68a3c]">
      HOUSING SUPPORT
    </p>

    <h4 className="mt-4 text-2xl font-bold text-[#0e224d]">
      Apartment Found in 3 Weeks
    </h4>

    <div className="mt-3 h-[2px] w-12 bg-[#b68a3c]"></div>

    <p className="mt-4 leading-7 text-gray-600">
      A family relocating to Hamburg needed long-term housing. We assisted with applications, landlord communication and document preparation, resulting in a successful rental agreement within three weeks.
    </p>
  </div>

  <div className="rounded-3xl bg-[#f8f6f3] p-8 shadow-lg">
    <div className="mb-4 text-4xl">📄</div>

    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b68a3c]">
      DOCUMENTS & REGISTRATION
    </p>

    <h4 className="mt-4 text-2xl font-bold text-[#0e224d]">
      Smooth Registration Process
    </h4>

    <div className="mt-3 h-[2px] w-12 bg-[#b68a3c]"></div>

    <p className="mt-4 leading-7 text-gray-600">
      A newly arrived professional required Anmeldung, tax registration and insurance setup. All appointments and paperwork were completed quickly and without delays.
    </p>
  </div>

  <div className="rounded-3xl bg-[#f8f6f3] p-8 shadow-lg">
    <div className="mb-4 text-4xl">🛡️</div>

    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b68a3c]">
      INSURANCE & BANKING
    </p>

    <h4 className="mt-4 text-2xl font-bold text-[#0e224d]">
      Settled from Day One
    </h4>

    <div className="mt-3 h-[2px] w-12 bg-[#b68a3c]"></div>

    <p className="mt-4 leading-7 text-gray-600">
      We helped a client choose suitable insurance coverage, open a German bank account and understand the essential financial steps after relocation.
    </p>
  </div>

</div>

  </div>
</section>
    <a
  href="https://wa.me/4916094794282"
  target="_blank"
  className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl hover:bg-green-600 transition"
>
  💬
</a>
</main>
  );
}