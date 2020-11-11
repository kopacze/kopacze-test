import React, { useState } from "react"
import styled from "styled-components"

const StyledHamburgerNav = styled.nav`
  width: 300px;
  height: 100vh;
  position: fixed;
  background: #e86856;
  transform: ${({ showNav }) =>
    showNav ? "translateX(0px)" : "translateX(-300px)"};
  transition: transform 250ms ease-in-out;
`

const StyledHamburger = styled.button`
  position: absolute;
  top: 5px;
  left: 5px;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  z-index: 999;
  transform: ${({hamburger}) => hamburger ? "translate(0,0)" : "translate(20px, 20px)"};
  transition: transform 250ms ease-in-out;
`

const HamburgerBox = styled.span`
  width: 24px;
  height: 20px;
  display: inline-block;
  position: relative;
`

const HamburgerInner = styled.span`
  width: 100%;
  height: 3px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({hamburger}) => hamburger ? 'transparent': '#333'};
  transition: background-color 100ms ease-in-out;
  &::after {
      content: '';
      left: 0;
      height: 3px;
      width: 100%;
      position: absolute;
      background-color: #333;
      top: 8px;
      transform: ${({hamburger}) => hamburger ? 'translateY(-8px) rotate(-135deg)' : 'translateY(0) rotate(0)'};
      transition: transform 250ms ease-in-out;
  }

  &::before {
      content: '';
      left: 0;
      height: 3px;
      width: 100%;
      position: absolute;
      background-color: #333;
      top: -8px;
      transform: ${({hamburger}) => hamburger ? 'translateY(8px) rotate(135deg)' : 'translateY(0) rotate(0)'};
      transition: transform 250ms ease-in-out;
  }
`

const HamburgerNav = () => {
  const [menu, showMenu] = useState(false)
  return (
    <>
      <StyledHamburgerNav showNav={menu} />
      <StyledHamburger hamburger={menu} onClick={() => showMenu(!menu)}>
        <HamburgerBox>
          <HamburgerInner hamburger={menu} />
        </HamburgerBox>
      </StyledHamburger>
    </>
  )
}

export default HamburgerNav
