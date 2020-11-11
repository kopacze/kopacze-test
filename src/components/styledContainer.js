import styled from "styled-components"


const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  height: calc(100vh - 150px);
  align-items: center;
  justify-content: center;
  opacity: 1;

  h1,
  h2 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  p {
    padding: 20px 0;
    text-align: justify;
    font-size: 1.3rem;
  }
`

export default StyledContainer;