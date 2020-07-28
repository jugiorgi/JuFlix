import styled from 'styled-components';

export const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 14px;
  }
  .slick-next {
    right: 20px;
  }

`;

export const SliderItem = styled.li`
  margin-right: 16px;
  outline: none;

  img {
    margin: 16px;
    width: 320px;
    height: 200px;
    object-fit: cover;
  }
`;
