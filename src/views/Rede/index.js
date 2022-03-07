import * as React from 'react';
import { View, Modal, StatusBar, Dimensions} from 'react-native';
import BackArrow from '../../assets/arrow.svg';
import logo from '../../assets/logonew.png';
import IconGroup from '../../assets/group.svg';
import Camera from '../../assets/camera.svg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Seguidores } from '../../components/Seguidores/seguidores';
import avatar from '../../assets/avatar.jpg';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import firebaseConfig from '../../services/firebaseConnection';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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
import axios from 'axios';

initializeApp(firebaseConfig);

export default function Rede({ navigation, route }){


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
        .then( async info => {

            const response = await AsyncStorage.getItem('@user')
            
            const storage = getStorage();
            const reff = ref(storage, JSON.parse(response));

            const img = await fetch(info.assets[0].uri);
            const bytes = await img.blob();

            await uploadBytes(reff, bytes)
            .then(async () => {
                
                await getDownloadURL(reff)
                .then ( async url => {

                    await AsyncStorage.getItem('@user')
                    .then( email => {
                        
                        const data = {url: url, email: JSON.parse(email)};
                        api.post('trocarFoto', data)
                        .then(() => {
                            console.log('Foto trocada com sucesso')
                        })

                    })
                    .catch((err) => {
                        console.log('Aqui esta o erro para trocar a foto --> ' + err)
                    })

                    
                })
                .catch((err) => {
                    console.log('erro para obter a url --> ' + err)
                })
                setImage(info.assets[0].uri);

            })
        })


    }


    async function handleChangePhotoLibrary(){
        
        setModalVisible(false);
        const options = {
            mediaType: 'photo',
            maxWidth: 90,
            maxHeight: 90,
        }

        await launchImageLibrary(options)
        .then( async info => {

            const response = await AsyncStorage.getItem('@user')

            //aqui que vai ficar o código para colocar no storage do firebase
            const storage = getStorage();
            const reff = ref(storage, JSON.parse(response));

            const img = await fetch(info.assets[0].uri);
            const bytes = await img.blob();

            await uploadBytes(reff, bytes)
            .then(async () => {
                
                await getDownloadURL(reff)
                .then ( async url => {

                    await AsyncStorage.getItem('@user')
                    .then( email => {
                        
                        const data = {url: url, email: JSON.parse(email)};
                        api.post('trocarFoto', data)
                        .then(() => {
                            console.log('Foto trocada com sucesso')
                        })

                    })
                    .catch((err) => {
                        console.log('Aqui esta o erro para trocar a foto --> ' + err)
                    })

                    
                })
                .catch((err) => {
                    console.log('erro para obter a url --> ' + err)
                })
                setImage(info.assets[0].uri);

            })
            
        })

    }


    React.useEffect(()=>{

        inserirFoto();
        buscarRede();

    }, []);


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

<StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            

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

                <ModalViewCamera w={w} onPress={() => { setModalVisible(false) }}>

                    <Linha onPress={() => { setModalVisible(false) }}/>

                    
                    <Botoes cor='#E6E6FA' w={w} onPress={ handleChangePhotoCamera }>
                        <AbrirCamera>Câmera </AbrirCamera>
                        <Camera width={20} height={20}/>
                    </Botoes>

                    <Botoes cor='#F0FFF0' w={w} onPress={ handleChangePhotoLibrary }>
                        <AbrirCamera>Galeria </AbrirCamera>
                        <Icon name='folder-open' size={20}/>
                    </Botoes>


                
                </ModalViewCamera>

            </Modal>


        </Container>
    );
}
