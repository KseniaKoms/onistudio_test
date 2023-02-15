import { themeColors } from 'global.styled';
import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 98px 160px 33px 160px;
  }

  h2 {
    font-weight: 700;
    font-size: 42px;
    line-height: 1.1;

    color: ${themeColors.white};
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.1;

    color: ${themeColors.white};
  }
`;

export const FooterBox = styled.footer`
  background-color: ${themeColors.footerBackground};
`;

export const FooterWrapper = styled.div`
  display: flex;
  gap: 210px;
`;

export const Wrapper = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const SocialIconsList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const ContactsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const Text = styled.p`
  padding-top: 46px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.1;

  color: ${themeColors.headerBackground};
`;
