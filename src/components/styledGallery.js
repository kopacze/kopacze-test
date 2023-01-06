import styled from "styled-components"
import { PRIMARY } from "../common/colors"

const StyledGallery = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;

  img {
    width: 80%;
    max-height: 80vh;
    margin: 30px 0;
    border: 3px solid ${PRIMARY};
  }
`

export default StyledGallery
