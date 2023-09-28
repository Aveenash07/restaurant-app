import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { MdRestaurantMenu } from 'react-icons/md';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  &:hover{
    text-shadow: 2px 2px 8px #ffc500;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: white;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
  &:hover{
    color: yellow;
  }
`;

export const Bars = styled(MdRestaurantMenu)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
