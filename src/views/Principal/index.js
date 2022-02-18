import * as React from 'react';
import { View, BackHandler, StatusBar, Dimensions, Alert } from 'react-native';
import Logo from '../../assets/logonew.png';
import GroupSvg from '../../assets/group.svg';
import SearchSvg from '../../assets/search.svg';
import { Estabelecimentos } from '../../components/Estabelecimentos/estabelecimentos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Container,
    LogoImg,
    AreaLogo,
    LogoRede,
    NumText,
    PeqText,
    BemVindo,
    Conheca,
    Input,
    InputView,
    SvgSearch,
    CategoriaView,
    CategoriaText,
    ListaCategorias,
    ListaEstabelecimento,
    Linha,
} from './principalStyle';
import api from '../../services/api';

export default function Principal({ navigation }){


    const w = Dimensions.get('window').width;
    const h = Dimensions.get('window').height;
    const [lista, setLista] = React.useState([]);
    const [estaticoLista, setEstaticoLista] = React.useState([]);
    const [listaEstab, setListaEstab] = React.useState([]);
    const [estatico, setEstatico] = React.useState([]);
    const [order, setOrder] = React.useState(false);
    const [image, setImage] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [digit, setDigit] = React.useState('');
    const [data, setData] = React.useState('');

    const [userDados, setUserDados] = React.useState([]);



    React.useEffect(() => {

        buscar_dados();
        buscar_estabelecimentos();
        buscar_categorias();
        buscarDadosUser();

        const backAction = () => {
          Alert.alert("Atenção", "Tem certeza que deseja sair?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "Sair", onPress: async () => {
                BackHandler.exitApp(); 
                await AsyncStorage.clear();
            } }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();


      }, []);



    async function buscar_categorias(){
          await api.get('buscarCategorias')
          .then( response => {
            let dataStr = JSON.stringify(response);
            let data = JSON.parse(dataStr);

            setLista(data.data);
            setEstaticoLista(data.data);

          })
      }



    async function buscarDadosUser(){

        await AsyncStorage.getItem('@user')
        .then( async (response) => { 
            let data = { email: JSON.parse(response)}

            await api.post('BuscarDadosUser', data)
                .then((result) => {
                    let dadosStr = JSON.stringify(result)
                    let dados = JSON.parse(dadosStr);
                    setNome(dados.data[0].nome);
                    setImage(dados.data[0].fotoUrl);
                })
                .catch((err) => {
                    console.log('Deu erro 1 ' + err)
                })
        })
        .catch((err) => {
            console.log('deu erro 1.1 --> ' + err)
        })
        
  
    }



      async function buscarDadosUser(){

        await AsyncStorage.getItem('@user')
        .then( async (response) => { 
            let data_JSON = { email: JSON.parse(response)}

            await api.post('BuscarDadosUser', data_JSON)
                .then( (result) => {
                    let dadosStr = JSON.stringify(result)
                    let dados = JSON.parse(dadosStr);
                    setData(dados.data);
                    setImage(data[0].fotoUrl);
                    setNome(data[0].nome);
                })
                .catch((err) => {
                    console.log('Deu erro 1 ' + err)
                })
        })
        .catch((err) => {
            console.log('deu erro 1.1 --> ' + err)
        })
        
  
    }


      async function buscar_dados(){

        await AsyncStorage.getItem('@user')
        .then( async (resp) => {
            let data = { email: JSON.parse(resp)}

            await api.post('buscar', data)
            .then((response) => {

                
                let dados2 = JSON.stringify(response);
                let dados = JSON.parse(dados2);
                setUserDados(dados.data);

                console.log('Deu Certo');
                
            })
            .catch((err) => {
                console.log('Deu erro aqui na busca do num de rede -->' + err)
            })
                
        })
        

    };



    async function buscar_estabelecimentos(){
        api.get('buscarEstabelecimentos')
        .then( response_estab => {
            let dataStr = JSON.stringify(response_estab)
            let data = JSON.parse(dataStr)

            setListaEstab(data.data);
            setEstatico(data.data);
        })
        .catch((err) => {
            console.log('Não buscou os estabelecimentos --> ' + err)
        })
    }



    React.useEffect(()=>{
        setLista(estaticoLista);
        setListaEstab(estatico)
    },[ 
        lista,
        estatico
    ]);



    React.useEffect( () => {

        if(digit === ''){
            setListaEstab(estatico)
        }else{
            setListaEstab(
                estatico.filter( item =>{
                    if(item.nome.toLowerCase().indexOf(digit.toLowerCase()) > -1) {
                        return true
                    }else{
                        return false
                    }
                })
            )
        }

    }, [digit]);


    function clickCategoria({ item }){
        if( order ){

            setListaEstab(estatico);
            setOrder( false );

        }else{
            setListaEstab(
                estatico.filter( doc => {
                    if(doc.categoria1 === null) {
                       return doc.categoria2 === item.nome
                    }

                    if(doc.categoria2 === null) {
                       return doc.categoria1 === item.nome
                    }

                    if(doc.categoria1 !== null && doc.categoria2 !== null){
                        return doc.categoria1 === item.nome || doc.categoria2 === item.nome
                    }
                })
            )
            setOrder(true);
        }

    }

    return(


        <Container>
            
            <StatusBar backgroundColor={'#DCDCDC'}/>



            <AreaLogo>


                <LogoImg source={Logo}/>


                <LogoRede onPress={ () => {navigation.navigate('Rede', {fotoPerfil: image, nome: nome})}}>
                    <View style={{marginLeft:5}}>
                        <GroupSvg width={22} height={20}/>
                    </View>
                    <NumText>{userDados.length} Pessoas</NumText>
                    <PeqText>na sua rede</PeqText>
                </LogoRede>

            </AreaLogo>



            <BemVindo>BEM-VINDO</BemVindo>
            <Conheca>Conheça os nossos Parceiros</Conheca>



            <InputView>
                <Input
                w={w}
                placeholder='Pesquise Estabelecimentos'
                onChangeText={ (text) => { setDigit(text)} }
                />
                <SvgSearch>
                    <SearchSvg width={25} height={25}/>
                </SvgSearch>
            </InputView>




                    



            
                <ListaCategorias
                    showsVerticalScrollIndicator={false}
                    data={lista}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    numColumns={3}
                    renderItem={ ({ item }) => {
                        return(
                            <CategoriaView w={w} h={h} onPress={ () => { clickCategoria({item}) } }>
                                <CategoriaText>{ item.nome }</CategoriaText>
                            </CategoriaView>
                        );
                    }}
                    />

            
            


            
                <ListaEstabelecimento
                    w={w}
                    data={listaEstab}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={ ({ item }) => {                        
                        return(
                            <View>
                                <Estabelecimentos item={item}/>
                            </View>
                        );
                    }}
                    />






                    <Linha/>



        </Container>
    );
}