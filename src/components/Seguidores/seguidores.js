
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

export const seguidores = [
    {
        id: '1',
        nome: 'Leonardo Augusto Barbosa de Almeida',
        email: 'Leonardo1998.augusto@gmail.com',
        fotoUrl: 'https://img2.gratispng.com/20180809/jrv/kisspng-person-image-information-file-format-portable-netw-5b6c71ed0bc624.6384053615338337090482.jpg',
        nivel: '1'
    },
    {
        id: '2',
        nome: 'Luana Kathleen Lobato das Mercês',
        email: 'LuanaKathleen15@gmail.com',
        fotoUrl: 'https://w7.pngwing.com/pngs/520/1011/png-transparent-student-graphy-student-text-hand-people.png',
        nivel: '2'
    },
    {
        id: '3',
        nome: 'Liz Helena Lobato de Almeida',
        email: 'LizBaby2021@gmail.com',
        fotoUrl: 'https://e7.pngegg.com/pngimages/264/30/png-clipart-baby-baby.png',
        nivel: '3'
    },
    {
        id: '4',
        nome: 'Seguidor anônimo Sem Foto',
        email: 'SeguidorSemFoto@gmail.com',
        fotoUrl: null,
        nivel: '2'
    },
    {
        id: '5',
        nome: 'Reginaldo Rossi Fonseca Souza',
        email: 'reginaldoRossi21@gmail.com',
        fotoUrl: 'https://imagens3.ne10.uol.com.br/blogsne10/social1/uploads/2020/08/O-cantor-Reginaldo-Rossi-faleceu-h%C3%A1-quase-7-anos.jpg',
        nivel: '1'
    },
    {
        id: '6',
        nome: 'Ana Celia de Armas Caso',
        email: 'AnaCeliaArmas@gmail.com',
        fotoUrl: 'https://br.web.img3.acsta.net/c_310_420/pictures/18/07/25/21/25/3958186.jpg',
        nivel: '1'
    },{
        id: '7',
        nome: 'Daniel Jacob Radcliffe',
        email: 'Danielradcliffe001@gmail.com',
        fotoUrl: 'https://images.mubicdn.net/images/cast_member/23750/cache-5650-1627288844/image-w856.jpg?size=800x',
        nivel: '3'
    },{
        id: '8',
        nome: 'Daniel Wroughton Craig',
        email: 'Daniel-wroughton@gmail.com',
        fotoUrl: 'https://br.web.img2.acsta.net/c_310_420/pictures/210/258/21025840_20130808191607014.jpg',
        nivel: '2'
    },
    {
        id: '9',
        nome: 'Cara Jocelyn Delevingne',
        email: 'CaraDelevingne@gmail.com',
        fotoUrl: 'https://img.discogs.com/Wv8SKpC88b6w4_lIDl2SNmu-58k=/600x416/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-5924213-1588467536-9911.png.jpg',
        nivel: '2'
    },
    {
        id: '10',
        nome: 'Cidadao sem Foto Exemplo',
        email: 'MaisumSemFoto@gmail.com',
        fotoUrl: null,
        nivel: '3'
    },
];


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