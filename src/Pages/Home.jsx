const [resumeData, setResumeData] = useState({
  basicInfo: {
    name: "",
    email: "",
    phone: "",
    address: "",
    github: "",
    linkedin: "",
    portfolio: ""
  },
  summary: "",
  education: [
    {
      degree: "",
      college: "",
      year: "",
      cgpa: ""
    }
  ],
  experience: [
    {
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: ""
    }
  ],
  projects: [
    {
      title: "",
      techStack: "",
      link: "",
      description: ""
    }
  ],
  skills: {
    languages: [],
    frameworks: [],
    tools: []
  }
});
