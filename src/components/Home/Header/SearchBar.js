import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchContainer = styled.div`
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin: 10px 0;
    width: 100%;
    justify-content: flex-start;
  }
`;

const SearchInputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 10px 20px;
  height: 40px;
  width: 100%;
  border-radius: 15px;
  border: 1px solid #ccc;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #FF6C00;
`;

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInputContainer>
        <SearchInput type="search" placeholder="Search" />
        <SearchIcon icon={faSearch} />
      </SearchInputContainer>
    </SearchContainer>
  );
};

export default SearchBar;
