import * as React from 'react';
import { View, Text, StatusBar, Dimensions, Alert } from 'react-native';
import BackArrow from '../../assets/arrow.svg';
import logo from '../../assets/logonew.png';
import rock from '../../assets/rock.png';
import IconGroup from '../../assets/group.svg';
import Camera from '../../assets/camera.svg';
import { seguidores, Seguidores } from '../../components/Seguidores/seguidores';
import avatar from '../../assets/avatar.jpg';
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

export default function Rede({ navigation }){


    const w = Dimensions.get('window').width;

    const [seguidoresLista, setSeguidoresLista] = React.useState(seguidores);
    const [image, setImage] = React.useState(null);
    const [imageDoc, setImageDoc] = React.useState(null);

    async function handleChangePhoto(){

        const options = {
            mediaType: 'photo',
            maxWidth: 90,
            maxHeight: 90,
            cameraType: 'front',
            
        }

        const Picker = launchImageLibrary(options)
        .then( ( doc ) => {
            
        })

    }

    return(

        <Container>

            <StatusBar backgroundColor={'#DCDCDC'}/>
            

            <Cabecalho>

                <VoltarView onPress={ () => {navigation.goBack()} }>
                    <VoltarText><BackArrow width={10} eight={10}/> Voltar</VoltarText>
                </VoltarView>
            

                <View>
                    <LogoImg source={logo}/>
                </View>

            </Cabecalho>



            <LogoView w={w}>

                <FotoView onPress={ handleChangePhoto }>
                    {image === null ? <FotoPessoal source={avatar}/> : <FotoPessoal source={image.assets.uri}/>}

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
                    <TextoDeBaixo>{seguidoresLista.length} Pessoas convidadas</TextoDeBaixo>
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