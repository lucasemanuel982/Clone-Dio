import React from 'react'
import { ButtonContainer,ButtonContainer2 } from './styles';


const Button = ({title, variant="primary", onClick}) => {
    return(     
        <ButtonContainer variant={variant} onClick={onClick}>
            {title}
        </ButtonContainer>
        
    )
}

const Button2 = ({title, onClick}) => {
    return(     
        <ButtonContainer2  onClick={onClick}>
            {title}
        </ButtonContainer2>
        
    )
}


export { Button, Button2 }