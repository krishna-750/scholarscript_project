
// import React from "react";
// import Hero from "../components/Hero";
// import FAQSection from "../components/FAQ";
// import Services from "../components/Services"; // Import your Services component
// import FloatingContactForm from "../components/FloatingContactForm";

// export default function Home() {

//   return (
//     <>
//       <Hero />

//       {/* Services Section on Home */}
//       <section id="home-services" className="services-section" data-aos="fade-up">
//         <Services preview /> {/* Pass a prop to show only a preview if you want */}
//       </section>

//       <FAQSection />
//       <FloatingContactForm />

//       {/* CTA Section */}
//       <section className="container cta-strip" data-aos="fade-up">
//         <div className="cta-inner">
//           <div>
//             <h3>Need help with your thesis?</h3>
//             <p>Chat with our advisors on WhatsApp to get a free consultation.</p>
//           </div>
//           <a
//             className="btn"
//             href="https://wa.me/917505020733?text=I%20need%20a%20quote"
//             target="_blank"
//             rel="noreferrer"
//           >
//             Chat Now
//           </a>
//         </div>
//       </section>
//     </>
//   );
// }
import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import FAQSection from "../components/FAQ";
import Services from "../components/Services";
import FloatingContactForm from "../components/FloatingContactForm";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowForm(true); // show form every 10 seconds
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Hero />

      {/* Services Section */}
      <section id="home-services" className="services-section" data-aos="fade-up">
        <Services preview />
      </section>

      <FAQSection />

      {/* Floating Contact Form Popup */}
      {showForm && <FloatingContactForm onClose={() => setShowForm(false)} />}

      {/* CTA Section */}
      <section className="container cta-strip" data-aos="fade-up">
        <div className="cta-inner">
          <div>
            <h3>Need help with your thesis?</h3>
            <p>Chat with our advisors on WhatsApp to get a free consultation.</p>
          </div>
          <a
            className="btn"
            href="https://wa.me/917505020733?text=I%20need%20a%20quote"
            target="_blank"
            rel="noreferrer"
          >
            Chat Now
          </a>
        </div>
      </section>
    </>
  );
}
