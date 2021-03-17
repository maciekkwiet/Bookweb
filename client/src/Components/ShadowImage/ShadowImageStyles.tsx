import styled from 'styled-components';

export const ShadowImageComponent = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 5%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
