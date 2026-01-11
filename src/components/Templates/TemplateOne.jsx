export default function TemplateOne({ resume }) {
  const {
    basicInfo,
    summary,
    education,
    intermediate,
    tenth,
    experience,
    volunteer,
    skills,
    languages,
    certifications,
    project,
  } = resume;

  const skillsList = skills
    ? skills.split(",").map((s) => s.trim()).filter(Boolean)
    : [];

  return (
    <div className="preview-card">
      {/* HEADER */}
      <header style={{ borderBottom: "2px solid #111827", paddingBottom: "8px" }}>
        <h1 style={{ fontSize: "28px", margin: 0 }}>
          {basicInfo.name || "Your Name"}
        </h1>
        <p style={{ fontSize: "14px", color: "#4b5563" }}>
          {basicInfo.email} {basicInfo.phone && " | "} 
          {basicInfo.phone} {basicInfo.address && " | "} 
          {basicInfo.address}
        </p>
      </header>

      {/* SUMMARY */}
      {summary && (
        <section>
          <h2 className="section-title">Summary</h2>
          <p>{summary}</p>
        </section>
      )}

      {/* EDUCATION */}
      <section>
        <h2 className="section-title">Education</h2>

        <p>
          <strong>{education.degree}</strong><br />
          {education.college} {education.year && ` | ${education.year}`}
        </p>

        <p>
          <strong>Intermediate</strong><br />
          {intermediate.college} ({intermediate.board})<br />
          {intermediate.year} {intermediate.percentage && ` | ${intermediate.percentage}`}
        </p>

        <p>
          <strong>10th Class</strong><br />
          {tenth.school} ({tenth.board})<br />
          {tenth.year} {tenth.percentage && ` | ${tenth.percentage}`}
        </p>
      </section>

      {/* WORK EXPERIENCE */}
      {(experience.role || experience.company) && (
        <section>
          <h2 className="section-title">Work Experience</h2>
          <p>
            <strong>{experience.role}</strong> – {experience.company}<br />
            <em>{experience.duration}</em>
          </p>
          <p>{experience.description}</p>
        </section>
      )}

      {/* VOLUNTEER */}
      {(volunteer.role || volunteer.organization) && (
        <section>
          <h2 className="section-title">Volunteer Experience</h2>
          <p>
            <strong>{volunteer.role}</strong> – {volunteer.organization}<br />
            <em>{volunteer.duration}</em>
          </p>
          <p>{volunteer.description}</p>
        </section>
      )}

      {/* SKILLS */}
      {skillsList.length > 0 && (
        <section>
          <h2 className="section-title">Skills</h2>
          <ul>
            {skillsList.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </section>
      )}

      {/* LANGUAGES */}
      {languages && (
        <section>
          <h2 className="section-title">Languages Known</h2>
          <p>{languages}</p>
        </section>
      )}

      {/* CERTIFICATIONS */}
      {certifications && (
        <section>
          <h2 className="section-title">Certifications</h2>
          <p>{certifications}</p>
        </section>
      )}

      {/* PROJECT */}
      {(project.title || project.description) && (
        <section>
          <h2 className="section-title">Project</h2>
          <p>
            <strong>{project.title}</strong><br />
            <em>{project.techStack}</em>
          </p>
          <p>{project.description}</p>
        </section>
      )}
    </div>
  );
}


