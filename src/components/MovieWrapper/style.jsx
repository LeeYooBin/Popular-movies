import styled from 'styled-components';

export const Title = styled.h5`
    width: 70%;
    font-size: 0.8rem;
    
`;

export const Movie = styled.div`
    margin: 2.5vh 0 2.5vh 0;
    padding: 3%;
    min-width: 100%;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #262446;
    box-shadow: 32.8387px 24.5482px 79px 
                rgba(0, 0, 0, 0.15), 23.8851px 17.855px 53.2479px 
                rgba(0, 0, 0, 0.121406), 16.6246px 12.4276px 34.4391px 
                rgba(0, 0, 0, 0.10125), 10.9035px 8.15079px 21.3701px 
                rgba(0, 0, 0, 0.0867188), 6.56775px 4.90965px 12.8375px 
                rgba(0, 0, 0, 0.075), 3.46346px 2.58907px 7.6377px 
                rgba(0, 0, 0, 0.0632813), 1.4367px 1.07399px 4.56719px 
                rgba(0, 0, 0, 0.04875), 0.333519px 0.249318px 2.42246px 
                rgba(0, 0, 0, 0.0285938);

    &:hover{
        transform: scale(1.05);
    }

    @media (max-width: 940px){
        justify-content: space-evenly;
        width: 50%;
        align-self: center;
    }
`;

export const MoviePoster = styled.img`
    min-width: 7vw;
    height: 14vh;
    border-radius: 50%;
    background-color: yellow;

    @media (max-width: 940px){
        min-width: 18vw;
        max-height: 12vh;
    }

    @media (max-width: 700px){
        min-width: 15vw;
        max-height: 10vh;
    }

    @media (max-width: 500px){
        min-width: 20vw;
        max-height: 10vh;
    }
`;

export const MovieInfos = styled.div`
    height: 35%;
    min-width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width: 900px){
        width: 30%;
    }

    @media (max-width: 780px){
        width: 40%;
    }

    @media (max-width: 600px){
        width: 60%;
        height: 20%;
    }

    @media (max-width: 400px){
        width: 70%;
        margin-left: 5vw;
    }

`;

export const MovieStats = styled.div`
    margin-top: 1vh;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1150px){
        font-size: 0.8em;  
    }

    @media (max-width: 800px){
        width: 100%
        margin-top: 0;
    }
`;

export const Button =  styled.div`
    border:none;
    background: transparent;
    outline:none;
    color: #FFF;
    font-size: 1.2em;
`;

export const Span = styled.span`
    border:none;
    background: transparent;
    outline:none;
    color: #FFF;
    font-size: 1.2em;
`;

export const Resume = styled.p`
    width: 55%;
    text-align: justify;
    font-size: 0.9rem;

    @media (max-width: 1230px){
        width 60%;
    }

    @media (max-width: 940px){
        display: none;
    }
`;

export const starStyle = {
    color: 'yellow',
    'font-size': '0.85em'
};
