import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView, FlatList, Image, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import Navigater from '../config/Navigater'
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import plant from '../const/plant.js';
const width = Dimensions.get('screen').width / 2 - 30
function Home({navigation}) {

    const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

    const [categoryIndex, setCategoryIndex] = useState(0)

    const CategoryList = () => {
        return (
            <View style={styles.categoryContainer}>
                {categories.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => setCategoryIndex(index)} activeOpacity={0.8} >
                        <Text
                            style={[styles.categText,
                            categoryIndex == index && styles.catSelectedText

                            ]} >{item}</Text>
                    </TouchableOpacity>

                ))}
            </View>
        );
    }

    const Card = ({ plant }) => {
        return    <TouchableOpacity onPress={()=> navigation.navigate('About',plant)} >
            <View style={styles.Card}>
            <View style={{ alignItems: 'flex-end' }}>
                <View style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: plant.like
                        ? 'rgba(245, 42, 42,0.2)'
                        : 'rgba(0,0,0,0.2) ',
                }}>
                    <MaterialIcons name="favorite" size={24} color={plant.like ? '#9e0e1a' : 'black'} />
                </View>
            </View>

            <View style={{ height: 100, }}>
                <Image
                    source={plant.img}
                    style={{ flex: 1, resizeMode: 'contain' }}
                />
            </View>
            <Text style={{ fontSize: 13, marginTop: 10, fontWeight: 'bold' }}>{plant.name}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>${plant.price}</Text>
                <View style={{
                    width: 23,
                    height: 23,
                    backgroundColor: '#246b2f',
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <Text style={{fontWeight:'bold', color:'white', fontSize:18}}> + </Text>

                </View>
            </View>

        </View>
        </TouchableOpacity>
         
    }

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Wellcome To</Text>
                    <Text style={{ fontSize: 38, fontWeight: 'bold', color: '#246b2f' }}>Plant Shop</Text>
                </View>

                <Feather name="shopping-cart" size={17} color="black" style={{ marginRight: 7 }} />

            </View>

            <View style={{ marginTop: 30, flexDirection: 'row', }}>
                <View style={styles.searchContiner}>
                    <FontAwesome name="search" size={25} style={{ marginLeft: 10 }} color="black" />
                    <TextInput placeholder='search here' style={styles.input} />
                </View>

                <View style={styles.sortbtn}>
                    <MaterialIcons name="sort" size={24} color="white" />
                </View>


            </View>

            <CategoryList />

            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    marginBottom: 50,
                }}

                numColumns={2} data={plant} renderItem={({ item }) => <Card plant={item} />} />

                <View style={{
                    fontSize :10,
                    fontWeight:'bold',
                     backgroundColor:'#246b2f',
                     width:'100%',
                     height:60,
                     color:'white',


                     alignItems:'center'}}><Text style={{
                         color:'white',
                         marginTop:20,
                         fontWeight:'bold'
                     }}>Design By Hasnain Raza</Text></View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },

    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,

    },
    searchContiner: {
        height: 40,
        backgroundColor: '#e0e6d8',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,

    },

    input: {
        fontWeight: 'bold',
        color: '#0e1c10',
        fontSize: 15,
        flex: 1,
        marginLeft: 10,
    },
    sortbtn: {
        width: 40,
        height: 40,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#246b2f',
        marginRight: 10,
        borderRadius: 10
    },

    categoryContainer: {

        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 30,
        justifyContent: 'space-between',
        marginLeft: 7,
        marginRight: 7,

    },
    categText: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#575551',
    },
    catSelectedText: {
        color: '246b2f',
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: '246b2f',
        fontSize: 13,
    },
    Card: {
        height: 210,
        backgroundColor: '#ccdbd0',
        width,
        marginHorizontal: 12,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    }
})



export default Home