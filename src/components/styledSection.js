import styled from "styled-components"

const StyledSection = styled.section`
  position: relative;

  &:after {
    content: "";
    height: 10px;
    bottom: -5px;
    width: 100%;
    background-color: saddlebrown;
    display: block;
  }
`

export default StyledSection;
