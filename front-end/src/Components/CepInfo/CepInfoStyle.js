import styled from 'styled-components';

export const UnorderedList = styled.ul`
  margin-top: 25px;
  opacity: ${props => props.opacity};
  flex-direction: column;
  gap:10px;
  transition: all ease .7s;
`;