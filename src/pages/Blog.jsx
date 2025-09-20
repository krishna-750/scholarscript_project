import React from "react";
import "./Blog.css";

const blogPosts = [
    {
        title: "How to Write an Effective Literature Review",
        excerpt: "Learn the step-by-step process to structure, analyze, and present a comprehensive literature review for your thesis or research project.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1oJ1WAQOZBWKvOHpC_G-21-KKbbxgwqH9PQ&s",
    },
    {
        title: "Selecting the Right Research Methodology",
        excerpt: "Understand the differences between qualitative and quantitative methods and choose the best methodology for your study.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-nyaf01n7dL0ZnFrZxY9XoSNMiKFwru1ANw&s",
    },
    {
        title: "Tips for Thesis Editing and Proofreading",
        excerpt: "Ensure clarity, coherence, and academic formatting in your thesis with expert editing tips.",
        imageUrl: "https://blog.researcher.life/wp-content/uploads/2022/01/pexels-startup-stock-photos-212286.jpg",
    },
];

export default function Blog() {
    return (
        <section className="container blog-page" data-aos="fade-up">
            <h1>Blog</h1>
            <div className="blog-grid">
                {blogPosts.map((post, index) => (
                    <article className="post-card" key={index}>
                        <div className="post-image">
                            <img src={post.imageUrl} alt={post.title} />
                        </div>
                        <div className="post-content">
                            <h3>{post.title}</h3>
                            <p>{post.excerpt}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
