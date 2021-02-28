import React from 'react'
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase'

export default class CustomSideDrawerMenu extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={styles.drawerItemsContainer}>
                    <DrawerItems {...this.props}/>
                </View>

                <View style={styles.logOutContainer}>
                    <TouchableOpacity style={styles.logOutButton} onPress={()=>{
                        this.props.navigation.navigate('WelcomeScreen')
                        firebase.auth().signOut()
                    }}>
                        <Text style={{fontWeight:"bold",fontSize:20,textAlign:"center",color:'#7bc9c7'}}>Log Out</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    drawerItemsContainer:{
        flex:0.7,
    },
    logOutContainer:{
        flex:0.2,
        justifyContent:'flex-end',
        paddingBottom:30,
    },
    logOutButton:{
        height:25,
        width:'100%',
        padding:11,
        justifyContent:'center'
    }
})