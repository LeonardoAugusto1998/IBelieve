import styled from "styled-components";

export const EstabelecimentoView = styled.TouchableOpacity`
background-color: #FFF;
width: ${props => props.w -40};
height: 110px;
border-bottom-left-radius: ${props => props.border};
border-bottom-right-radius: ${props => props.border};
border-top-left-radius : 5px;
border-top-right-radius : 5px;
margin-top: 10px;
flex-direction: row;
align-items: center;
`

export const EstabelecimentoText = styled.Text`
color: #000;
font-weight: bold;
font-size: 16px;
`

export const LogoEstabe = styled.Image`
width: 90px;
height: 90px;
margin-left: 10px;
border-radius: 5px;
`

export const NomesView = styled.View`
flex-direction: column;
margin-left: 10px;
flex: 1;
height: 100px;
`

export const CategoriaEstab = styled.Text`
color: #000;
background-color: ${props => props.color};
max-width:130px;
padding-left: 16px;
padding-right: 16px;
padding-top: 4px;
padding-bottom: 4px;
text-align: center;
border-radius: 15px;
height: 25px;
text-align-vertical: center;
font-size: 13px;
margin: 2px;
margin-right: 5px;
`

export const DescontoText = styled.Text`
color: #FF0000;
margin: 2px;
font-size: 13px;
`

export const TextoPequeno = styled.Text`
color: #696969;
font-size: 12px;
margin: 4px;
`

export const Linha2 = styled.View`
border-bottom-color: #696969;
border-bottom-width: 0.2px;
width: 330px;
margin: auto;
margin-top: 2px;
margin-bottom: 15px;
`

export const ParteInvisivel = styled.View`
background-color: #FFF;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
height: 70px;
`

export const ParteDoInvisivel = styled.View`
flex-direction: row;
`

export const ParteDeFora = styled.View`
backgroun-color: #FFF;
`

export const ParteDoTelefone = styled.View`
align-items: flex-start;
margin-right: 20px;
margin-left: 20px;
padding-bottom: 15px;
`

export const TelefoneText = styled.Text`
font-weight: bold;
color: #000;
font-size: 10px;
`

export const MenosIcon = styled.View`
position: absolute;
background-color: #DCDCDC;
right: 12px;
top: 12px;
width: 30px;
height: 25px;
justify-content: center;
align-items: center;
border-radius: 5px;
`

export const GoogleImage = styled.Image`
width: 35px;
height: 35px;
border-width: 1.5px;
border-color: #DCDCDC;
border-radius: 3px;
margin-right: 5px;
`

export const EnderecoView = styled.TouchableOpacity`
flex-direction: row;
max-width: ${props => props.w -40};
`

export const ParteDosNomes = styled.View`
flex-direction: column;
`

export const EnderecoText = styled.Text`
font-size: 12px;
font-weight: bold;
`

export const TextoMenor = styled.Text`
font-size: 10px;
`

export const EnderecoNomes = styled.View`
flexDirection: row;
alignItems: center;
justifyContent: flex-start;
`

export const EnderecoReal = styled.Text`
font-weight: bold;
font-size: 10px;
color: #000;
`

export const ModalView = styled.View`
width: 350px;
height: 470px;
margin: auto;
border-radius: 10px;
`

export const FecharView = styled.View`
background-color: #FFF;
width: 70px;
height: 30px;
justify-content: center;
align-items: center;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
`

export const FecharText = styled.Text`
color: #000;
font-weight: bold;
`