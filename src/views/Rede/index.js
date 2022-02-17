import * as React from 'react';
import { View, Modal, StatusBar, Dimensions, Alert} from 'react-native';
import BackArrow from '../../assets/arrow.svg';
import logo from '../../assets/logonew.png';
import IconGroup from '../../assets/group.svg';
import Camera from '../../assets/camera.svg';
import { Seguidores } from '../../components/Seguidores/seguidores';
import avatar from '../../assets/avatar.jpg';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';

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
    FotoView,
    AbrirCamera,
    ModalViewCamera,
    Botoes,

} from './redeStyle';

export default function Rede({ navigation }){


    const w = Dimensions.get('window').width;

    const [seguidoresLista, setSeguidoresLista] = React.useState([]);
    const [image, setImage] = React.useState(null);
    const [modalVisible, setModalVisible] = React.useState(false);


    async function handleChangePhotoCamera(){
               
        setModalVisible(false);
        const options = {
            mediaType: 'photo',
            maxWidth: 90,
            maxHeight: 90,
            cameraType: 'front',
            quality: 1,
            saveToPhotos: true,

        }

        await launchCamera(options)
        .then( (info=>{
            
            if(info.errorCode){
                Alert.alert('Alerta', 'Ta faltando permissao')
            } else {
                setImage(info.assets[0].uri);
                console.log(info.assets[0].uri);
            }

        }))


    }

    async function handleChangePhotoLibrary(){
        
        setModalVisible(false);
        const options = {
            mediaType: 'photo',
            maxWidth: 90,
            maxHeight: 90,
        }

        await launchImageLibrary(options)
        .then( (info=>{
            setImage(info.assets[0].uri);
            console.log(info.assets[0].uri);
            
        }))

    }



    React.useEffect(()=>{

        inserirFoto();
        buscarRede();

    }, []);



    async function buscarDadosUser(){

        await AsyncStorage.getItem('@user')
        .then( async (response) => { 
            let data = { email: JSON.parse(response)}

            await api.post('BuscarDadosUser', data)
                .then( (result) => {
                    let dadosStr = JSON.stringify(result)
                    let dados = JSON.parse(dadosStr);
                    setImage(userDados[0].fotoUrl);
                    setUserDados(dados.data);
                    
                })
                .catch((err) => {
                    console.log('Deu erro 1 ' + err)
                })
        })
        .catch((err) => {
            console.log('deu erro 1.1 --> ' + err)
        })
        
  

    function inserirFoto(){
        setImage(route.params?.fotoPerfil);

    }


    async function buscarRede(){

        

        await AsyncStorage.getItem('@user')
        .then( async (response) => {
            let data = { email: JSON.parse(response)};

            await api.post('buscarRede', data)
            .then( (result) => {

                let dadosStr = JSON.stringify(result)
                let dados = JSON.parse(dadosStr);
                setSeguidoresLista(dados.data);
                
            })

        })
        .catch((err) => {
            console.log('deu erro 1.2 --> ' + err)
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

                <FotoView onPress={ () => {setModalVisible(true)} }>
                    {image === null ? <FotoPessoal source={avatar}/> : <FotoPessoal source={{uri: image}}/>}

                    <CameraView>
                        <Camera width={13} height={13}/>
                    </CameraView>

                </FotoView>


                <NomesLogo>

                    <GrupoView>
                        <IconGroup width={20} height={20}/>
                        <TextoEstatico> Essa é a rede de</TextoEstatico>
                    </GrupoView>
                    
                    
                    <Nome>{route.params?.nome.split(' ')[0]} {route.params?.nome.split(' ')[1]}</Nome>
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


            <Modal
            transparent={true}
            visible={modalVisible}
            animationType='slide'
            onRequestClose={() => {setModalVisible(false)}}
            hardwareAccelerated = {true}
            >

                <ModalViewCamera w={w} onPress={() => {setModalVisible(false)}}>

                    <Linha/>

                    
                    <Botoes cor='#E6E6FA' w={w} onPress={ handleChangePhotoCamera }>
                        <AbrirCamera>Câmera </AbrirCamera>
                        <Camera width={20} height={20}/>
                    </Botoes>

                    <Botoes cor='#F0FFF0' w={w} onPress={ handleChangePhotoLibrary }>
                        <AbrirCamera>Galeria </AbrirCamera>
                        <Camera width={20} height={20}/>
                    </Botoes>


                
                </ModalViewCamera>

            </Modal>


        </Container>
    );
}