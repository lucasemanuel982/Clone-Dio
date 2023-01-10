import styled, {css} from 'styled-components';


export const ButtonContainer = styled.button`
    display:flex;
    align-items: center;
    justify-content: center;
    background: #565656;
    border-radius: 22px;
    position: relative;
    line-height:20px;
    padding:10px;
    border:1px;
    font-size:18px;
    cursor:pointer;
    font-style: normal;
    font-weight: 600;
    
    color:#FFF;
    margin:3px;
    padding: 2px 12px;
    min-width:120px;
    width:90%;
    height:25px;
    &:hover{
        background: #E4105D;
        border:none;
    }
    
    
    ${({variant}) => variant !== "primary" &&  css`
        display:flex;
        align-itemns: center;
        justify-content: center;
        height:36px;
        cursor:pointer;
        line-height:30px;
        background: #E4105D;
        font-size:16px;
        max-width:90%;
        
        
        &::after{
            max-width:110%;
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -6px;
            left -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
        &:hover{
            box-shadow: 1px 1px 10px 7px #d73a74;
            border:none;
        }
    `}

    
`

export const ButtonContainer2 = styled.button`
        display:flex;
        align-items: center;
        justify-content: center;
        border-radius: 22px;
        position: relative;
        line-height:20px;
        padding:10px;
        border:0.5px;
        cursor:pointer;
        font-style: normal;
        font-weight: 600;
        width:152.32px;
        height:5.546995377503852vh;
        cursor:pointer;
        
        background: #E4105D;
        font-size:16.8px;
        color:#FFF;
        
        
        &::after{
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -6px;
            left -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
        &:hover{
            box-shadow: 1px 1px 10px 7px #d73a74;
            border:none;
        }
 `