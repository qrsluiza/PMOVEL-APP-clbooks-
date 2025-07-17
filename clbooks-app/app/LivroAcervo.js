import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Livro from '../assets/aselecao.png'; // imagem da capa do livro
import { useRouter } from 'expo-router'

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


                <View style={styles.cardLivro}>
                    <Image source={Livro} style={styles.imgLivro} />
                    <View style={styles.infoLivro}>
                        <Text style={styles.tituloLivro}>A Seleção</Text>
                        <View>
                            <Text style={styles.desc}>Para trinta e cinco garotas, a Seleção é a chance de uma vida. É a oportunidade de ser alçada a um mundo de vestidos deslumbrantes e joias valiosas. De morar em um palácio, conquistar o coração do belo príncipe Maxon e um dia ser a rainha. America Singer, no entanto, estar entre as Selecionadas é um pesadelo.</Text>
                        </View>

                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity>
                    <View style={styles.iconWrapper}>
                        <TouchableOpacity style={styles.cIcon} onPress={() => { router.push('/InicialLeitor') }}>
                            <Text style={styles.cIcon}>C</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => { router.push('/AcervoEscritor') }}>
                    <Feather name="shopping-cart" size={24} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => { router.push('/ForumLeitor') }}>
                    <FontAwesome5 name="users" size={24} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => { router.push('/NotificaLeitor') }}>
                    <Feather name="bell" size={24} color="white" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <MaterialCommunityIcons name="account-circle-outline" size={26} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.voltarContainer}>
                <View style={styles.linha} />
                  <TouchableOpacity style={styles.voltarTexto} onPress={() => { router.push('/AcervoEscritor') }}>
                <Text style={styles.voltarTexto}>VOLTAR</Text>
                </TouchableOpacity>
                <View style={styles.linha} />
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
        marginTop: 15,
    },

    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 70,
        backgroundColor: '#0B0B16',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    iconWrapper: {
        borderWidth: 2,
        borderColor: '#62B5E6',
        borderRadius: 50,
        width: 34,
        height: 34,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cIcon: {
        color: '#62B5E6',
        fontWeight: 'bold',
        fontSize: 20,
    },
    voltarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 370,
    },

    linha: {
        width: 20, // menor que antes
        height: 1,
        backgroundColor: '#D9D9D9',
        marginHorizontal: 10,
    },

    voltarTexto: {
        color: '#62B5E6',
        fontWeight: 'bold',
        fontSize: 14,
    },

});
