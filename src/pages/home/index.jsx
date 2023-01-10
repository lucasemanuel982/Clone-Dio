import { useNavigate  } from "react-router-dom";
import bannerImag from '../../assests/banner-play.png'
import { Button2 } from '../../components/Button';
import { Header } from '../../components/Header';


import {
    Container,
    TextContent,
    Title,TitleHighlight,
    ContainerImage,ContainerImageBackground
}from './style'

const Home = () => {
    const navigate = useNavigate();

    const handleClickRegister= () => {
        navigate('/cadastro')
    }

    return( <> 
        <Header/>
        <ContainerImageBackground style={{
                backgroundImage: `url(${bannerImag})`,
                height: "500px", backgroundSize:"contain"}}
        >
            <ContainerImage>
                <Container >
                            <div>
                                <Title>
                                    <TitleHighlight>
                                        <h1>Implemente</h1>
                                        <h1>Codifique</h1>
                                        <h1>Desenhe</h1>
                                        <h1>Programe</h1>
                                    </TitleHighlight>
                                        <br/>
                                    O seu Futuro Global Agora!
                                </Title>
                                <TextContent>
                                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio
                                    profissional, evoluindo e comunicado com os melhores experts.
                                </TextContent>
                                <Button2 title="Começar agora"  onClick={handleClickRegister}/>
                            </div>
                </Container>
            </ContainerImage>
        </ContainerImageBackground>
    </>)
}

export{Home}