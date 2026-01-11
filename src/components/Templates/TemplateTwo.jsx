export default function TemplateTwo({ resume }) {
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
    <div className="preview-card" style={{ borderTop: "4px solid #2563eb" }}>
      {/* HEADER */}
      <header
        style={{
          background: "#2563eb",
          color: "#fff",
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ margin: 0 }}>
          {basicInfo.name || "Your Name"}
        </h1>
        <p style={{ fontSize: "13px" }}>
          {basicInfo.email}
          {basicInfo.phone && " • "}
          {basicInfo.phone}
          {basicInfo.address && " • "}
          {basicInfo.address}
        </p>
      </header>

      {/* PROFILE */}
      {summary && (
        <section>
          <h2 className="section-title">Profile</h2>
          <p>{summary}</p>
        </section>
      )}

      {/* EDUCATION */}
      <section>
        <h2 className="section-title">Education</h2>

        <p>
          <strong>{education.degree}</strong> – {education.college}
          <br />
          {education.year}
        </p>

        <p>
          <strong>Intermediate</strong> – {intermediate.college}
          <br />
          {intermediate.year}
        </p>

        <p>
          <strong>10th Class</strong> – {tenth.school}
          <br />
          {tenth.year}
        </p>
      </section>

      {/* EXPERIENCE */}
      {(experience.role || experience.company) && (
        <section>
          <h2 className="section-title">Experience</h2>
          <p>
            <strong>{experience.role}</strong> @ {experience.company}
            <br />
            <em>{experience.duration}</em>
          </p>
          <p>{experience.description}</p>
        </section>
      )}

      {/* VOLUNTEER */}
      {(volunteer.role || volunteer.organization) && (
        <section>
          <h2 className="section-title">Volunteer</h2>
          <p>
            <strong>{volunteer.role}</strong> – {volunteer.organization}
            <br />
            <em>{volunteer.duration}</em>
          </p>
          <p>{volunteer.description}</p>
        </section>
      )}

      {/* SKILLS */}
      {skillsList.length > 0 && (
        <section>
          <h2 className="section-title">Skills</h2>
          <ul style={{ columns: 2 }}>
            {skillsList.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </section>
      )}

      {/* LANGUAGES */}
      {languages && (
        <section>
          <h2 className="section-title">Languages</h2>
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
            <strong>{project.title}</strong>
            {project.techStack && ` (${project.techStack})`}
          </p>
          <p>{project.description}</p>
        </section>
      )}
    </div>
  );
}

