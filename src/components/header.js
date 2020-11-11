import PropTypes from "prop-types"
import React from "react"
import LanguageMenu from "./languageMenu"
import styled from "styled-components"


const StyledHeader = styled.header`
  background: rebeccapurple;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    {siteTitle}
    <LanguageMenu style={{position: 'absolute', right: '30px'}}></LanguageMenu>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Kopacze - Diggers`,
}

export default Header
