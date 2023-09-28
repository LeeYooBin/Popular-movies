import React from "react";
import * as S from "./style"
import { ImSearch } from 'react-icons/im';

const Search = ({ value, onChange = () => null }) => (
  <S.Content>
    <S.Input 
      type="search"
      placeholder="Enter a movie to search"
      value={value}
      onChange={onChange}
    />
    <S.Icon>
      <ImSearch />
    </S.Icon>
  </S.Content>
);

export default Search;
