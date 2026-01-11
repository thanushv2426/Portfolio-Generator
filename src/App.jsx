import { useState, useRef } from "react";
import ResumeForm from "./components/Form/ResumeForm";
import ResumePreview from "./components/Preview/ResumePreview";

export default function App() {
  const [showBuilder, setShowBuilder] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  const [resumeData, setResumeData] = useState({
    basicInfo: { name: "", email: "", phone: "", address: "" },
    summary: "",
    education: { degree: "", college: "", year: "" },
    intermediate: { board: "", college: "", year: "", percentage: "" },
    tenth: { board: "", school: "", year: "", percentage: "" },
    experience: { role: "", company: "", duration: "", description: "" },
    volunteer: { role: "", organization: "", duration: "", description: "" },
    certifications: "",
    skills: "",
    languages: "",
    project: { title: "", description: "", techStack: "" },
  });

  const fileInputRef = useRef(null);

  const handleUploadClick = () => fileInputRef.current?.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) console.log("Uploaded resume:", file);
  };

  const handlePrint = () => window.print();

  /* ---------------- LANDING PAGE ---------------- */
  if (!showBuilder) {
    return (
      <div className="app-root">
        <div className="landing">
          <div className="landing-left">
            <h1 className="landing-title">
              Build Your <span className="highlight-text">Resume</span>
            </h1>

            <p className="landing-subtitle">
              Create a clean, professional resume in minutes. Choose how you
              want to start and export it as a PDF.
            </p>

            <div className="landing-options">
              <div className="option-card" onClick={() => setShowBuilder(true)}>
                <h2>Build Manually</h2>
                <p>
                  Enter your details step by step and design your resume from
                  scratch.
                </p>
                <button className="btn-primary">Start Building</button>
              </div>

              <div className="option-card" onClick={handleUploadClick}>
                <h2>Upload Resume</h2>
                <p>
                  Upload an existing resume and optimize it using modern
                  templates.
                </p>
                <button className="btn-secondary">Upload File</button>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  hidden
                />
              </div>
            </div>
          </div>

          {/* Demo resumes */}
          <div className="landing-right">
            <div className="demo-resumes">
              <div className="demo-card demo-main">
                <div className="demo-header" />
                <div className="demo-line" />
                <div className="demo-line short" />
                <div className="demo-blocks">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="demo-card demo-left">
                <div className="demo-header" />
                <div className="demo-line" />
              </div>

              <div className="demo-card demo-right">
                <div className="demo-header" />
                <div className="demo-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- BUILDER ---------------- */
  return (
    <div className="app-root">
      <div className="builder">
        <div className="builder-left panel">
          <h1 className="builder-title">Candidate Details</h1>
          <p className="builder-subtitle">
            Enter your details and select a template by clicking its preview.
          </p>

          {/* Template selection */}
          <div className="template-demo-picker">
            <h3 className="template-picker-title">
              Choose a Resume Template
            </h3>

            <div className="template-demo-grid">
              {[
                { id: "template1", name: "Classic", cls: "classic-preview" },
                { id: "template2", name: "Modern", cls: "modern-preview" },
              ].map((tpl) => (
                <div
                  key={tpl.id}
                  className={`template-demo-card ${
                    selectedTemplate === tpl.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedTemplate(tpl.id)}
                >
                  <div className={`demo-preview ${tpl.cls}`}>
                    <div className="demo-header" />
                    <div className="demo-line" />
                    <div className="demo-line short" />
                    <div className="demo-blocks">
                      <span />
                      <span />
                    </div>
                  </div>
                  <span className="template-name">{tpl.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="form-section">
            <ResumeForm
              resumeData={resumeData}
              setResumeData={setResumeData}
            />
          </div>
        </div>

        <div className="builder-right panel">
          <div className="builder-right-header">
            <h2 className="preview-title">Live Preview</h2>
            <button className="btn-secondary" onClick={handlePrint}>
              Generate PDF
            </button>
          </div>

          <div className="preview-area print-area">
            <ResumePreview
              resume={resumeData}
              selectedTemplate={selectedTemplate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

