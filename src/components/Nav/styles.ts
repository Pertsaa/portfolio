import styled from 'styled-components';

export const StyledNav = styled.nav`
  padding: 1em 0;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

export const NavLink = styled.button`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  margin-left: 1em;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }
`;
