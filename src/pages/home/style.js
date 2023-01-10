import styled from "styled-components";

export const ContainerImageBackground = styled.div`
    width: 100%;
    height: 500px;
`

export const ContainerImage = styled.div`
    width: 100%;
    height: 500px;
    background: linear-gradient(90deg, rgba(0,0,0,1) 52%, rgba(89,27,129,0) 100%);
`

export const Container = styled.main`
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height:100%;
`


export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 1000;
    font-size: 52px;
    max-width: 520px;
    margin-bottom: 25px;
    line-height: 60px;
    color: #FFFFFF;
`


export const TitleHighlight = styled.span`
    h1{
        height:100px;
        font-size:55px;
        background-image: linear-gradient(90deg, rgba(158,69,200,1) 52%, rgba(187,44,146,1) 100%);
        background-clip: text;
        -webkit-background-clip: text; 
        -webkit-text-fill-color: transparent; 
        position:absolute;
        animation: 
            efeitoTransicao 6s
            infinite ease-in-out;
    }

    h1:nth-child(1){
        opacity:0;
        animation-delay: 1.5s;
    }
    h1:nth-child(2){
        opacity:0;
        animation-delay: 3s;
    }
    h1:nth-child(3){
        opacity:0;
        animation-delay: 4.5s;
    }
    h1:nth-child(4){
        opacity:0;
        animation-delay: 6s;
    }

    
    @keyframes efeitoTransicao{
        0%,15%{
            opacity:0;
            transform: translate(0%,-50%);
        }
        20%,35% {
            opacity:1;
            transform: translate(0%,0%);
        }
        38%, 100%{
            opacity:0;

        }
    }
`

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    max-width: 650px;
    margin-bottom: 25px;
    color: #FFFFFF;
`