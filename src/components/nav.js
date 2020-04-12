import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavUl = styled.ul`
  list-style-type: none;
`;

const NavLi = styled.li`
  display: inline;
`;

const StyledLink = styled(Link)`
  display: inline;
  padding: 8px;
  background-color: lightcyan;
`;

const Nav = () => {
  return (
    <NavUl>
      <NavLi>
        <StyledLink to='/'>Blog</StyledLink>
      </NavLi>
      <NavLi>
        <StyledLink to='/recipes'>Recipes</StyledLink>
      </NavLi>
    </NavUl>
  );
};

export default Nav;
