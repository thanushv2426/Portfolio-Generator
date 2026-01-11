
import styled from 'styled-components';
const BuilderGrid = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr; /* Fixed width sidebar, flexible preview area */
  height: 100vh;
  background-color: #f8f8f8; /* Light gray background */
`;

const Sidebar = styled.div`
  background-color: white;
  padding: 20px;
  overflow-y: auto; /* Scrollable sidebar for long forms */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const PreviewArea = styled.div`
  padding: 40px;
  overflow-y: auto; /* Scrollable preview area */
  display: flex;
  justify-content: center; /* Center the resume preview */
`;
const BuilderLayout = ({ sidebarContent, previewContent }) => {
  return (
    <BuilderGrid>
      <Sidebar>{sidebarContent}</Sidebar>
      <PreviewArea>{previewContent}</PreviewArea>
    </BuilderGrid>
  );
};

export default BuilderLayout;