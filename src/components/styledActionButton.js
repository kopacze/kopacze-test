import styled from "styled-components"

const StyledActionButton = styled.a`
  border-radius: 20px;
  border: 2px solid black;
  padding: 10px 20px;
  background: #dc3545;
  color: white;

  &:hover, &:focus {
    color: #dc3545;
    background: white;
  }
`

export default StyledActionButton;
