import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Livro from '../assets/aselecao.png'; // imagem da capa do livro
import {useRouter} from 'expo-router'

export default function TelaAcervo() {

const router = useRouter()

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>

                <View style={styles.topo}>
                    <Text style={styles.logo}>
                        <Text style={styles.logoAzul}>AC</Text>ERVO
                        <Text style={styles.logoBook}>books</Text>
                    </Text>
                </View>


                <View style={styles.filtros}>
                    <TouchableOpacity style={styles.filtroBtn}>
                        <Feather name="menu" size={18} color="#62B5E6" />
                        <Text style={styles.filtroTexto}>FILTRAR:</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filtroQuadrado}>
                        <Text style={styles.filtroTexto}>GÊNERO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filtroQuadrado}>
                        <Text style={styles.filtroTexto}>PREÇO</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.cardLivro}>
                    <Image source={Livro} style={styles.imgLivro} />
                    <View style={styles.infoLivro}>
                        <Text style={styles.tituloLivro}>A Seleção</Text>
                        <Text style={styles.desc}>Autora: Kiera Cass</Text>
                        <Text style={styles.desc}>Gênero: Romance</Text>
                        <Text style={styles.preco}>Preço: R$ 40.50</Text>
                    </View>
                    <TouchableOpacity>
                        <Feather name="shopping-cart" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </ScrollView>


            <View style={styles.footer}>
                <TouchableOpacity>
                    <View style={styles.iconWrapper}>
                        <Text style={styles.cIcon}>C</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Feather name="shopping-cart" size={24} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => {router.push('/ForumLeitor')}}>
                    <FontAwesome5 name="users" size={24} color="white" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Feather name="bell" size={24} color="white" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <MaterialCommunityIcons name="account-circle-outline" size={26} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#12111F',
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 90,
    },
    scrollContent: {
        paddingBottom: 100,
    },
    topo: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    logoAzul: {
        color: '#62B5E6',
    },
    logoBook: {
        fontFamily: 'cursive',
        fontSize: 22,
    },
    filtros: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    filtroBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    filtroQuadrado: {
        borderWidth: 1,
        borderColor: '#62B5E6',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 4,
    },
    filtroTexto: {
        color: '#62B5E6',
        fontSize: 13,
        fontWeight: 'bold',
    },
    cardLivro: {
        flexDirection: 'row',
        backgroundColor: '#1E1E2E',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        gap: 10,
    },
    imgLivro: {
        width: 70,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 5,
    },
    infoLivro: {
        flex: 1,
    },
    tituloLivro: {
        color: '#62B5E6',
        fontWeight: 'bold',
        fontSize: 16,
    },
    desc: {
        color: '#E8E8E8',
        fontSize: 13,
    },
    preco: {
        color: '#62B5E6',
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 5,
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#12111F',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 20,
    },
    iconWrapper: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: '#62B5E6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cIcon: {
        color: 'white',
        fontWeight: 'bold',
    },
});
