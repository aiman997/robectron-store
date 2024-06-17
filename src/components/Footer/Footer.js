import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo/LOGO-Black.png';

const FooterWrapper = styled.footer`
  background-color: #f8f8f8;
  padding: 40px 20px;
  margin-top: 50px;
`;

const FooterContainer = styled.div`
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Section = styled.div`
  flex: 1;
  padding: 0 20px;
  max-width: 200px;

  &:first-child {
    text-align: left;
  }
  
  &:last-child {
    text-align: right;
  }
`;

const NewsletterSection = styled.div`
  flex: 1;
  padding: 0 20px;
  max-width: 200px;
  text-align: left;
`;

const Title = styled.h3`
  font-size: 16px;
  color: #000;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 14px;
  color: #333;
`;

const NewsletterForm = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px 0 0 20px;
  flex: 1;
`;

const Button = styled.button`
  padding: 10px;
  background-color: orange;
  border: none;
  border-radius: 0 20px 20px 0;
  color: #fff;
  cursor: pointer;
`;

const SocialIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const SocialIcon = styled.a`
  margin: 0 10px;
  color: #333;
  font-size: 20px;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 20px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Section>
          <Logo src={LogoImage} alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel fringilla enim.
            Cras eget tellus vestibulum, varius diam eu, tempus odio.
          </p>
          <SocialIcons>
            <SocialIcon href="#"><i className="fab fa-facebook-f"></i></SocialIcon>
            <SocialIcon href="#"><i className="fab fa-instagram"></i></SocialIcon>
            <SocialIcon href="#"><i className="fab fa-youtube"></i></SocialIcon>
          </SocialIcons>
        </Section>
        <Section>
          <Title>Page</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Products</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>Contact Us</ListItem>
          </List>
        </Section>
        <Section>
          <Title>Info</Title>
          <List>
            <ListItem>Shipping Policy</ListItem>
            <ListItem>Return & Refund</ListItem>
            <ListItem>Support</ListItem>
          </List>
        </Section>
        <Section>
          <Title>FAQ</Title>
          <List>
            <ListItem>Account</ListItem>
            <ListItem>Manage Deliveries</ListItem>
            <ListItem>Orders</ListItem>
            <ListItem>Payments</ListItem>
          </List>
        </Section>
        <NewsletterSection>
          <Title>Join News Letter</Title>
          <p>Subscribe our newsletter to get more deals, new products and promotions</p>
          <NewsletterForm>
            <Input type="email" placeholder="Enter your email" />
            <Button type="submit">→</Button>
          </NewsletterForm>
        </NewsletterSection>
      </FooterContainer>
      <div style={{ textAlign: 'center', marginTop: '20px', color: '#777' }}>
        <p>Copyright © 2024 ROBECTRON. All rights reserved</p>
        <p>
          <Link to="/privacy-policy" style={{ color: '#777', textDecoration: 'none', marginRight: '10px' }}>Privacy Policy</Link>
          <Link to="/terms-and-conditions" style={{ color: '#777', textDecoration: 'none' }}>Terms & Conditions</Link>
        </p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
