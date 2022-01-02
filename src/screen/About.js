import React from 'react'
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons';


function About({ navigation, route }) {
    const plant = route.params
    console.log(plant)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>

                <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.goBack()} />
                <Feather name="shopping-cart" size={24} color="black" />
            </View>
            <View style={styles.imageContiner}>
                <Image style={{ height: 900, width: 300, resizeMode: 'contain', flex: 1 }} source={plant.img} />

            </View>
            <View style={styles.detailsContainer}>
                <View
                    style={{
                        marginLeft: 20,
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                    }}>
                    <View style={styles.line} />
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Best Choice</Text>
                </View>
                <View style={{
                    marginLeft: 20,
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{plant.name}</Text>

                    <View style={styles.priceTag}>
                        <Text
                            style={{
                                marginLeft: 15,
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 16,
                            }}>
                            ${plant.price}
                        </Text>
                    </View>
                </View>
                <View style={{paddingHorizontal: 20, }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 12,
              lineHeight: 18,
              marginTop: 10,
            }}>
            {plant.about}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                1
              </Text>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>+</Text>
              </View>
            </View>
            <View style={styles.buyBtn}>
              <Text
                style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                Buy
              </Text>
            </View>
            </View>
          </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    imageContiner: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',


    },
    detailsContainer: {
        flex: 0.85,
        backgroundColor: '#f5f3ed',
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30,
    },
    line: {
        width: 25,
        height: 2,
        backgroundColor: 'black',
        marginBottom: 5,
        marginRight: 3,
    },
    priceTag: {
        backgroundColor: '#246b2f',
        width: 80,
        height: 40,
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
    },
    borderBtn: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 30,
      },

      borderBtnText:
       {fontWeight: 'bold', fontSize: 22},
      buyBtn: {
        width: 130,
        height: 50,
        backgroundColor: '#246b2f',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
      },
})


export default About