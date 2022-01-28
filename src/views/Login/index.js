import * as React from 'react';
import { View, Dimensions, ScrollView, ActivityIndicator, StatusBar, Alert} from 'react-native';
import backgroundImage from '../../assets/background.png';
import logo_small from '../../assets/logo_small.png';
import OlhoAberto from '../../assets/show_password.svg';
import OlhoFechado from '../../assets/hide_password.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import { 
    BackImage, 
    WhitePart, 
    Logo_small_image,
    BemVindoText,
    GrandeText,
    Label,
    Input,
    AcessarButton,
    Textinho,
    CadastroButton,
    TextButton,
    Linha,
    AreaButtons,
    PasswordView,
    IconView,
    ErrorText
} from './loginStyle';



export default function Login({ navigation }){

    const w = Dimensions.get('window').width - 35;
    const h = Dimensions.get('window').height;

    const [hidePassword, setHidePassword] = React.useState(false);

    const [borderColor1, setBorderColor1] = React.useState('#EDEDED');
    const [borderColor2, setBorderColor2] = React.useState('#EDEDED');

    const [errorLogin, setErrorLogin] = React.useState(false);
    const [errorSenha, setErrorSenha] = React.useState(false);

    const [login, setLogin] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const [loading, setLoading] = React.useState(false);

    async function acessar(){
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 15000);

        if(login === '') {
            setBorderColor1('#EC391D');
            setErrorLogin(true);
            setTimeout( () => {
                
                setBorderColor1('#EDEDED');
                setErrorLogin(false);

            }, 5000);
            return;
        }

        if(senha === '') {
            setBorderColor2('#EC391D');
            setErrorSenha(true);
            setTimeout( () => {
                setBorderColor2('#EDEDED');
                setErrorSenha(false);
            }, 5000);
            return;
        }

        let data = {
            login: login.toLocaleLowerCase(),
            senha: senha
        }

        await api.post('login', data )
        .then( async (result) => {

            if ( result.data === null ) {
                setLoading(false);
                Alert.alert('Autenticação', 'Login ou Senha incorretos !');

            } else {

                setLoading(false);
                const jsonValueStr = JSON.stringify(result.data);
                const jsonValue = JSON.parse(result.data);
                await AsyncStorage.setItem('@user', jsonValueStr)
                .then(() => {
                    navigation.navigate('Principal', {email: jsonValue.email});
                })
                
            }
        })

    }


    React.useEffect(() => {

        async function ver_usuario(){
            try {
                const value = await AsyncStorage.getItem('@user')
                .then(async (info) => {
                    if(value === null) {
                    console.log(value);
                } else {
                    let dados = JSON.parse(info);
                    let dadosStr = JSON.stringify(info);
                    await AsyncStorage.setItem('@user', dadosStr)
                    .then(() => {
                        navigation.navigate('Principal', {email: dados.email});
                        console.log(dados.email);
                    })
                    .catch((err) => {
                        console.log('Erro qnd login ' + err);
                    })

                }
                })

                

            } catch(e) {
                console.log('Houve um erro --> ' + e)
            }
        }

        ver_usuario();

    }, [])

    return(
        <BackImage
        source={backgroundImage}
        resizeMode="cover"
        >

            <StatusBar backgroundColor={'#DFC411'} />

                            <ScrollView showsVerticalScrollIndicator={false}>
            
        <WhitePart w={w} h={h}>

            <Logo_small_image source={logo_small}/>

            <BemVindoText>BEM--VINDO</BemVindoText>
            <GrandeText>Ao clube de vantagens da I Believe</GrandeText>



            <Label>Login</Label>
            <Input
            placeholder='Digite seu e-mail'
            borderColor={borderColor1}
            onFocus={ () => {
                setBorderColor1('#DFC411');
                setBorderColor2('#EDEDED') }}
            onChangeText={ (text) => {setLogin(text)} }
            value={login}
            />
            {errorLogin ? <ErrorText>*Campo Obrigatório*</ErrorText> : <></>}




            <Label>Senha</Label>

            <PasswordView>
                <Input
                placeholder='******'
                secureTextEntry={!hidePassword}
                borderColor={borderColor2}
                onFocus={ () => {
                    setBorderColor2('#DFC411'); 
                    setBorderColor1('#EDEDED')} }
                onChangeText={ (text) => {setSenha(text)} }
                value={senha}
                />
                <IconView  onPress={ () => setHidePassword(!hidePassword) }>
                    {hidePassword ? <OlhoFechado width={25} height={25}/> : <OlhoAberto width={25} height={25}/> }
                </IconView>
            </PasswordView>
            {errorSenha ? <ErrorText>*Campo Obrigatório*</ErrorText> : <></>}





            <AreaButtons>

                <AcessarButton onPress={acessar} style={({ pressed }) =>
          {
            backgroundColor: pressed
              ? '#FAA411'
              : '#DFC411'
          }}>
                    <TextButton>{loading ? <ActivityIndicator size="large"/> : 'Acessar sua Conta'}</TextButton>
                </AcessarButton>


                    <Textinho>Não tem conta?</Textinho>


                <CadastroButton onPress={ () => { navigation.navigate('Cadastro') } }>
                    <TextButton>Cadastre-se</TextButton>
                </CadastroButton>

                
                    <Linha/>

            </AreaButtons>



        </WhitePart>
                        </ScrollView>
        </BackImage>
    );
}