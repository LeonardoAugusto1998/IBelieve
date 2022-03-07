


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
            setBorder(5);
        } else {
            setData( prev =>{
                return {...prev, status: false}
            });
            setBorder(0);
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