import ResumeForm from "./Form/ResumeForm";
import ResumePreview from "./Preview/ResumePreview";

export default function Builder({
  resumeData,
  setResumeData,
  selectedTemplate,
  setSelectedTemplate,
  onPrint,
}) {
  return (
    <div className="app-root">
      <div className="builder">
        {/* Left panel */}
        <div className="builder-left panel">
          <h1 className="builder-title">Candidate Details</h1>
          <p className="builder-subtitle">
            Enter your information and preview your resume in real-time.
          </p>

          <div className="template-select">
            <label>Choose Template</label>
            <select
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
            >
              <option value="template1">Classic</option>
              <option value="template2">Modern</option>
            </select>
          </div>

          <div className="form-section">
            <ResumeForm
              resumeData={resumeData}
              setResumeData={setResumeData}
            />
          </div>
        </div>

        {/* Right panel */}
        <div className="builder-right panel">
          <div className="builder-right-header">
            <h2 className="preview-title">Live Preview</h2>
            <button
              type="button"
              className="btn-secondary"
              onClick={onPrint}
            >
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
