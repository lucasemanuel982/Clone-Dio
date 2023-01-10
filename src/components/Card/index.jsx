import React from 'react';
import { FiThumbsUp } from 'react-icons/fi'
import {CardContainer,Content,HasInfo,ImageBackground,PostInfo,UserInfo,UserPicture} from '../Card/styles'


const Card = ({title, variant="primary", onClick}) => {
    return(     
        <CardContainer>
                <ImageBackground src='https://1.bp.blogspot.com/-lUKa4FNac1M/ThtfJcOwrQI/AAAAAAAACf0/Vg8_Bd8Kv2Q/s1600/lago-com-agua-cristalina-imagens-imagem-de-fundo-wallpaper-para-pc-computador-tela-gratis-ambiente-de-trabalho.jpg' />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/71146578?s=400&u=5dac019782bd2df1b2f863c26d7ae988aa715808&v=4
                    "/>
                    <div>
                        <h4>Lucas Emanuel</h4>
                        <p>Há 10 Minutos </p>
                    </div>
                </UserInfo>

                <PostInfo>
                        <h4>Projeto do BootCamp Orange Tech+ </h4>
                        <p>Feito com a Biblioteca React...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                        <h4>#HTML #CSS #Javascript</h4>
                        <p><FiThumbsUp />10</p> 

                </HasInfo>
                
            </Content>
        </CardContainer>
    )
}

export { Card }



// const Header = ({title, variant="primary", onClick}) => {
//     return(     
//         <Wrapper>
//             <Container>
//                 <Row>
//                     <img src={logo} alt="Logo da Dio" />
//                     <BuscarInputContainer>
//                         <input placeholder='Buscar...'/>
//                     </BuscarInputContainer>    
//                     <Menu>Live Code</Menu>
//                     <Menu>Teste</Menu>
//                 </Row>

//                 <Row>
//                     <MenuRight href=''>Home</MenuRight>
//                     <Button title="Entrar"></Button>
//                     <Button title="Cadastrar"></Button>
//                 </Row>
                
//             </Container>
//         </Wrapper>
//     )
// }


