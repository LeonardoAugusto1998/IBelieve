
import styled from "styled-components";

export const BackImage = styled.ImageBackground`
flex: 1;
align-items: center;
justify-content: flex-end;
`

export const WhitePart = styled.KeyboardAvoidingView`
width: ${props => props.w};
max-height: ${props => props.h + 300};
height: ${props => props.h + 100};
background-color: #FFF;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
margin-top: 70px;
`

export const Logo_small_image = styled.Image`
width: 85px;
height: 75px;
margin-left: 30px;
margin-top: 50px;
`

export const BemVindoText = styled.Text`
margin-left: 35px;
margin-top: 15px;
font-size: 18px;
color: #000;
`

export const GrandeText = styled.Text`
margin-left: 30px;
margin-bottom: 50px;
color: #000;
font-weight: bold;
font-size: 30px;
`

export const Label = styled.Text`
color: #000;
font-weight: bold;
margin-left: 30px;
margin-bottom: 10px;
`

export const Input = styled.TextInput`
margin: auto;
height: 50px;
width: 300px;
background-color: #FFF;
border-radius: 5px;
padding-left: 15px;
border-color: ${props => props.borderColor};
border-width: 1.2px;
`

export const AcessarButton = styled.Pressable`
background-color: #DFC411;
height: 50px;
width: 300px;
justify-content: center;
align-items: center;
border-radius: 5px;
margin-bottom: 70px
`

export const Textinho = styled.Text`
color: #000;
margin-bottom: 10px;
`

export const CadastroButton = styled.TouchableOpacity`
background-color: #FFF;
height: 50px;
width: 300px;
justify-content: center;
align-items: center;
border-radius: 5px;
margin-bottom: 30px;
border-color: #EDEDED;
border-width: 2px;
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
margin-bottom: 15px;
margin-top: 30px;
`

export const AreaButtons = styled.View`
flex: 1;
justify-content: center;
align-items: center;
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
right: 40px;
align-items: center;
justify-content: center;
top: 10px;
`

export const ErrorText = styled.Text`
color: #EC391D;
margin-bottom: 30px;
padding-left: 30px;
margin-top: 10px;
`