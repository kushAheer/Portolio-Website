// Experience.jsx
import { useEffect, useRef } from "react";
import styles from "./ExperienceComponent.module.css";

const experiences = [
  {
    year: "Jul 2025 — Aug 2025",
    role: "Full Stack Developer Intern",
    company: "Deligence Technologies Inc",
    companyUrl: "#",
    description:
      "Completed hands-on training in AI workflow automation and system integration. Built a voice automation system using VAPI, integrating APIs and webhook-based triggers to automate task execution.",
    tags: ["VAPI", "AI Automation", "Webhooks", "REST APIs"],
  },
  {
    year: "2024 — Present",
    role: "Web Development Lead",
    company: "BYTE — College Society",
    description:
      "Led the Web Development team, overseeing project planning and execution. Managed and mentored team members in frontend and backend development. Coordinated development of websites and event portals for society initiatives.",
    tags: ["Team Lead", "Frontend", "Backend", "Mentorship"],
  },
];
export default function Experience() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = itemRefs.current.map((el, i) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Staggered delay per item
            setTimeout(() => {
              el.classList.add(styles.visible);
            }, i * 120);
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        WORK &amp;
        <span className={styles.headingAccent}>EXPERIENCE</span>
      </h2>

      <div className={styles.timeline}>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={styles.item}
            ref={(el) => (itemRefs.current[i] = el)}
          >
            <span className={styles.dot} />
            <p className={styles.year}>{exp.year}</p>
            <h3 className={styles.role}>{exp.role}</h3>
            <p className={styles.company}>
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  className={styles.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
            </p>
            <div className={styles.divider} />
            <p className={styles.description}>{exp.description}</p>
            <div className={styles.tags}>
              {exp.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}