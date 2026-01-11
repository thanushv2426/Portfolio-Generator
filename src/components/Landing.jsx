
export default function Landing({
  selectedTemplate,
  setSelectedTemplate,
  onStart,
}) {
  return (
    <div className="app-root">
      <div className="landing">
        <div className="landing-left">
            <h1 className="landing-title">
  Build Your <span className="highlight-text">Resume</span>
</h1>

          {/* <h1 className="landing-title">Build your resume</h1> */}
          <p className="landing-subtitle">
            Build a clean, professional resume in a few minutes.
          </p>

          <div className="landing-actions">
            <button
              type="button"
              className="btn-primary"
              onClick={onStart}
            >
              Create your resume
            </button>

            <div className="landing-template-select">
              <label>Choose your template</label>
              <select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
              >
                <option value="template1">Classic</option>
                <option value="template2">Modern</option>
              </select>
            </div>
          </div>
        </div>

        <div className="landing-right" onClick={onStart}>
          <div className="mini-template main-card">
            <div className="mini-header" />
            <div className="mini-line" />
            <div className="mini-line short" />
            <div className="mini-grid">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="mini-template side-card left-card">
            <div className="mini-header" />
            <div className="mini-line" />
          </div>

          <div className="mini-template side-card right-card">
            <div className="mini-header" />
            <div className="mini-line" />
          </div>

          <p className="landing-hint">Click to start with templates</p>
        </div>
      </div>
    </div>
  );
}
