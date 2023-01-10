import React from 'react';
import logo from '../../assests/logo-dio.png';
import { useNavigate  } from "react-router-dom";
//  impotando o styles JS que foi criado
import { Button } from '../Button';
import { Container, Wrapper, BuscarInputContainer, Input, Row, MenuRight, UserPicture, ButtonGlobal, MenuRight2} from './styles';


const Header = ({autenticado}) => {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

   const handleClickRegister =() => {
        navigate('/cadastro')
    }
   const handleClickHome =() => {
        navigate('/Clone-Dio')
    }

    return(     
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da Dio" className='image'/>
                    {autenticado ? (
                        <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>    
                        <MenuRight2 href="/">Todos os cursos</MenuRight2>
                        <MenuRight2 href="/">Global</MenuRight2>
                        <MenuRight2 href="/">Curso de Inglês</MenuRight2>
                        <MenuRight2 href="/">Vagas</MenuRight2>
                        <MenuRight2 href="/">Artigos</MenuRight2>
                        <MenuRight2 href="/">Rooms</MenuRight2>
                        <MenuRight2 href="/">Rooms</MenuRight2>
                        <ButtonGlobal  href="/">Seja Global</ButtonGlobal>

                        </>) : null}
                </Row>

                <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/71146578?s=400&u=5dac019782bd2df1b2f863c26d7ae988aa715808&v=4"/>
                ) : ( <>
                    <MenuRight  onClick={handleClickHome}>Home</MenuRight>
                    <Button title="Entrar"   onClick={handleClickSignIn}/>
                    <Button title="Cadastrar"  onClick={handleClickRegister}/>
                    </>
                )}
                </Row>
                
            </Container>
        </Wrapper>
    )
}

export { Button }
export {Header}
