import { SectionWrapper, SectionHeader } from "./styled";

const Section = ({ title, body }) => {
  return (
    <SectionWrapper>
      <SectionHeader>{title}</SectionHeader>
      {body}
    </SectionWrapper>
  );
};

export default Section;
