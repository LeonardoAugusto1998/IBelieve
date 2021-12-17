import styled from "styled-components";

export const Container = styled.SafeAreaView`
flex: 1;
background-color: #DCDCDC;
align-items: center;
justify-content: center;
`

export const LogoImg = styled.Image`
width: 180px;
height: 50px;
`

export const AreaLogo = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 40px;
margin-bottom: 40px;
`

export const LogoRede = styled.TouchableOpacity`
flex-direction: column;
background-color: #FFF;
border-radius: 5px;
width: 80px;
height: 45px;
justify-content: center;
align-items: flex-start;
margin-left: 90px;
`

export const NumText = styled.Text`
font-weight: bold;
color: #000;
margin-left: 5px;
font-size: 13px;
margin-top: -5px;
margin-bottom: -2px;
`

export const PeqText = styled.Text`
color: #4f4f4f;
margin-left: 5px;
font-weight: bold;
font-size: 10px;
`

export const BemVindo = styled.Text`
color: #000;
font-size: 18px;
`

export const Conheca = styled.Text`
color: #000;
font-size: 18px;
font-weight: bold;
`

export const Input = styled.TextInput`
width: ${props => props.w - 80};
background-color: #FFF;
border-radius: 5px;
height: 50px;
padding-left: 20px;
font-size: 15px;
`

export const InputView = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 25px;
margin-bottom: 15px;
`

export const SvgSearch = styled.View`
justify-content: center;
align-items: center;
z-index: 9;
position: absolute;
right: 16px;
height: 50px;
margin-top: 20px;
`

export const CategoriaView = styled.TouchableOpacity`
flex-direction: row;
max-height: 400px;
border-radius: 15px;
border-width: 1.5px;
border-color: #808080;
align-items: center;
justify-content: center;
margin: 4px;
`

export const CategoriaText = styled.Text`
color: #000;
font-size: 14px;
padding-left: 16px;
padding-right: 16px;
padding-top: 4px;
padding-bottom: 4px;
font-weight: bold;
`

export const ListaCategorias = styled.FlatList`
margin-bottom: 5px;
height: 150px;
`

export const ListaEstabelecimento = styled.FlatList`
margin-bottom: 5px;
`

export const Linha = styled.View`
border-bottom-width: 5px;
border-bottom-color: #000;
width: 200px;
border-radius: 15px;
margin-bottom: 20px;
`

export const ModalView = styled.View`
width: 350px;
height: 400px;
background-color: #696969;
align-items: center;
justify-content: center;
margin: auto;
border-radius: 8px;
`