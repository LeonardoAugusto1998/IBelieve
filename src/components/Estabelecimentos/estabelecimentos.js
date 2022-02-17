


import * as React from 'react';
import { View, Text, Dimensions, Alert, Modal, TouchableOpacity } from 'react-native';
import Phonesvg from '../../assets/phone.svg';
import Menos from '../../assets/close_down.svg';
import googleImage from '../../assets/download.png';
import { WebView } from 'react-native-webview';
import {
    EstabelecimentoView,
    EstabelecimentoText,
    LogoEstabe,
    NomesView,
    CategoriaEstab,
    DescontoText,
    TextoPequeno,
    Linha2,
    ParteInvisivel,
    ParteDoInvisivel,
    ParteDeFora,
    ParteDoTelefone,
    TelefoneText,
    MenosIcon,
    GoogleImage,
    EnderecoView,
    ParteDosNomes,
    EnderecoText,
    TextoMenor,
    EnderecoNomes,
    EnderecoReal,
    ModalView,
    FecharView,
    FecharText
} from './estabelecimentosStyle';



export const estabelecimentos = [
    {
        id: '1',
        nome: 'Tratorbel',
        desconto:'17',
        fotoUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQFzHqqk5S0sAA/company-logo_200_200/0/1618230631209?e=2159024400&v=beta&t=nJugV9gdMiueAE0DsNaO7096eA7Opx8vg0gtcAZ6FRw',
        categoria1: 'Comércio',
        categoria2: 'Bem-estar',
        rua: 'Alca Viaria km 1,5',
        numero: '',
        cidade: 'Marituba',
        estado: 'PA',
        telefone:'(91) 3366-3066',
        status: false,
        },
    {
        id: '2',
        nome: 'Ricambi',
        desconto:'21',
        fotoUrl: 'https://yt3.ggpht.com/ytc/AKedOLShzdJZdCl0FBehyY0C4phOofOqpTvZIf8LwnrOKQ=s900-c-k-c0x00ffffff-no-rj',
        categoria1: 'Serviços',
        categoria2: null,
        rua: 'Baruel',
        numero: '477',
        cidade: 'Sao Paulo',
        estado: 'SP',
        telefone:'(11) 2164-0300',
        status: false,
        },
    {
        id: '3',
        nome: 'Pavoni',
        desconto:'15',
        fotoUrl: 'https://i.pinimg.com/280x280_RS/cc/cb/1d/cccb1dd35c804f7a73fb883f7aa74163.jpg',
        categoria1: 'Bem-estar',
        categoria2: 'Alimentação',
        rua: 'Diamantina',
        numero: '816',
        cidade: 'Sao Paulo',
        estado: 'SP',
        telefone:'(91) 1523-9556',
        status: false,
        },
    {
        id: '4',
        nome: 'MundialTractor',
        desconto:'12',
        fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnA2chHgPMLphXKzOgGzF14ycTipTAdX-3fBfbGaNWZHlq2U0i5IjaXn5DWwRU7gzj3Fo&usqp=CAU',
        categoria1: 'Comércio',
        categoria2: 'Serviços',
        rua: '13 de Maio',
        numero: '250',
        cidade: 'piracicaba',
        estado: 'SP',
        telefone:'(91) 3254-0912',
        status: false,
    },
    {
        id: '5',
        nome: 'Grupo Hidrau Torque',
        desconto:'27',
        fotoUrl: 'https://yt3.ggpht.com/ytc/AKedOLSxqs39LDN0eO7ctMsmHDaPNVc4O3b_hQo8WRPP=s900-c-k-c0x00ffffff-no-rj',
        categoria1: 'Bem-estar',
        categoria2: 'Serviços',
        rua: 'Henry Ford',
        numero: '100',
        cidade: 'Sao Paulo',
        estado: 'SP',
        telefone:'(11) 3017-8990',
        status: false,
    }
];







export function Estabelecimentos({item}){

    const w = Dimensions.get('window').width;

    const [border, setBorder] = React.useState(5);

    const [colorCat1, setColorCat1] = React.useState('rgb(146,196,222)');
    const [colorCat2, setColorCat2] = React.useState('rgb(144,238,144)');

    const [dados, setDados] = React.useState({});
    const [visivel, setVisivel] = React.useState(false);


    const [data, setData] = React.useState(item);
    const foto = item.fotoUrl ;

    function click(data){
        if (!data.status) {
            setData( prev =>{
                return {...prev, status: true}
            });
            setBorder(0);
        } else {
            setData( prev =>{
                return {...prev, status: false}
            });
            setBorder(5);
        }
    }

    return(

        <ParteDeFora>

        <EstabelecimentoView w={w} border={border} onPress={ () => {click(data)} }>
            <LogoEstabe source={{uri: foto}}/>
            <NomesView>
                <EstabelecimentoText>{data.nome}</EstabelecimentoText>

                <DescontoText>{data.desconto}% de desconto</DescontoText>
                <View style={{flexDirection: 'row'}}>
                    {data.categoria1 !== null ?  <CategoriaEstab color={colorCat1}>{data.categoria1}</CategoriaEstab> : <></>}
                    {data.categoria2 !== null ?  <CategoriaEstab color={colorCat2}>{data.categoria2}</CategoriaEstab> : <></>}
                </View>
                {!data.status ? <></> : <TextoPequeno>Toque para ver mais</TextoPequeno>}
            </NomesView>

            {!data.status ? 
                <MenosIcon>
                    <Menos width={20} height={20}/>
                </MenosIcon>
            : 
            <></>
            }

        </EstabelecimentoView>



           {!data.status ? 
           <ParteInvisivel w={w}>

           <Linha2/>

            <ParteDoInvisivel>

                <ParteDoTelefone>
                    <Text style={{fontSize: 10, fontWeight:'bold'}}><Phonesvg width={5} height={5}/> Telefone</Text>
                    <TelefoneText>{data.telefone}</TelefoneText>
                </ParteDoTelefone>




            <EnderecoView w={w} onPress={ () => { setDados(item); setVisivel(true) } }>

                <GoogleImage source={ googleImage }/>

                

                    <ParteDosNomes style={{flexDirection: 'column'}}>

                        <EnderecoNomes>
                            <EnderecoText>Endereço • </EnderecoText>
                            <TextoMenor>Toque para ver no Maps</TextoMenor>
                        </EnderecoNomes>

                        <EnderecoReal>{data.rua}, {data.numero}, {data.cidade}/{data.estado}</EnderecoReal>

                    </ParteDosNomes>

                

            </EnderecoView>





            </ParteDoInvisivel>

       </ParteInvisivel>

           :
           <></>
           }

                    <Modal
                    visible={visivel}
                    animationType='slide'
                    transparent={true}
                    >
                        <ModalView>

                            <FecharView>
                                <FecharText onPress={()=>{setVisivel(false)}}>Fechar</FecharText>
                            </FecharView>

                        <WebView
                        source={{uri: `https://www.google.com.br/maps/place/${dados.rua}+${dados.numero}+${dados.cidade}+-+${dados.estado}`}}
                        />

                        </ModalView>
                    </Modal>

    </ParteDeFora>
    );
}