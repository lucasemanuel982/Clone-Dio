import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    max-width:99%;
    height:47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 auto;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right:15px;

`
    
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
    
export const Wrapper = styled.div`
    background: #151515;
    width:100%;
    height:60px;
    display: flex;
    justify-content: center;
    align-items: center;

    .image{
        width:90px;
        margin-left:10px;
    }
`

export const BuscarInputContainer = styled.div`
    font-family: 'Open Sans';
    background: #2D2D37;
    max-width:175px;
    max-height:30px;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;
    border:none;
    display:flex;
    align-items:center;
    input:focus{outline: none;}
    
`

    
export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size:16px;
    line-height: 25px;
    margin: 12px;
    text-decoration: none;    
    color: #FFFFFF;
    font-weight:bold;

    &:hover{
        color: #E4105D;
    }
`

export const MenuRight2 = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size:13px;
    line-height: 25px;
    margin: 12px;
    text-decoration: none;    
    color: #FFFFFF;
    font-weight:800;
    &:hover{
        color: #E4105D;
    }
`

export const UserPicture = styled.img`
    max-width:32px;
    border-radius:22px;
    border: 2px solid #FFFFFF;
    margin-right:15px;
`

export const Input = styled.input`
    background: transparent;
    flex:1;
    border: 0;
    color:#FFFFFF;
`

export const ButtonGlobal = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:80px;
    font-family: 'Open Sans';
    height:30px;
    background: #d6db06;
    color: #000;
    font-size:12px;
    border-radius:5px;
    cursor:pointer;
    font-weight:1000;

    &:hover{
        color:#FFF;
    }

`