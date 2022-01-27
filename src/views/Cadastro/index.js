import * as React from 'react';
import { Dimensions, ScrollView, StatusBar, Alert, ActivityIndicator} from 'react-native';
import backgroundImage from '../../assets/background.png';
import logo from '../../assets/logo_small.png';
import NascIcon from '../../assets/date.svg';
import OlhoAberto from '../../assets/show_password.svg';
import OlhoFechado from '../../assets/hide_password.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import { 
    BackImage, 
    WhitePart,
    Cabecalho,
    Logo,
    TextCabecalho,
    Linha2,
    Linha,
    AreaButtons,
    Label,
    Input,
    PasswordView,
    IconView,
    TextButton,
    AcessarButton,
    AreaLine,
    ErrorText
} from './cadastroStyle';

export default function Cadastro({ navigation }){

    
    const w = Dimensions.get('window').width;
    const h = Dimensions.get('window').height;

    const regExpTel1 = /(\d{2})(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/g;
    const regExpTel2 = /(\d{2})(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/g;
    const regExpCpf = /(\d{3})(\d{3})(\d{3})(\d{2})/g;
    const regExpNascimento = /(\d{2})(\d{2})(\d{4})/g;

    const [hidePassword, setHidePassword] = React.useState(false);

    const [borderNome, setBorderNome] = React.useState('#EDEDED');
    const [borderEmail, setBorderEmail] = React.useState('#EDEDED');
    const [borderTelefone, setBorderTelefone] = React.useState('#EDEDED');
    const [borderCpf, setBorderCpf] = React.useState('#EDEDED');
    const [borderNascimento, setBorderNascimento] = React.useState('#EDEDED');
    const [borderSenha, setBorderSenha] = React.useState('#EDEDED');
    const [borderRecomendou, setBorderRecomendou] = React.useState('#EDEDED');

    const [errorNome, setErrorNome] = React.useState(false);
    const [errorEmail, setErrorEmail] = React.useState(false);
    const [errorTelefone, setErrorTelefone] = React.useState(false);
    const [errorCpf, setErrorCpf] = React.useState(false);
    const [errorNascimento, setErrorNascimento] = React.useState(false);
    const [errorSenha, setErrorSenha] = React.useState(false);
    const [errorRecomendou, setErrorRecomendou] = React.useState(false);

    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telefone, setTelefone] = React.useState('');
    const [cpf, setCpf] = React.useState('');
    const [nascimento, setNascimento] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [recomendou, setRecomendou] = React.useState('');

    const [loading, setLoading] = React.useState(false);


    async function cadastrar() {

        setLoading(true);
        
        if(nome === '') {
            setBorderNome('#EC391D');
            setErrorNome(true);
            setTimeout( () => {
                setBorderNome('#EDEDED');
            setErrorNome(false);
            }, 6000);
            return;
        }
        if(email === '') {
            setBorderEmail('#EC391D');
            setErrorEmail(true);
            setTimeout( () => {
                setBorderEmail('#EDEDED');
            setErrorEmail(false);
            }, 6000);
            return;
        }
        if(telefone === '') {
            setBorderTelefone('#EC391D');
            setErrorTelefone(true);
            setTimeout( () => {
                setBorderTelefone('#EDEDED');
            setErrorTelefone(false);
            }, 6000);
            return;
        }
        if(cpf === '') {
            setBorderCpf('#EC391D');
            setErrorCpf(true);
            setTimeout( () => {
                setBorderCpf('#EDEDED');
            setErrorCpf(false);
            }, 6000);
            return;
        }
        if(nascimento === '') {
            setBorderNascimento('#EC391D');
            setErrorNascimento(true);
            setTimeout( () => {
                setBorderNascimento('#EDEDED');
            setErrorNascimento(false);
            }, 6000);
            return;
        }
        if(senha === '') {
            setBorderSenha('#EC391D');
            setErrorSenha(true);
            setTimeout( () => {
                setBorderSenha('#EDEDED');
            setErrorSenha(false);
            }, 6000);
            return;
        }
        if(recomendou === '') {
            setBorderRecomendou('#EC391D');
            setErrorRecomendou(true);
            setTimeout( () => {
                setBorderRecomendou('#EDEDED');
            setErrorRecomendou(false);
            }, 6000);
            return;
        }

        let data = {
            nome: nome,
            email: email.toLocaleLowerCase(),
            telefone: telefone,
            cpf: cpf,
            nascimento: nascimento,
            senha: senha,
            recomendou: recomendou.toLocaleLowerCase()
        }
        await api.post('cadastrar', data )
        .then( async (result) => {
            const dados = result.data
            switch(result.data) {
                case 'DEU_PROBLEMA': return null;
                break;

                case 'CPF_EXISTE' : Alert.alert('Autenticação', 'CPF já cadastrado'); setLoading(false);
                break;

                case 'EMAIL_EXISTE': Alert.alert('Autenticação', 'Email já cadastrado'); setLoading(false);
                break;

                case 'NAO_EXISTE_RECOMENDOU': Alert.alert('Autenticação', 'Email de recomendação não encontrado'); setLoading(false);
                break;

                default: cadastrou(data, dados);
            }
        })

    }


    async function cadastrou(data, dados){
        
            console.log(data.email)
            
            try {

                await AsyncStorage.setItem('@user', JSON.stringify(data))
                console.log('Colocou com êxito');
                setLoading(false);
                navigation.navigate('Principal', {ORIGEM: 'CADASTRO', email: data.email});
                
            } catch (e) {

                console.log('O erro ta aqui --> ' + e);
                setLoading(false);

            } 

        
    }



    return(
        <BackImage
        source={backgroundImage}
        resizeMode="cover"
        >
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                            <ScrollView showsVerticalScrollIndicator={false}>

        <WhitePart w={w} h={h}>


            <Cabecalho>
                <TextCabecalho>CADASTRO NA REDE</TextCabecalho>
                <Logo source={logo}/>
            </Cabecalho>

            <AreaLine w={w}>
                <Linha2/>
            </AreaLine>



            <Label>Nome Completo</Label>
            <Input
            borderColor={borderNome}
            onFocus={ () => {
                setBorderNome('#DFC411');
                setBorderEmail('#EDEDED');
                setBorderTelefone('#EDEDED');
                setBorderCpf('#EDEDED');
                setBorderNascimento('#EDEDED');
                setBorderSenha('#EDEDED');
                setBorderRecomendou('#EDEDED');
            } }
            placeholder='Qual é o seu nome?'
            value={nome}
            maxLength={40}
            onChangeText={ (text) => {setNome(text)} }
            />
            {errorNome ? <ErrorText>*Campo Obrigatório*</ErrorText> : <></>}




            <Label>E-mail</Label>
            <Input
            borderColor={borderEmail}
            onFocus={ () => {
                setBorderNome('#EDEDED');
                setBorderEmail('#DFC411');
                setBorderTelefone('#EDEDED');
                setBorderCpf('#EDEDED');
                setBorderNascimento('#EDEDED');
                setBorderSenha('#EDEDED');
                setBorderRecomendou('#EDEDED');
            } }
            placeholder='Qual é o seu e-mail?'
            value={email}
            onChangeText={ (text) => {setEmail(text)} }
            />
            {errorEmail ? <ErrorText>*Campo Obrigatório*</ErrorText> : <></>}




            <Label>Telefone</Label>
            <Input
            borderColor={borderTelefone}
            onFocus={ () => {
                setBorderNome('#EDEDED');
                setBorderEmail('#EDEDED');
                setBorderTelefone('#DFC411');
                setBorderCpf('#EDEDED');
                setBorderNascimento('#EDEDED');
                setBorderSenha('#EDEDED');
                setBorderRecomendou('#EDEDED');
            } }
            placeholder='(__) _____-____'
            value={telefone}
            keyboardType='numeric'
            maxLength={16}
            onChangeText={ (text) => {
                if (text.length <= 10){
                    setTelefone(text.replace(regExpTel1 , '($1) $2$3$4$5-$6$7$8$9'))
                }
                if (text.length > 10){
                    setTelefone(text.replace(regExpTel2, '($1) $2 $3$4$5$6-$7$8$9$10'))
                }
            } }
            />
            {errorTelefone ? <ErrorText>*Campo Obrigatório*</ErrorText> : <></>}




            <Label>CPF</Label>
            <Input
            borderColor={borderCpf}
            onFocus={ () => {
                setBorderNome('#EDEDED');
                setBorderEmail('#EDEDED');
                setBorderTelefone('#EDEDED');
                setBorderCpf('#DFC411');
                setBorderNascimento('#EDEDED');
                setBorderSenha('#EDEDED');
                setBorderRecomendou('#EDEDED');
            } }
            placeholder='___.___.___-__'
            value={cpf}
            maxLength={14}
            keyboardType='numeric'
            onChangeText={ (text) => {setCpf(text.replace(regExpCpf, '$1.$2.$3-$4'))} }
            />
            {errorCpf ? <ErrorText>*Campo Obrigatório*</ErrorText> : <></>}




            <Label>Data de Nascimento</Label>
            <PasswordView>
                <Input
                borderColor={borderNascimento}
                onFocus={ () => {
                    setBorderNome('#EDEDED');
                    setBorderEmail('#EDEDED');
                    setBorderTelefone('#EDEDED');
                    setBorderCpf('#EDEDED');
                    setBorderNascimento('#DFC411');
                    setBorderSenha('#EDEDED');
                    setBorderRecomendou('#EDEDED');
                } }
                placeholder='DD/MM/AAAA'
                value={nascimento}
                maxLength={10}
                keyboardType='numeric'
                onChangeText={ (text) => {setNascimento(text.replace(regExpNascimento, '$1/$2/$3'))} }
                />
                <IconView>
                    <NascIcon width={25} height={25}/>
                </IconView>
            </PasswordView>
            {errorNascimento ? <ErrorText>*Campo Obrigatório*</ErrorText> : <></>}




            <Label>Senha</Label>
            <PasswordView>
                <Input
                borderColor={borderSenha}
                onFocus={ () => {
                    setBorderNome('#EDEDED');
                    setBorderEmail('#EDEDED');
                    setBorderTelefone('#EDEDED');
                    setBorderCpf('#EDEDED');
                    setBorderNascimento('#EDEDED');
                    setBorderSenha('#DFC411');
                    setBorderRecomendou('#EDEDED');
                } }
                placeholder='******'
                value={senha}
                onChangeText={ (text) => {setSenha(text)} }
                secureTextEntry={!hidePassword}
                />
                <IconView  onPress={ () => setHidePassword(!hidePassword) }>
                    {hidePassword ? <OlhoFechado width={28} height={28}/> : <OlhoAberto width={28} height={28}/>}
                </IconView>
            </PasswordView>
            {errorSenha ? <ErrorText>*Campo Obrigatório*</ErrorText> : <></>}




            <Label>Quem te recomendou?</Label>
            <Input
            borderColor={borderRecomendou}
            onFocus={ () => {
                setBorderNome('#EDEDED');
                setBorderEmail('#EDEDED');
                setBorderTelefone('#EDEDED');
                setBorderCpf('#EDEDED');
                setBorderNascimento('#EDEDED');
                setBorderSenha('#EDEDED');
                setBorderRecomendou('#DFC411');
            }}
            placeholder='Digite o e-mail de quem te recomendou.'
            value={recomendou}
            onChangeText={ (text) => {setRecomendou(text)} }
            />
            {errorRecomendou ? <ErrorText>*Campo Obrigatório*</ErrorText> : <></>}




            <AreaButtons>
            
                <AcessarButton onPress={ cadastrar } style={({ pressed }) =>
          {
            backgroundColor: pressed
              ? '#FAA411'
              : '#DFC411'
          }}>
                    <TextButton>{loading ? <ActivityIndicator size="large"/> : 'Acessar'}</TextButton>
                </AcessarButton>

                <Linha/>

            </AreaButtons>


        </WhitePart>

                        </ScrollView>
        </BackImage>
    );
}