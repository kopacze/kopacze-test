import styled from "styled-components"

const StyledBackgroundImage = styled.div`
  position: absolute;
  background-image: url(${({ background }) => background});
  background-size: cover;
  opacity: 0.5;
  height: 100%;
  width: 100%;
  z-index: -1;
`

export default StyledBackgroundImage
