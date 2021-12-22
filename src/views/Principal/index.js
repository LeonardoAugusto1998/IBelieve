import * as React from 'react';
import { View, Modal, StatusBar, Dimensions } from 'react-native';
import Logo from '../../assets/logonew.png';
import GroupSvg from '../../assets/group.svg';
import SearchSvg from '../../assets/search.svg';
import { categorias } from '../../components/Categorias/categorias';
import { estabelecimentos, Estabelecimentos} from '../../components/Estabelecimentos/estabelecimentos';
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
    ModalView
} from './principalStyle';

export default function Principal({ navigation }){


    const w = Dimensions.get('window').width;
    const h = Dimensions.get('window').height;
    const [lista, setLista] = React.useState(categorias);
    const [listaEstab, setListaEstab] = React.useState(estabelecimentos);
    const [order, setOrder] = React.useState(false);

    const [digit, setDigit] = React.useState('')

    React.useEffect(()=>{
        setLista(categorias);
        setListaEstab(estabelecimentos)
    },[ 
        lista,
        estabelecimentos
    ]);


    React.useEffect( () => {

        if(digit === ''){
            setListaEstab(estabelecimentos)
        }else{
            setListaEstab(
                estabelecimentos.filter( item =>{
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

            setListaEstab(estabelecimentos);
            setOrder( false );

        }else{
            setListaEstab(
                estabelecimentos.filter( doc => {
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


                <LogoRede onPress={ () => {navigation.navigate('Rede')} }>
                    <View style={{marginLeft:5}}>
                        <GroupSvg width={22} height={20}/>
                    </View>
                    <NumText>30 Pessoas</NumText>
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
                                <CategoriaText>{item.nome}</CategoriaText>
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
