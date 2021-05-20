import styled from "styled-components";

export const CharacterCardDiv = styled.div`
  display: inline-block;
  margin: 2vh 1.5vw;
  background: ${props => props.theme.charBackground};
  border-radius: 10px;
  cursor: pointer;
  
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
    transform: scale(1.08);
  }

  img {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  p {
    max-width: 305px;
  }
`