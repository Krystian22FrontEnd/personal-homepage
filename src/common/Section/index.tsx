import { ReactNode } from "react";
import { SectionWrapper, SectionHeader } from "./styled";

interface SectionProps {
  title: ReactNode;
  body: ReactNode;
}

const Section = ({ title, body }: SectionProps) => {
  return (
    <SectionWrapper>
      <SectionHeader>{title}</SectionHeader>
      {body}
    </SectionWrapper>
  );
};

export default Section;
