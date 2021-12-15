import styled from "styled-components";

export const SeguidorContainer = styled.View`
flex-direction: row;
width: ${props => props.w - 30};
margin-bottom: 12px;
background-color: #FFF;
border-radius: 6px;
height: 70px;
align-items: center;
padding-left: 10px;
justify-content: space-between;
`

export const SeguidorFoto = styled.Image`
width: 50px;
height: 50px;
border-radius: 6px;
`

export const NomeEmail = styled.View`
align-items: flex-start;
flex-direction: row;
`

export const NomeSeguidor = styled.Text`
color: #000;
font-weight: bold;
font-size: 17px;
`

export const EmailSeguidor = styled.Text`
color: #000;
font-size: 12px;
`

export const NivelSeguidor = styled.Text`
margin-right: 15px;
color: #000;
font-size: 16px;
`

export const ParteDosNomes = styled.View`
flex-direction: column;
margin-left: 10px;
`