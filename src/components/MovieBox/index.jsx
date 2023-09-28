import React from "react";
import * as S from "./style";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const MovieBox = ({ 
  src = '', 
  alt = '', 
  title = '', 
  rating = '0.0', 
  action, 
  description = 'lorem ipsum',
  favorite = false
}) => (
  <S.Content>
    <S.Image src={src} alt={alt}/>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.IconWrapper>
        <S.Rating><AiFillStar style={{"color": "d7a82f"}} />{rating}</S.Rating>
        <S.Favorite type="button" onClick={action}>
          {favorite ? <AiFillHeart style={{"color": "red"}}/> : <AiOutlineHeart />}
          Favoritar
        </S.Favorite>
      </S.IconWrapper>
    </S.Info>
    <S.Description>{description}</S.Description>
  </S.Content>
);

export default MovieBox;
