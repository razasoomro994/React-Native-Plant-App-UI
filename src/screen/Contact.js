import React from 'react'
import{StyleSheet ,View ,Text ,Button} from 'react-native'


 function Contact(props) {
    return (
       <View  style={styles.container}>
           <Text  style={{fontSize:25}}>
               Hello Contact
           </Text>
           <Button title='go to Home' onPress={()=> props.navigation.navigate('Home') }/>

       </View>
    )
}


const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default Contact