import styled from "styled-components"

const StyledBackgroundImage = styled.div`
  position: absolute;
  background-image: linear-gradient(to bottom, rgb(192, 192, 192, 0.42), rgb(227, 129, 217, 0.8)), url(${({ background }) => background});
  background-size: cover;
  opacity: 0.5;
  height: 100%;
  width: 100%;
  z-index: -1;
`

export default StyledBackgroundImage
