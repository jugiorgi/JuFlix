import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 1;
  margin-bottom: 14px;
  display: inline-block;
  padding: 20px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 200px;
  margin-left: 5%;
  margin-bottom: 16px;
`;
