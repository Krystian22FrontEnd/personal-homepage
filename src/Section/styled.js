import styled from "styled-components";

export const SectionWrapper = styled.section`
  margin-bottom: 72px;
  padding: 32px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.darkHeather};
`;

export const SectionHeader = styled.h2`
  font-size: 30px;
  font-weight: 900;
  line-height: 36.31px;
  margin: 0;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.color.darkIron};
  display: flex;
  gap: 16px;
  align-items: center;
`;

