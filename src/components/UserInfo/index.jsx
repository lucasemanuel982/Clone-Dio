import React from 'react'

import { Container, ExpProgress, NameText, Progress, UserPicture} from './styles';

const UserInfo = ({nome,image, percentual,exp}) => {
  return (
    <Container>
        <UserPicture src={image} />
        <div>
            <NameText>{nome}</NameText>
            <ExpProgress>{exp}</ExpProgress>
            <Progress percentual={percentual} />
        </div>
    </Container>
  )
}

export { UserInfo }



