import styled from "styled-components"

const StyledActionButton = styled.a`
  border-radius: 12px;
  border: 2px solid black;
  padding: 10px 20px;
  background: #dd4da4;
  color: white;
  text-decoration: none;
  font-size: 40px;
  box-shadow: 2px 2px lightslategrey;

  &:hover, &:focus {
    color: #dd4da4;
    background: white;
  }
`

export default StyledActionButton;
