import { useNavigate  } from "react-router-dom";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import {Column1,Column2 ,Container,CreateAccount,RecoveryPassword,Row,SubTitleLogin,Title,TitleLogin,Wrapper,Traco} from '../login/style'
import { MdEmail, MdLock} from 'react-icons/md';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from '../../services/api';

const schema = yup.object({
    email: yup.string().email('E-mail não é válido').required('Compo Obrigatório!'),
    password: yup.string().min(8, 'No mínimo 8 caracteres').required('Compo Obrigatório!')
  }).required();

const Login = () => {

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



    const handleClickRegister =() => {
        navigate('/cadastro')
    }
    return( <> 
        <Header />
        <Container>
            <Column1>
                <Traco>  .</Traco>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas. 
                </Title>

            </Column1>

            <Column2>
                <Wrapper>
                    <Traco>.</Traco>
                    <TitleLogin>Já tem cadastro?</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name ="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" type="text" leftIcon={<MdEmail/>}/>
                        <Input name ="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button title="Entrar" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <RecoveryPassword>Esqueci minha senha</RecoveryPassword>
                        <CreateAccount onClick={handleClickRegister} >Criar conta</CreateAccount>
                    </Row> 
                </Wrapper>

            </Column2>

        </Container>
    </>)
}


export{Login}