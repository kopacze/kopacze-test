import styled from "styled-components"
import { PRIMARY } from "../common/colors"

const StyledActionButton = styled.a`
  border-radius: 12px;
  border: 2px solid black;
  padding: 10px 20px;
  background: ${PRIMARY};
  color: white;
  text-decoration: none;
  font-size: 40px;
  box-shadow: 2px 2px lightslategrey;

  &:hover, &:focus {
    color: ${PRIMARY};
    background: white;
  }
`

export default StyledActionButton;
