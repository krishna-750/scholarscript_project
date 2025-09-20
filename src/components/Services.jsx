// import React from "react";
// import { Link } from "react-router-dom";
// import "./Services.css"; // Ensure this path is correct

// const services = [
//     {
//         title: "Thesis Writing",
//         description: "Comprehensive support for your thesis from topic selection to final submission.",
//         imageUrl: "https://www.shutterstock.com/image-photo/smiling-young-curly-indian-latin-600nw-2134896799.jpg",
//     },
//     {
//         title: "Admission Proposal",
//         description: "Crafting compelling proposals to enhance your admission prospects.",
//         imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
//     },
//     {
//         title: "Research Proposal",
//         description: "Developing detailed research proposals to outline your study's objectives and methodology.",
//         imageUrl: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc2VhcmNofGVufDB8fDB8fHww",
//     },
//     {
//         title: "Proofreading & Editing",
//         description: "Ensuring clarity, coherence, and correctness in your academic writing.",
//         imageUrl: "https://www.shutterstock.com/image-photo/thinking-man-laptop-office-night-260nw-2638385107.jpg",
//     },
//     {
//         title: "Review Paper Support",
//         description: "Assisting in writing comprehensive review papers based on extensive literature analysis.",
//         imageUrl: "https://www.shutterstock.com/shutterstock/photos/2491646017/display_1500/stock-photo-focused-latin-hispanic-young-business-woman-working-on-laptop-computer-reading-financial-document-2491646017.jpg",
//     },
//     {
//         title: "Synopsis Writing",
//         description: "Crafting concise and informative synopses to summarize your research.",
//         imageUrl: "https://img.freepik.com/free-photo/young-woman-writing-her-journal_52683-114856.jpg?semt=ais_incoming&w=740&q=80",
//     },
// ];

// export default function Services() {
//     return (
//         <section className="services-page">
//             <h1>Our Services</h1>
//             <div className="services-grid">
//                 {services.map((service, index) => (
//                     <div key={index} className="service-card">
//                         <img src={service.imageUrl} alt={service.title} className="service-image" />
//                         <div className="service-content">
//                             <h3>{service.title}</h3>
//                             <p>{service.description}</p>
//                             <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="service-link">
//                                 Learn More
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
    {
        title: "Topic Selection",
        description: "We help you choose the perfect research topic aligned with your field and interests.",
        imageUrl: "https://static1.squarespace.com/static/66156b9187aae3791bd3bb77/66c0fe2c01aa742c566b266a/66c0fddc01aa742c566b15d8/1723923932765/mars-IgUR1iX0mqM-unsplash-scaled-e1647805114913.jpg?format=original",
    },
    {
        title: "Thesis Writing",
        description: "Comprehensive support for your thesis from topic selection to final submission.",
        imageUrl: "https://img.freepik.com/free-photo/medium-shot-man-working-late-night-laptop_23-2150280979.jpg?semt=ais_incoming&w=740&q=80",
    },
    {
        title: "Admission Proposal",
        description: "Crafting compelling proposals to enhance your admission prospects.",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    },
    {
        title: "Research Proposal",
        description: "Developing detailed research proposals to outline your study's objectives and methodology.",
        imageUrl: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=600&auto=format&fit=crop&q=60",
    },
    {
        title: "Proofreading & Editing",
        description: "Ensuring clarity, coherence, and correctness in your academic writing.",
        imageUrl: "https://www.shutterstock.com/image-photo/thinking-man-laptop-office-night-260nw-2638385107.jpg",
    },
    {
        title: "Review Paper Support",
        description: "Assisting in writing comprehensive review papers based on extensive literature analysis.",
        imageUrl: "https://www.shutterstock.com/shutterstock/photos/2491646017/display_1500/stock-photo-focused-latin-hispanic-young-business-woman-working-on-laptop-computer-reading-financial-document-2491646017.jpg",
    },
    {
        title: "Synopsis Writing",
        description: "Crafting concise and informative synopses to summarize your research.",
        imageUrl: "https://img.freepik.com/free-photo/young-woman-writing-her-journal_52683-114856.jpg?semt=ais_incoming&w=740&q=80",
    },
    {
        title: "Plagiarism Checking & Correction",
        description: "We ensure your research is 100% original by checking for plagiarism using reliable tools.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYBmJMGojwYpoj-9VMkgvMc_t5eGso5ekAQ&s",
    },
];

export default function Services() {
    return (
        <section className="services-page">
            <h1>Our Services</h1>
            <div className="services-grid">
                {services.map((service, idx) => (
                    <div key={idx} className="service-card">
                        <img src={service.imageUrl} alt={service.title} className="service-image" />
                        <div className="service-content">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="service-link">
                                Learn More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
