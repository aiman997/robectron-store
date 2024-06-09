import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow-down.svg';
import countries from '../../../data/countries.json';
import languages from '../../../data/languages.json';
import currencies from '../../../data/currencies.json';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Display = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Flag = styled.img`
  width: 24px;
  height: 24px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LanguageText = styled.span`
  font-size: 12px;
  color: ${props => props.theme.headerText};
`;

const CurrencyText = styled.span`
  font-size: 12px;
  color: ${props => props.theme.headerText};
`;

const Dropdown = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 40px;
  right: 0;
  width: 200px;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 10px;
  border-radius: 8px;
`;

const DropdownItem = styled.div`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  select {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;

const SaveButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

const flags = importAll(require.context('../../../assets/flags', false, /\.(png|jpe?g|svg)$/));

const CountryLanguageCurrency = () => {
  const defaultCountry = countries[0].country;
  const defaultCurrency = currencies[0].currency;
  const defaultLanguage = languages[0].language;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [language, setLanguage] = useState(defaultLanguage);
  const [currency, setCurrency] = useState(defaultCurrency);

  useEffect(() => {
    setSelectedCountry(defaultCountry);
    setCurrency(defaultCurrency);
  }, [defaultCountry, defaultCurrency]);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSave = () => setIsOpen(false);

  const handleCountryChange = (e) => {
    const country = countries.find(c => c.country === e.target.value);
    setSelectedCountry(country.country);
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = languages.find(lang => lang.language === e.target.value);
    setLanguage(selectedLanguage.language);
  };

  const handleCurrencyChange = (e) => {
    const selectedCurrency = currencies.find(cur => cur.currency === e.target.value);
    setCurrency(selectedCurrency.currency);
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Wrapper onClick={handleToggle}>
      <Display>
        <Flag src={flags[`${selectedCountry.replace(/ /g, '-').toLowerCase()}.svg`]} alt="Flag" />
        <TextContainer>
          <LanguageText>{language.substring(0, 2).toUpperCase()}/</LanguageText>
          <CurrencyText>{currency}</CurrencyText>
        </TextContainer>
        <ArrowIcon style={{ width: '12px', height: '12px' }} /> 
      </Display>
      <Dropdown isOpen={isOpen} onClick={handleDropdownClick}>
        <DropdownItem>
          <label>Ship to</label>
          <select value={selectedCountry} onChange={handleCountryChange}>
            {countries.map(country => (
              <option key={country.country} value={country.country}>
                {country.country}
              </option>
            ))}
          </select>
        </DropdownItem>
        <DropdownItem>
          <label>Language</label>
          <select value={language} onChange={handleLanguageChange}>
            {languages.map(lang => (
              <option key={lang.code} value={lang.language}>
                {lang.language}
              </option>
            ))}
          </select>
        </DropdownItem>
        <DropdownItem>
          <label>Currency</label>
          <select value={currency} onChange={handleCurrencyChange}>
            {currencies.map(cur => (
              <option key={cur.currency} value={cur.currency}>
                {cur.currency} ({cur.name})
              </option>
            ))}
          </select>
        </DropdownItem>
        <SaveButton onClick={handleSave}>Save</SaveButton>
      </Dropdown>
    </Wrapper>
  );
};

export default CountryLanguageCurrency;