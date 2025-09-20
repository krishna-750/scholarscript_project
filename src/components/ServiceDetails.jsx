import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ServiceDetails.css";

const serviceDetails = {
    "topic-selection": {
        title: "Topic Selection",
        content: `
      Choosing the right topic is the first step towards a successful thesis.
      At ScholarScript, we guide you through brainstorming sessions,
      analyzing research gaps, and aligning your interests with current trends.
      We ensure your topic is unique, research-worthy, and has the potential
      to make a meaningful contribution to your field.

      Benefits of choosing ScholarScript:
      • Personalized topic suggestions tailored to your field.
      • Guidance from subject-matter experts.
      • Focus on originality and future research scope.
      • Help in aligning with university guidelines.
    `,
    },

    "thesis-writing": {
        title: "Thesis Writing",
        content: `
      Writing a thesis requires detailed planning, structured chapters, and
      deep research. Our writers provide complete support from the introduction
      to the conclusion, ensuring every section meets academic standards.

      Benefits of using our service:
      • Complete chapter-wise assistance.
      • Professional editing and formatting.
      • Expert academic language usage.
      • Timely delivery and unlimited revisions.
    `,
    },

    "admission-proposal": {
        title: "Admission Proposal",
        content: `
      A strong admission proposal increases your chances of acceptance.
      We craft persuasive and well-structured proposals that highlight your
      strengths, research interests, and academic achievements.

      Benefits:
      • Tailored proposals to fit university requirements.
      • Professional writing that makes you stand out.
      • Clear presentation of academic goals.
      • Polished language and formatting.
    `,
    },

    "research-proposal": {
        title: "Research Proposal",
        content: `
      A research proposal defines your study's objectives, methodology,
      and expected outcomes. We help you write proposals that demonstrate
      clarity, feasibility, and originality.

      Benefits:
      • Clear statement of research problem.
      • Detailed methodology and literature support.
      • Logical flow and academic tone.
      • Alignment with funding/university guidelines.
    `,
    },

    "proofreading-&-editing": {
        title: "Proofreading & Editing",
        content: `
      Academic writing must be precise, error-free, and polished.
      Our experts carefully proofread and edit your work for clarity,
      coherence, and correctness.

      Benefits:
      • Grammar and spelling correction.
      • Improved sentence flow and readability.
      • Adherence to academic style guides.
      • Removal of redundancies and inconsistencies.
    `,
    },

    "review-paper-support": {
        title: "Review Paper Support",
        content: `
      Review papers require extensive literature surveys and
      critical analysis. We assist in synthesizing information
      and structuring comprehensive review papers.

      Benefits:
      • Organized and structured reviews.
      • Critical insights on existing literature.
      • Professional formatting and referencing.
      • Strengthened academic arguments.
    `,
    },

    "synopsis-writing": {
        title: "Synopsis Writing",
        content: `
      A synopsis concisely summarizes your research plan.
      We craft informative synopses that present your ideas
      clearly to evaluators.

      Benefits:
      • Concise but comprehensive content.
      • Clear research objectives.
      • Professional formatting.
      • Alignment with academic standards.
    `,
    },

    "plagiarism-checking-&-correction": {
        title: "Plagiarism Checking & Correction",
        content: `
      Originality is key to academic success.
      We use trusted plagiarism detection tools to ensure
      your work is 100% unique and free of copied content.

      Benefits:
      • Detailed plagiarism reports.
      • Paraphrasing and rewriting support.
      • Citation and referencing corrections.
      • Guarantee of originality.
    `,
    },
};

export default function ServiceDetails() {
    const { serviceId } = useParams();
    const service = serviceDetails[serviceId];

    if (!service) {
        return (
            <section className="service-details">
                <h1>Service Not Found</h1>
                <Link to="/services" className="back-link">
                    ← Back to Services
                </Link>
            </section>
        );
    }

    return (
        <section className="service-details">
            <h1>{service.title}</h1>
            <pre className="content">{service.content}</pre>
            <Link to="/services" className="back-link">
                ← Back to Services
            </Link>
        </section>
    );
}
