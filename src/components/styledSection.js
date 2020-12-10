import styled from "styled-components"
import { SECONDARY } from "../common/colors";

const StyledSection = styled.section`
  position: relative;

  &:after {
    content: "";
    height: 10px;
    bottom: -5px;
    width: 100%;
    background-color: ${SECONDARY};
    display: block;
  }
`

export default StyledSection;
