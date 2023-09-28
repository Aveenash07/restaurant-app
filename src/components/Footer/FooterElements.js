import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer `
  background-color: #0d0909;
`;

export const FooterWrap = styled.div `
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section `
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)
`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;

  &:hover{
    text-shadow: 2px 2px 8px #ffc500;
    transition: 0.3s ease-out;    
  }
`;

export const SocialIcons = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  
  // &:hover{
  //   box-shadow: 2px 2px 8px #ffc500;
  //   shadow: 2px 2px 8px #ffc500;
  //   padding: 0.5rem;
  //   transition: 0.3s ease-out;
  //   border-radius: 10px;
  // }
`;

export const SocialIconLink = styled.a `
  color: #fff;
  font-size: 24px;
  &:hover{
    box-shadow: 2px 2px 8px #ffc500;
    shadow: 2px 2px 8px #ffc500;
    padding: 0.5rem;
    transition: 0.3s ease-out;
    border-radius: 10px;
    align-items: center;
    align-content: center;
  }
`;

/* export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
*/