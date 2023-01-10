import { useNavigate  } from "react-router-dom";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import {Column1,Column2 ,Container,CreateAccount,TermsText,Column,SubTitleRegister,Title,TitleRegister,Wrapper,Traco, Login, LogIn, Terms} from '../cadastro/style'
import { MdEmail, MdLock, MdPeople, MdSmartphone } from 'react-icons/md';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from '../../services/api';

const schema = yup.object({
    name: yup.string().required('Campo Obrigatório!'),
    email: yup.string().email('E-mail não é válido').required('Compo Obrigatório!'),
    password: yup.string().min(8, 'No mínimo 8 caracteres!').required('Compo Obrigatório!'),
    number: yup.string().min(11, 'No mínimo 11 Números!').required('Compo Obrigatório!').max(11,'Nop máximo 11 Números!'),
  }).required();

const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors} } = useForm({
        resolver: yupResolver(schema),
        mode:'onChange'
    });



    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            
            if(data.length === 1){
                navigate('/feed') 
            }else{

                alert('Usuário ou senha inválido')
            }
        }catch(e){
            alert('Houve um erro, tente novamente!')
        }
    };

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return( <> 
        <Header />
        <Container>
            <Column1>

                <Traco>  .</Traco>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas. 
                </Title>
                <CreateAccount onClick={handleClickSignIn} >VOLTAR PARA LOGIN </CreateAccount>

            </Column1>

            <Column2>
                <Wrapper>
                    <Traco>  .</Traco>
                    <TitleRegister>Comece agora grátis</TitleRegister>
                    <SubTitleRegister>Crie sua conta e make the change._</SubTitleRegister>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name ="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome Completo" type="text" leftIcon={<MdPeople/>}/>
                        <Input name ="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" type="text" leftIcon={<MdEmail/>}/>
                        <Input name ="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <Input name ="number" errorMessage={errors?.number?.message} control={control} placeholder="Digite o Seu Número Com DDD" type="text" leftIcon={<MdSmartphone/>}/>
                        <Button title="Criar Minha Conta Grátis" variant="secondary"  type="submit" />
                    </form>
                    <Column>
                        <TermsText>
                            Ao clicar em "criar minha conta grátis", declaro que aceito as
                            <Terms href="https://www.dio.me/terms-and-policies#polices">Políticas de Privacidade</Terms>
                            e os 
                            <Terms href="https://www.dio.me/terms-and-policies#terms">Termos de Uso</Terms>
                            da DIO.
                        </TermsText>
                        <LogIn>
                            Já Possui login ? 
                            <Login onClick={handleClickSignIn} > Fazer Login </Login>   
                        </LogIn>
                    </Column>
                </Wrapper>
            </Column2>
        </Container>
    </>)
}


export{Cadastro}









/* Dessa forma consegue validar e-mail e senha
import { useNavigate  } from "react-router-dom";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import {Column1,Column2 ,Container,CreateAccount,RecoveryPassword,Row,SubTitleLogin,Title,TitleLogin,Wrapper} from '../login/style'
import { MdEmail, MdLock } from 'react-icons/md';

Importando o Hook useForm
import { useForm } from "react-hook-form";

Inomportado o yup
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

Realiza a validação e passa as mensagens e parâmetros a se sequir
const schema = yup.object({
    email: yup.string().email('E-mail não é válido').required('Compo Obrigatório!'),
    password: yup.string().min(8, 'No mínimo 8 caracteres').required('Compo Obrigatório!')
  }).required();

const Login = () => {

    const navigate = useNavigate();

    // Implementado o useForm - tem vários controles para se utilizar 
    const { control, handleSubmit, formState: { errors,isValid  } } = useForm({
        // implementando a validação
        resolver: yupResolver(schema),
        // Assim que o usuário digitar irá ser validado se está válido ou não 
        mode:'onChange'
    });
    const onSubmit = data => console.log(data);
        // reValidateMode: 'onChange',
        // mode: 'onChange',

    console.log(isValid, errors);


    // Para poder adiconar mais de um componente tem que colocar "<>" no início e no final "</>"
    return( <> 
        <Header />
        <Container>
            <Column1>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas. 
                </Title>

            </Column1>

            <Column2>
                <Wrapper>
                    <TitleLogin>Faça seu Cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e Make the Change.</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name ="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" type="text" leftIcon={<MdEmail/>}/>
                        <Input name ="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button title="Entrar" variant="secondary"  type="submit" />
                    </form>
                    <Row>
                        <RecoveryPassword>Esqueci minha senha</RecoveryPassword>
                        <CreateAccount>Criar conta</CreateAccount>
                    </Row>
                </Wrapper>

            </Column2>

        </Container>
    </>)
}


export{Login}*/