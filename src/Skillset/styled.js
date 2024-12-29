import styled from "styled-components";

export const SkillsetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SkillsetUl = styled.ul`
  padding: 32px 0 0 24px;
  display: grid;
  column-gap: 115px;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  margin: 0;
`;

export const SkillsetStyledLi = styled.li`
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  color: ${({ theme }) => theme.color.slateGrey};

  &::marker {
    color: ${({ theme }) => theme.color.scienceBlue};
    font-size: 24px;
  }
`;
