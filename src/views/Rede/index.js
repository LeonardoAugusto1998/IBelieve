import * as React from 'react';
import { View, Text, StatusBar, Dimensions, Alert } from 'react-native';
import BackArrow from '../../assets/arrow.svg';
import logo from '../../assets/logonew.png';
import rock from '../../assets/rock.png';
import IconGroup from '../../assets/group.svg';
import Camera from '../../assets/camera.svg';
import { seguidores, Seguidores } from '../../components/Seguidores/seguidores';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import { 
    Container,
    LogoImg,
    Cabecalho,
    VoltarView,
    VoltarText,
    FotoPessoal,
    LogoView,
    NomesLogo,
    GrupoView,
    Nome,
    TextoEstatico,
    TextoDeBaixo,
    SeguidoresLista,
    Linha,
    CameraView,
    FotoView
} from './redeStyle';
import { FlatList } from 'react-native-gesture-handler';

export default function Rede(){


    const w = Dimensions.get('window').width;

    const [seguidoresLista, setSeguidoresLista] = React.useState(seguidores);

    async function handleChangePhoto(){

    }

    return(

        <Container>

            <StatusBar backgroundColor={'#DCDCDC'}/>
            

            <Cabecalho>

                <VoltarView>
                    <VoltarText><BackArrow width={10} eight={10}/> Voltar</VoltarText>
                </VoltarView>
            

                <View>
                    <LogoImg source={logo}/>
                </View>

            </Cabecalho>



            <LogoView w={w}>

                <FotoView onPress={ handleChangePhoto }>
                    <FotoPessoal source={rock}/>

                    <CameraView>
                        <Camera width={13} height={13}/>
                    </CameraView>

                </FotoView>


                <NomesLogo>

                    <GrupoView>
                        <IconGroup width={20} height={20}/>
                        <TextoEstatico> Essa é a rede de</TextoEstatico>
                    </GrupoView>
                    
                    
                    <Nome>Dwane The Rock</Nome>
                    <TextoDeBaixo>30 Pessoas convidadas</TextoDeBaixo>
                </NomesLogo>

            </LogoView>




            <SeguidoresLista
            data={seguidoresLista}
            keyExtractor={ (item) => {item.id} }
            renderItem={ ( {item} ) => {
                return(
                    
                        <Seguidores item={item}/>
                    
                    
                );
            } }
            />




            <Linha/>


        </Container>
    );
}