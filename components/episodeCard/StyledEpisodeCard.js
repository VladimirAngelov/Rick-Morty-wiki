import styled from 'styled-components'

export const EpisodeCardElement = styled.div`
  cursor: pointer;
  //width: 80vw;
  width: 80vw;
  height: 7vh;
  background: #eaeaea;
  margin: 0 10vw 1vh 10vw;
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
    margin: -0.5vh 0 0 2vw;
  }

  #characters-count {
    float: right;
    margin: -0.5vh 2vw 0 0;

  }

  //.title {
  //  padding-top: 1vh;
  //  font-weight: 600;
  //}
  //
  //p .air-date {
  //  float: left;
  //  margin: 0 0 0 2vw;
  //}
`
//
// export const EpisodeElement = styled.p`
//   padding-top: 1vh;
//   font-weight: 600;
// `
// export const AirDateElement = styled.p`
//   float: left;
//   margin: 0 0 0 2vw;
