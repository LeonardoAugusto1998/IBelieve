
import * as React from 'react';
import { Dimensions } from "react-native";
import avatar from '../../assets/avatar.jpg';

import {
    SeguidorContainer,
    SeguidorFoto,
    NomeEmail,
    NomeSeguidor,
    EmailSeguidor,
    NivelSeguidor,
    ParteDosNomes
} from './seguidoresStyle';


export function Seguidores({ item }){

    const w = Dimensions.get('window').width;

    const name = item.nome.split(' ').filter( (ind) => ind !== 'de' && ind !== 'das'  );
    const completeName = `${name[0]} ${name[1]} ${name[2]}`;


    return(

        <SeguidorContainer w={w}>


            <NomeEmail>
                {
                item.fotoUrl === null 
                ? 
                <SeguidorFoto source={avatar}/> 
                : 
                <SeguidorFoto source={{uri: item.fotoUrl}}/>
                }

                    <ParteDosNomes>
                        <NomeSeguidor>{completeName}</NomeSeguidor>
                        <EmailSeguidor>{item.email}</EmailSeguidor>
                    </ParteDosNomes>

                </NomeEmail>

                <NivelSeguidor>Nivel {item.nivel}</NivelSeguidor>


        </SeguidorContainer>

    );
}