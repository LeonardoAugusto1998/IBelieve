import styled from "styled-components";

export const Container = styled.View`
flex: 1;
background-color: #DCDCDC
align-items: center;
`

export const LogoImg = styled.Image`
width: 180px;
height: 50px;
`

export const Cabecalho = styled.View`
flex-direction: row;
align-items: center;
margin: 22px;
`

export const VoltarView = styled.TouchableOpacity`
width: 70px;
height: 40px;
align-items: center;
justify-content: center;
margin-right: 100px;
`

export const VoltarText = styled.Text`
color: #000;
font-size: 16px;
`

export const FotoPessoal = styled.Image`
width: 90px;
height: 90px;
border-radius: 5px;
`

export const LogoView = styled.View`
aling-items: flex-start;
width: ${props => props.w - 30};
flex-direction: row;
`

export const NomesLogo = styled.View`
align-items: flex-start;
justify-content: center;
margin-left: 10px;
`

export const GrupoView = styled.View`
flex-direction: row
`

export const Nome = styled.Text`
color: #000;
font-weight: bold;
font-size: 23px;
`

export const TextoEstatico = styled.Text`
color: #000;
font-size: 13px;
`

export const TextoDeBaixo = styled.Text`
color: #000;
font-size: 15px;
`

export const SeguidoresLista = styled.FlatList`
margin-top: 50px;
`

export const Linha = styled.View`
border-bottom-width: 5px;
border-bottom-color: #000;
width: 200px;
border-radius: 15px;
margin-bottom: 25px;
`

export const CameraView = styled.View`
position: absolute;
right: -6px;
bottom: -6px;
background-color: #FFF;
align-items: center;
justify-content: center;
height: 26px;
width: 26px;
border-radius: 50px;
`

export const FotoView = styled.TouchableOpacity`

`