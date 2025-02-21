import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const List = styled.ul`
  padding: 32px 0 0 24px;
  display: grid;
  gap: 8px 115px;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 12px 0 0 19px;
    gap: 8px;
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.li`
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  color: ${({ theme }) => theme.site.textSecondary};

  &::marker {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    line-height: 16.94px;

    &::marker {
      font-size: 18px;
    }
  }
`;
