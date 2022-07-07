import * as S from './style';
import { FaStar } from 'react-icons/fa';

export default function MovieWrapper({img, alt, title, note, onClick, icon, resume}){

    return(
        <S.Movie>
            <S.MoviePoster src={img} alt={alt}/>
            <S.MovieInfos>
                <S.Title>{title}</S.Title>
                <S.MovieStats>
                    <S.Span>
                        <FaStar style={S.starStyle}/> {note}
                    </S.Span>
                    
                    <S.Button 
                        onClick={onClick}>
                        {icon} Favorite
                    </S.Button>
                </S.MovieStats>
            </S.MovieInfos>
            <S.Resume>{resume}</S.Resume>
        </S.Movie>
    );
}