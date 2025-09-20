
// import React, { useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import AOS from "aos";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import WhatsAppButton from "./components/WhatsAppButton";
// import FloatingContactForm from "./components/FloatingContactForm";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Blog from "./pages/Blog";

// export default function App() {
//   useEffect(() => {
//     AOS.init({ duration: 700, once: true, offset: 60 });
//     AOS.refresh();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/blog" element={<Blog />} />
//         </Routes>
//       </main>

//       <Footer />
//       <WhatsAppButton />
//       <FloatingContactForm />
//     </>
//   );
// }


import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import FloatingContactForm from "./components/FloatingContactForm";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Services from "./components/Services"; // <-- import Services page

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 60 });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} /> {/* <-- Services route */}
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
      <FloatingContactForm />
    </>
  );
}
