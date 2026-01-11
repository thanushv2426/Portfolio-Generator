export default function ResumeForm({ resumeData, setResumeData }) {
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
  } = resumeData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const section = e.target.dataset.section;

    setResumeData((prev) =>
      section
        ? { ...prev, [section]: { ...prev[section], [name]: value } }
        : { ...prev, [name]: value }
    );
  };

  return (
    <div className="form-wrapper">

      {/* BASIC INFO */}
      <div className="form-card">
        <h3>👤 Basic Information</h3>
        <input name="name" value={basicInfo.name} data-section="basicInfo" placeholder="Full Name" onChange={handleChange} />
        <input name="email" value={basicInfo.email} data-section="basicInfo" placeholder="Email" onChange={handleChange} />
        <input name="phone" value={basicInfo.phone} data-section="basicInfo" placeholder="Phone" onChange={handleChange} />
        <input name="address" value={basicInfo.address} data-section="basicInfo" placeholder="Address" onChange={handleChange} />
      </div>

      {/* SUMMARY */}
      <div className="form-card">
        <h3>📝 Professional Summary</h3>
        <textarea name="summary" value={summary} rows="3" placeholder="Brief summary about yourself" onChange={handleChange} />
      </div>

      {/* EDUCATION */}
      <div className="form-card">
        <h3>🎓 Education</h3>
        <input name="degree" value={education.degree} data-section="education" placeholder="Degree" onChange={handleChange} />
        <input name="college" value={education.college} data-section="education" placeholder="College" onChange={handleChange} />
        <input name="year" value={education.year} data-section="education" placeholder="Year" onChange={handleChange} />
      </div>

      {/* INTERMEDIATE */}
      <div className="form-card">
        <h3>🏫 Intermediate (12th)</h3>
        <input name="college" value={intermediate.college} data-section="intermediate" placeholder="College" onChange={handleChange} />
        <input name="board" value={intermediate.board} data-section="intermediate" placeholder="Board" onChange={handleChange} />
        <input name="year" value={intermediate.year} data-section="intermediate" placeholder="Year" onChange={handleChange} />
        <input name="percentage" value={intermediate.percentage} data-section="intermediate" placeholder="Percentage" onChange={handleChange} />
      </div>

      {/* 10TH */}
      <div className="form-card">
        <h3>📘 10th Class</h3>
        <input name="school" value={tenth.school} data-section="tenth" placeholder="School" onChange={handleChange} />
        <input name="board" value={tenth.board} data-section="tenth" placeholder="Board" onChange={handleChange} />
        <input name="year" value={tenth.year} data-section="tenth" placeholder="Year" onChange={handleChange} />
        <input name="percentage" value={tenth.percentage} data-section="tenth" placeholder="Percentage" onChange={handleChange} />
      </div>

      {/* EXPERIENCE */}
      <div className="form-card">
        <h3>💼 Work Experience</h3>
        <input name="role" value={experience.role} data-section="experience" placeholder="Role" onChange={handleChange} />
        <input name="company" value={experience.company} data-section="experience" placeholder="Company" onChange={handleChange} />
        <input name="duration" value={experience.duration} data-section="experience" placeholder="Duration" onChange={handleChange} />
        <textarea name="description" value={experience.description} data-section="experience" rows="3" placeholder="Responsibilities & achievements" onChange={handleChange} />
      </div>

      {/* VOLUNTEER */}
      <div className="form-card">
        <h3>🤝 Volunteer Experience</h3>
        <input name="role" value={volunteer.role} data-section="volunteer" placeholder="Role" onChange={handleChange} />
        <input name="organization" value={volunteer.organization} data-section="volunteer" placeholder="Organization" onChange={handleChange} />
        <input name="duration" value={volunteer.duration} data-section="volunteer" placeholder="Duration" onChange={handleChange} />
        <textarea name="description" value={volunteer.description} data-section="volunteer" rows="3" placeholder="Contribution & impact" onChange={handleChange} />
      </div>

      {/* SKILLS & LANGUAGES */}
      <div className="form-card">
        <h3>💡 Skills & Languages</h3>
        <textarea name="skills" value={skills} rows="2" placeholder="Skills (comma separated)" onChange={handleChange} />
        <textarea name="languages" value={languages} rows="2" placeholder="Languages Known" onChange={handleChange} />
      </div>

      {/* CERTIFICATIONS */}
      <div className="form-card">
        <h3>📜 Certifications</h3>
        <textarea name="certifications" value={certifications} rows="3" placeholder="Certification name, issuer, year" onChange={handleChange} />
      </div>

      {/* PROJECT */}
      <div className="form-card">
        <h3>🚀 Project</h3>
        <input name="title" value={project.title} data-section="project" placeholder="Project Title" onChange={handleChange} />
        <input name="techStack" value={project.techStack} data-section="project" placeholder="Tech Stack" onChange={handleChange} />
        <textarea name="description" value={project.description} data-section="project" rows="3" placeholder="Project Description" onChange={handleChange} />
      </div>

    </div>
  );
}


