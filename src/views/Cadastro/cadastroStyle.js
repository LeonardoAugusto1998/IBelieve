
import styled from 'styled-components';

export const BackImage = styled.ImageBackground`
flex: 1;
align-items: center;
justify-content: flex-end;
`

export const WhitePart = styled.KeyboardAvoidingView`
width: ${props => props.w - 30};
height: ${props => props.h + 200};
background-color: #FFF;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
margin-top: 70px;
`

export const Cabecalho = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-around;
margin-top: 20px;
`

export const Logo = styled.Image`
width: 40px;
height: 35px;
margin-left: 30px;
`

export const TextCabecalho = styled.Text`
color: #000;
font-weight: bold;
font-size: 22px
`

export const Linha2 = styled.View`
border-bottom-color: #C0C0C0;
border-bottom-width: 1px;
width: 320px;
`

export const AreaLine = styled.View`
justify-content: center;
align-items: center;
margin-bottom: 35px;
margin-top: 20px;
`

export const Input = styled.TextInput`
margin: auto;
height: 50px;
width: 300px;
background-color: #FFF;
border-radius: 5px;
margin-bottom: 15px;
padding-left: 15px;
border-color: ${props => props.borderColor};
border-width: 1.2px;
`

export const Label = styled.Text`
color: #000;
font-weight: bold;
margin-left: 30px;
margin-bottom: 10px;
`

export const PasswordView = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
`

export const IconView = styled.TouchableOpacity`
z-index: 9;
height: 30px;
position: absolute;
right: 52px;
align-items: center;
justify-content: center;
top: 10px;
`

export const AcessarButton = styled.Pressable`
background-color: #DFC411;
height: 50px;
width: 300px;
justify-content: center;
align-items: center;
border-radius: 5px;
`

export const TextButton = styled.Text`
color: #000;
font-weight: bold;
`

export const Linha = styled.View`
border-bottom-width: 5px;
border-bottom-color: #000;
width: 200px;
border-radius: 15px;
margin-top: 40px;
`

export const AreaButtons = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`

export const ErrorText = styled.Text`
color: #EC391D;
margin-bottom: 10px;
padding-left: 30px;
margin-top: 5px;
`