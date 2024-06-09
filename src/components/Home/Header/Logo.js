import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-top: 0px;
  padding: 10px 0px 8px 0px;
`;

const LogoImage = styled.img`
  width: 95px;
  height: auto;
`;

const Logo = ({ logoSrc }) => {
  return (
    <LogoContainer>
      <LogoImage src={logoSrc} />
    </LogoContainer>
  );
};

export default Logo;
