import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    
    @media(max-width:700px){
        flex-direction: column;
        
    }
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    width: 36.7vw;
    line-height: 44px;
    color: #FFFFFF;

    @media(max-width:700px){
        width:85vw;
        font-size: 25px;
        margin-bottom:20px;
    }
`

export const Wrapper = styled.div`
    max-width: 400px;


`
export const Column1 = styled.div`
    flex:2;
    @media(max-width:700px){
        margin-bottom:40px;
    }
`

export const Column2 = styled.div`
    flex:1;
    @media(max-width:700px){
        margin-bottom:20px;
    }
`
export const Row = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-top:40px;
    max-width:90%;
`
export const Traco = styled.div`
    width:100px;
    min-heigth:10px;
    background: rgb(125,66,163);
    background: linear-gradient(90deg, rgba(125,66,163,0.9500175070028011) 56%, rgba(89,27,129,1) 100%);
    color:#7D42A3;
    font-size:6px;
    border-radius:15px;
    margin-bottom:20px;
`

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    width: 420px;
    margin-bottom: 20px;
    color: #FFFFFF;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;

`

export const SubTitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const RecoveryPassword = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    cursor:pointer;
    color: #E5E044;
`

export const CreateAccount = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    cursor:pointer;
    color: #E23DD7;
`
