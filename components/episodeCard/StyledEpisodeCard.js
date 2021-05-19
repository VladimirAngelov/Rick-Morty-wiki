import styled from 'styled-components'

export const EpisodeCardElement = styled.div`
  cursor: pointer;
  //width: 80vw;
  width: 86vw;
  height: 7vh;
  background: #eaeaea;
  margin: 0 7vw 1vh 7vw;
  border-radius: 10px;
  font-size: 1rem;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
    transform: scale(1.02);
  }
  
  #title {
    padding-top: 1vh;
    font-weight: 600;
  }

  #air-date {
    float: left;
    margin: -0.7vh 0 0 2vw;
  }

  #characters-count {
    float: right;
    margin: -0.7vh 2vw 0 0;

  }
`
