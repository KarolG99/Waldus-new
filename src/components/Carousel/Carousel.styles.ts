import styled from "styled-components";

export const CarouselWrapper = styled.article`
  margin-top: 160px;

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 300px;
  }
`;
