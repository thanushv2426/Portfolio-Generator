import TemplateOne from "../Templates/TemplateOne";
import TemplateTwo from "../Templates/TemplateTwo";

const templates = {
  template1: TemplateOne,
  template2: TemplateTwo,
};

export default function ResumePreview({ resume, selectedTemplate }) {
  const TemplateComponent = templates[selectedTemplate] || TemplateOne;
  return <TemplateComponent resume={resume} />;
}



