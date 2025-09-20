// import React, { useState, useEffect, useRef } from "react";
// import "./FloatingContactForm.css";

// const PHONE = "917505020733";

// export default function FloatingContactForm() {
//     const [open, setOpen] = useState(false);
//     const formRef = useRef();

//     // close on outside click
//     useEffect(() => {
//         function handleClickOutside(e) {
//             if (formRef.current && !formRef.current.contains(e.target)) {
//                 setOpen(false);
//             }
//         }
//         if (open) {
//             document.addEventListener("mousedown", handleClickOutside);
//         } else {
//             document.removeEventListener("mousedown", handleClickOutside);
//         }
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, [open]);

//     const onSubmit = (e, method) => {
//         e.preventDefault();
//         const fd = new FormData(e.target);
//         const name = fd.get("name") || "No name";
//         const email = fd.get("email") || "No email";
//         const requirement = fd.get("requirement") || "No requirement";
//         const countryCode = fd.get("countryCode") || "+91";
//         const phone = fd.get("phone") || "No phone";
//         const fullPhone = `${countryCode}${phone}`;

//         const message = `Hello, my name is ${name}.
// Email: ${email}
// Contact: ${fullPhone}
// Requirement: ${requirement}`;

//         if (method === "whatsapp") {
//             window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, "_blank");
//         } else {
//             window.location.href = `mailto:scholarscript@example.com?subject=Thesis Help&body=${encodeURIComponent(message)}`;
//         }
//         setOpen(false);
//     };

//     return (
//         <div className="floating-form">
//             {/* blinking bubble */}
//             {!open && (
//                 <div className="blink-bubble" onClick={() => setOpen(true)}>
//                     Share your details
//                 </div>
//             )}

//             {/* form popup */}
//             {open && (
//                 <div className="form-box" ref={formRef}>
//                     <h3>Share your details</h3>
//                     <form>
//                         <label>
//                             Name <input name="name" required />
//                         </label>
//                         <label>
//                             Email <input name="email" type="email" />
//                         </label>
//                         <label>
//                             Contact Number
//                             <div style={{ display: "flex", gap: "8px" }}>
//                                 <select name="countryCode" defaultValue="+91" required>
//                                     <option value="+91">🇮🇳 +91 (India)</option>
//                                     <option value="+1">🇺🇸 +1 (USA)</option>
//                                     <option value="+44">🇬🇧 +44 (UK)</option>
//                                     <option value="+61">🇦🇺 +61 (Australia)</option>
//                                     <option value="+971">🇦🇪 +971 (UAE)</option>
//                                 </select>
//                                 <input name="phone" type="tel" placeholder="Phone number" required />
//                             </div>
//                         </label>
//                         <label>
//                             Your Requirement <input name="requirement" required />
//                         </label>
//                         <div className="btn-group">
//                             <button
//                                 type="submit"
//                                 className="btn whatsapp"
//                                 onClick={(e) => onSubmit(e, "whatsapp")}
//                             >
//                                 WhatsApp
//                             </button>
//                             <button
//                                 type="submit"
//                                 className="btn email"
//                                 onClick={(e) => onSubmit(e, "email")}
//                             >
//                                 Email
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// }

import React, { useState, useEffect, useRef } from "react";
import "./FloatingContactForm.css";

const PHONE = "917505020733";

export default function FloatingContactForm() {
    const [open, setOpen] = useState(false);
    const formRef = useRef();

    // Show form every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => setOpen(true), 30000);
        return () => clearInterval(interval);
    }, []);

    // Close on outside click
    useEffect(() => {
        function handleClickOutside(e) {
            if (formRef.current && !formRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const onSubmit = (e, method) => {
        e.preventDefault();

        // ✅ use formRef.current instead of e.target
        const fd = new FormData(formRef.current);

        const name = fd.get("name") || "No name";
        const email = fd.get("email") || "No email";
        const requirement = fd.get("requirement") || "No requirement";
        const countryCode = fd.get("countryCode") || "+91";
        const phone = fd.get("phone") || "No phone";
        const fullPhone = `${countryCode}${phone}`;

        const message = `Hello, my name is ${name}.
Email: ${email}
Contact: ${fullPhone}
Requirement: ${requirement}`;

        if (method === "whatsapp") {
            window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, "_blank");
        } else {
            window.location.href = `mailto:scholarscript@example.com?subject=Thesis Help&body=${encodeURIComponent(message)}`;
        }
        setOpen(false);
    };

    if (!open) return null;

    return (
        <div className="floating-form-overlay">
            <div className="floating-form-box">
                <h3>Share your details</h3>
                {/* ✅ Attach formRef here */}
                <form ref={formRef}>
                    <label>
                        Name <input name="name" required />
                    </label>
                    <label>
                        Email <input name="email" type="email" />
                    </label>
                    <label>
                        Contact Number
                        <div className="phone-input">
                            <select name="countryCode" defaultValue="+91" required>
                                <option value="+91">🇮🇳 +91 (India)</option>
                                <option value="+1">🇺🇸 +1 (USA)</option>
                                <option value="+44">🇬🇧 +44 (UK)</option>
                                <option value="+61">🇦🇺 +61 (Australia)</option>
                                <option value="+971">🇦🇪 +971 (UAE)</option>
                            </select>
                            <input name="phone" type="tel" placeholder="Phone number" required />
                        </div>
                    </label>
                    <label>
                        Your Requirement <input name="requirement" required />
                    </label>
                    <div className="btn-group">
                        <button
                            type="button"
                            className="btn whatsapp"
                            onClick={(e) => onSubmit(e, "whatsapp")}
                        >
                            WhatsApp
                        </button>
                        <button
                            type="button"
                            className="btn email"
                            onClick={(e) => onSubmit(e, "email")}
                        >
                            Email
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
