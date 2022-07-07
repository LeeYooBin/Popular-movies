import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    height: 10vh;
    justify-content: space-between;
`;

export const InputLabel = styled.label`
    position: relative;
    width: auto;
`;

export const Input = styled.input`
    padding: 3%;
    min-width: 30vw;
    max-height: 7vh;
    outline: none;
    border: none;
    border-radius: 2px;
    background: #807f91;
    opacity: 0.5;
    color: #FFF;
    font-size: 1em;

    ::-webkit-input-placeholder {
        color: #FFF;
    }

   
`;

export const Button = styled.button`
    position:absolute;
    top: 31%; 
    right: 4%;
    z-index: 10;
    border:none;
    background: transparent;
    outline:none;
    opacity: 0.5;
    color: #FFF;
    font-size: 1em;
    
    @media (max-width: 1000px){
        top: 23%;
    }
`;

export const CheckLabel = styled.label`
    margin-top: 3.5vh;
    background-color: transparent;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ShowFavs = styled.input`
    margin-right: 0.5vw;
    background: transparent;

    @media (max-width: 1000px){
        margin-right: 2vw;
    }
`;