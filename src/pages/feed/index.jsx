import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import {Column,Container,Title,TitleHighlight} from './style'
import { UserInfo } from '../../components/UserInfo';


const Feed = () => {
    return( <> 
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Lucas Emanuel" exp="XP 1518/1520 "  image="https://avatars.githubusercontent.com/u/71146578?s=400&u=5dac019782bd2df1b2f863c26d7ae988aa715808&v=4" percentual={99}/>
                <UserInfo nome="Lucas Emanuel" exp="XP 1140/1520 " image="https://avatars.githubusercontent.com/u/71146578?s=400&u=5dac019782bd2df1b2f863c26d7ae988aa715808&v=4" percentual={75}/>
                <UserInfo nome="Lucas Emanuel" exp="XP 684/1520 " image="https://avatars.githubusercontent.com/u/71146578?s=400&u=5dac019782bd2df1b2f863c26d7ae988aa715808&v=4" percentual={45}/>
                <UserInfo nome="Lucas Emanuel" exp="XP 486/1520 " image="https://avatars.githubusercontent.com/u/71146578?s=400&u=5dac019782bd2df1b2f863c26d7ae988aa715808&v=4" percentual={32}/>
            </Column>
        </Container>
    </>)
}


export {Feed}