import React from 'react'
import { HeaderContainer } from './styles'
import logoIgnite from './../../assets/img/logo-ignite.svg'
import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

export default Header
