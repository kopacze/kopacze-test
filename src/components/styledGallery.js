import styled from "styled-components"
import { PRIMARY } from "../common/colors"

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 60px 0;

  img {
    width: 80%;
    max-height: 80vh;
    border: 3px solid ${PRIMARY};
    border-radius: 5px;
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    display: flex;
    align-items: center;

    img {
      margin: 10px 0;
    }
  }
`

export default StyledGallery
