import * as S from './Style';
import { FaSearch } from "react-icons/fa";

export default function Form({placeholder, text, onChange}){
    return(
        <S.Form>
            <S.InputLabel>
                <S.Input
                    placeholder={placeholder}
                    onChange={onChange}
                />
                <S.Button><FaSearch/></S.Button>
            </S.InputLabel>

            <S.CheckLabel>
                <S.ShowFavs 
                    type="checkbox" 
                    name="fav" 
                    value="fav"
                />
                {text}
            </S.CheckLabel>
        </S.Form>
    );
}